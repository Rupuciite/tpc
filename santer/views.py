from django.shortcuts import render
from products.utils import *
from products.models import *
from django.core.paginator import Paginator
from django.http import HttpResponse

def cart(request):
    data = cartData(request)

    order = data['order']

    context = {'cartItems':data['cartItems'],'items':data['items'],'order': order, 'categories': data['categories'],'Resellers':Resellers.objects.all()}

    return context
def save_user_geolocation(request):
 if request.method == 'POST':
        latitude = request.POST['lat']
        longitude = request.POST['long']
        UserGeoLocation.create(
        user = request.user,
        latitude= latitude,
        longitude = longitude,
              )

        return HttpResponse('')

def store(request):
    data = cart(request)
    cartItems = data['cartItems']
    order = data['order']
    items = data['items']
    producta =Med.objects.all()
    search_input = request.GET.get('search-area') or ''
    if search_input:
        producta = producta.filter(
                    name_fr__icontains  =search_input)
    products = producta.count()
    this_page = request.GET.get("page", 1)
    pages = Paginator(producta, 12)
    producta = pages.page(this_page)
    context = {'product_number': products, 'products': producta,
               'cartItems': cartItems, 'order': order, 'categories':data['categories'],'speciality':Speciality.objects.all()}
    context.update({'search_input':search_input})
    if search_input:
       return render(request, 'meds.html', context)
    else:
     return render(request, 'meds.html', context)
def product_about(request, slug):
    product = Med.objects.get(slug=slug)
    data = cartData(request)
    data.update({'product': product})
    return render(request, 'deatails_med.html', data)
