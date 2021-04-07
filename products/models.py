from django.db import models
from datetime import datetime
from django.contrib.auth.models import User
from autoslug import AutoSlugField
class UserGeoLocation(models.Model):
         user = models.OneToOneField(User,on_delete=models.CASCADE)
         latitude = models.FloatField(blank=False, null=False)
         longitude = models.FloatField(blank=False, null=False)
class Type_Product(models.Model):
    Name = models.CharField(max_length=200)
    def __str__(self):
        return str(self.Name)
class Categorie(models.Model):
    Name = models.CharField(max_length=200)
    type = models.ManyToManyField(Type_Product)


    def __str__(self):
        return str(self.Name)

class Domaine(models.Model):
    Name = models.CharField(max_length=200)
    def __str__(self):
        return str(self.Name)

class Resellers(models.Model):
 name_fr = models.CharField(max_length=200)
 imageReteller =models.ImageField(null=True, blank=True, default='default_img.png')
 link = models.CharField(max_length=200,null=True, blank=True)
 domaine = models.ForeignKey(Domaine,null=True, blank=True,on_delete=models.SET_NULL)
 localisation = models.CharField(max_length=200,null=True, blank=True)


 @property
 def imageURL(self):
	 try:
		 url = self.imageReteller.url
	 except:
		 url = ''
	 return url
 def __str__(self):
        return self.name_fr


class Price_Item(models.Model):
    item_owner = models.ForeignKey( Resellers, on_delete=models.CASCADE, null=True)
    item_name =  models.CharField(max_length=200,default='', null=True)
    price = models.CharField(max_length=200,default='0', null=True)
    date = models.DateTimeField(default=datetime.now, blank=True)
    link =  models.CharField(max_length=200,default='', null=True)
    class Meta:
        ordering = ['price','item_owner']

    def __str__(self):
        return str(self.price)


class Product(models.Model):
    ref = models.CharField(max_length=200,null=True, blank=True)
    slug = AutoSlugField(null=True, default=None,
                         unique=True, populate_from='name')
    name = models.CharField(max_length=200,null=True, blank=True)
    name_fr = models.CharField(max_length=200,null=True, blank=True)
    price = models.ManyToManyField(Price_Item)
    digital = models.BooleanField(default=False, null=True, blank=True)
    image = models.ImageField(null=True, blank=True, default='default_img.png')
    image_url = models.CharField(max_length=200,null=True, blank=True)
    description = models.TextField(null=True,blank=True)
    categorie= models.ForeignKey(Categorie, on_delete=models.SET_NULL, null=True, blank=True)
    type = models.ForeignKey(Type_Product, on_delete=models.SET_NULL, null=True, blank=True)
    @property
    def order_by(self):
        return self.price.order_by('id')
    def __str__(self):
        return self.name_fr

    @property
    def imageURL(self):
        try:
            url = self.image.url
        except:
            url = ''
        return url

    @property
    def price_min(self):
        import numpy
        try:
            a = []
            for i in self.price.all():
                a.append(float(i.price))
            a = numpy.array(a)
            ma = a[a != 0]
            return ma.min()
        except:
            return 0

    def price_max(self):
        try:
            import numpy
            a = []
            for i in self.price.all():
                a.append(float(i.price))
            a = numpy.array(a)
            ma = a[a != 0]
            return ma.max()
        except:
            return 0


class Order(models.Model):
    customer = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True, blank=True)
    date_ordered = models.DateTimeField(auto_now_add=True)
    complete = models.BooleanField(default=False)
    transaction_id = models.CharField(max_length=100, null=True)

    def __str__(self):
        return str(self.id)

    @property
    def shipping(self):
        shipping = False
        orderitems = self.orderitem_set.all()
        for i in orderitems:
            if i.product.digital == False:
                shipping = True
        return shipping

    @property
    def get_cart_total(self):
        orderitems = self.orderitem_set.all()
        total = sum([item.get_total for item in orderitems])
        return total

    @property
    def get_cart_items(self):
        orderitems = self.orderitem_set.all()
        total = sum([item.quantity for item in orderitems])
        return total


class OrderItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True)
    order = models.ForeignKey(Order, on_delete=models.CASCADE, null=True)
    quantity = models.IntegerField(default=0, null=True, blank=True)
    date_added = models.DateTimeField(auto_now_add=True, null=True)

    @property
    def get_total(self):
        total = self.product.price_min * self.quantity
        return total
    def __str__(self):
       return str(self.product+self.quantity)

class FavoriteItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True)
    customer = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    date_added = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return str(self.id)


class ShippingAddress(models.Model):
    customer = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    address = models.CharField(max_length=200, null=False)
    city = models.CharField(max_length=200, null=False)
    state = models.CharField(max_length=200, null=False)
    zipcode = models.CharField(max_length=200, null=False)
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.address
class Speciality(models.Model):
    Name = models.CharField(max_length=200)
    def __str__(self):
        return str(self.Name)
class Services(models.Model):
    Name = models.CharField(max_length=200)
    def __str__(self):
        return str(self.Name)
class Med(models.Model):
    slug = AutoSlugField(null=True, default=None,
                         unique=True, populate_from='name')
    name = models.CharField(max_length=200,null=True, blank=True)
    description = models.TextField(null=True,blank=True)
    speciality= models.ForeignKey(Speciality, on_delete=models.SET_NULL, null=True, blank=True)
    city = models.CharField(max_length=200, null=True,blank=True)
    def __str__(self):
        return str(self.name)
    @property
    def get_distance(self):
        from Console.gps import Haversine
        import geocoder
        g = geocoder.ip('me')
        location=self.city.split('/')
        try:
            location[0]=float(location[0])
            location[1]=float(location[1])

            return round( Haversine(location,g.latlng).km,2)
        except:
            return None
    @property
    def get_link(self):
        return 'https://www.google.com/maps?q='+self.city.replace('/',',')
