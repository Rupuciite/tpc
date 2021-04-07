from django.http import HttpResponse
from django.shortcuts import render,redirect
from django.contrib.auth.forms import AuthenticationForm,PasswordChangeForm
from products.models import *
from .forms import CreateUserForm
from django.contrib import messages
from django.contrib.auth import authenticate,login,logout
from products.utils import *
from . import settings


def update(request):
 import json
 from django.http import JsonResponse
 import TPC.Database as DB
 data = json.loads(request.body)
 DB.Update(request.POST.get('firstname'),request.POST.get('lastname'),request.POST.get('email'),request.user.id)
 messages.success(request, 'Your informations was successfully updated!')

 return JsonResponse(json.dumps({ "first_name" : request.POST.get('firstname'), "last_name" : request.POST.get('lastname'), "email" : request.POST.get('email'), "username":request.user.username}), content_type="application/json")






def cart(request):
 data = cartData(request)
 order = data['order']
 context = {'order':order,'categories':data['categories']}
 if request.user.is_authenticated:
  products = FavoriteItem.objects.filter(customer=request.user)
  context.update({'products':products})
 return context
def logout_view(request):
    logout(request)
    return redirect('signin')
def details_tab2 (request):
    if 'search-area' in request.GET:
        return redirect('/products/?search-area='+request.GET["search-area"])
    return render(request, "details-tab2.html",cart(request))
def index (request):
    if 'search-area' in request.GET:
        return redirect('/products/?search-area='+request.GET["search-area"])
    return render(request, "index.html",cart(request))
def article (request):
    if 'search-area' in request.GET:
        return redirect('/products/?search-area='+request.GET["search-area"])
    return render(request, "article.html",cart(request))
def about (request):
    if 'search-area' in request.GET:
        return redirect('/products/?search-area='+request.GET["search-area"])
    return render(request, "about.html",cart(request))
def catalog (request):
    if 'search-area' in request.GET:
        return redirect('/products/?search-area='+request.GET["search-area"])
    return render(request, "catalog.html",cart(request))
def about (request):
    if 'search-area' in request.GET:
        return redirect('/products/?search-area='+request.GET["search-area"])
    return render(request, "about.html",cart(request))

def category (request):
    if 'search-area' in request.GET:
        return redirect('/products/?search-area='+request.GET["search-area"])
    return render(request, "category.html",cart(request))
def contact (request):
 if 'search-area' in request.GET:
     return redirect('/products/?search-area='+request.GET["search-area"])
 if request.method=='POST':
  name=request.POST.get('name')
  email=request.POST.get('email')
  subject=request.POST.get('subject')
  text=request.POST.get('text')
  from django.core.mail import send_mail
  send_mail(
  name+' needs service support/or giving feedback',
  text,
  settings.EMAIL_HOST_USER,
  ['winzou2010@yahoo.fr'],
fail_silently=False,
  )
 return render(request, "contact.html",cart(request))

def details (request):
    if 'search-area' in request.GET:
        return redirect('/products/?search-area='+request.GET["search-area"])
    return render(request, "details.html",cart(request))
def faq (request):
    if 'search-area' in request.GET:
        return redirect('/products/?search-area='+request.GET["search-area"])
    return render(request, "faq.html",cart(request))
def favorites (request):
    if 'search-area' in request.GET:
        return redirect('/products/?search-area='+request.GET["search-area"])
    if request.user.is_authenticated:
     return render(request, "favorites.html",cart(request))
    else:
     return redirect('/')

def signup (request):

    form=CreateUserForm()
    if request.method=='POST':
        form=CreateUserForm(request.POST)
        if form.is_valid():
            form.save()
            user= form.cleaned_data.get('username')
            messages.success(request,'Hello '+user+' your account have been created successfully')
            return redirect('signin')
    context={'form':form}
    return render(request, "signup.html",context)
def signin (request):
    if request.method == 'GET':
        return render(request, "signin.html")
    elif request.method == 'POST':
        username=request.POST.get('username')
        password=request.POST.get('password')
        user= authenticate(request,username=username,password=password)
        if user is not None:
            login(request,user)
            return redirect('index')

        else:
            messages.info(request,'Username or Password is incorrect')
            return  render(request, "signin.html")




def recovered (request):
    messages.info(request,'Your password has been set. You may go ahead and log in now.')
    return render(request, "forgot.html")

def forgot (request):
    messages.info(request,'Please check your email for a message with a link to change your password')
    return render(request, "forgot.html")
def privacy (request):
    if 'search-area' in request.GET:
        return redirect('/products/?search-area='+request.GET["search-area"])
    return render(request, "privacy_policy.html",cart(request))
def interview (request):
    if 'search-area' in request.GET:
        return redirect('/products/?search-area='+request.GET["search-area"])
    return render(request, "interview.html",cart(request))
def news (request):
    if 'search-area' in request.GET:
        return redirect('/products/?search-area='+request.GET["search-area"])
    return render(request, "news.html",cart(request))


def error_404_view(request, exception):

    return render(request,'page404.html')
