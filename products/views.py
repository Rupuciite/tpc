from django.shortcuts import render
from django.http import JsonResponse
import json
import datetime
from .models import *
from .utils import cookieCart, cartData, guestOrder
from django.core.paginator import Paginator
def clean():
    for row in Product.objects.all().reverse():
        if Product.objects.filter(ref=row.ref).count() > 1:
            row.delete()
        if row.ref=='':
            row.delete()
def notss():
    return

def product_about(request, slug):
    product = Product.objects.get(slug=slug)
    data = cartData(request)
    data.update({'product': product})
    data.update({'prices':product.price.all()})
    return render(request, 'details.html', data)


def store(request):
    data = cartData(request)
    cartItems = data['cartItems']
    order = data['order']
    items = data['items']
    producta = Product.objects.all()
    search_input = request.GET.get('search-area') or ''
    if search_input:
        producta = producta.filter(
                    name_fr__icontains  =search_input)
    products = producta.count()
    this_page = request.GET.get("page", 1)
    pages = Paginator(producta, 12)
    producta = pages.page(this_page)
    context = {'product_number': products, 'products': producta,
               'cartItems': cartItems, 'order': order, 'categories':data['categories']}
    context.update({'search_input':search_input})
    if search_input:
       return render(request, 'catalog.html', context)
    else:
     return render(request, 'catalog.html', context)


def checkout(request):
    data = cartData(request)

    cartItems = data['cartItems']
    order = data['order']
    items = data['items']

    context = {'items': items, 'order': order, 'cartItems': cartItems,'categories':data['categories']}
    return render(request, 'checkout.html', context)


def updateItem(request):
    data = json.loads(request.body)
    productId = data['productId']
    action = data['action']
    print(action)
    customer = request.user.id
    product = Product.objects.get(id=productId)
    order, created = Order.objects.get_or_create(
        customer=customer, complete=False)
    try:
        orderItem = OrderItem.objects.get(order=order, product=product)
    except:
        orderItem = OrderItem(order=order, product=product)
        orderItem.save()
        orderItem = OrderItem.objects.get(order=order, product=product)

    if action == 'add':
        orderItem.quantity = (orderItem.quantity + 1)
        orderItem.save()
    elif action == 'remove':
        orderItem.quantity = (orderItem.quantity - 1)
        orderItem.save()
    elif action == 'delete':
        orderItem.quantity = 0
        orderItem.save()
    if orderItem.quantity <= 0:
        orderItem.delete()
    if action == 'favorite':
        try:
            favoriteItem = FavoriteItem.objects.get(
                customer=customer, product=product)
        except:
            favoriteItem = FavoriteItem()
            favoriteItem.product = product
            favoriteItem.customer = request.user
            favoriteItem.save()
    if action == 'favorite_remove':
        try:
            favoriteItem = FavoriteItem.objects.get(
                customer=customer, product=product)
            favoriteItem.delete()
        except:
            print('error accured')
    return JsonResponse('Item was added', safe=False)


def processOrder(request):
    transaction_id = datetime.datetime.now().timestamp()
    data = json.loads(request.body)

    if request.user.is_authenticated:
        customer = request.user.customer
        order, created = Order.objects.get_or_create(
            customer=customer, complete=False)
    else:
        customer, order = guestOrder(request, data)

    total = float(data['form']['total'])
    order.transaction_id = transaction_id

    if total == order.get_cart_total:
        order.complete = True
    order.save()

    if order.shipping == True:
        ShippingAddress.objects.create(
            customer=customer,
            order=order,
            address=data['shipping']['address'],
            city=data['shipping']['city'],
            state=data['shipping']['state'],
            zipcode=data['shipping']['zipcode'],
        )

    return JsonResponse('Payment submitted..', safe=False)
