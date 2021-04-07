from django.contrib import admin

from .models import *

admin.site.register(Type_Product)
admin.site.register(Categorie)
admin.site.register(Resellers)
admin.site.register(Price_Item)
admin.site.register(Product)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)
admin.site.register(FavoriteItem)
