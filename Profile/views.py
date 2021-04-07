from django.http import HttpResponse
from django.shortcuts import render,redirect
from django.contrib.auth.forms import PasswordChangeForm
from django.contrib import messages
from django.contrib.auth import authenticate,logout,update_session_auth_hash
import TPC.Database as DB
from products.models import *
from products.utils import *
def cart(request):
	data = cartData(request)


	order = data['order']

	context = {'order':order,'categories':data['categories']}

	return context


def profile (request):

 if request.user.is_authenticated:
  if 'search-area' in request.GET:
 	 return redirect('/products/?search-area='+request.GET["search-area"])
  return render(request, "profile.html",cart(request))
 else:
  return redirect('/signin')

def Setting(request):
   if 'search-area' in request.GET:
	   return redirect('/products/?search-area='+request.GET["search-area"])
   if request.user.is_authenticated:
    if request.method == 'POST':
        form = PasswordChangeForm(request.user, request.POST)

        if 'pass_changer' in request.POST:

            if form.is_valid():
                user = form.save()
                update_session_auth_hash(request, user)  # Important!
                messages.success(request, 'Your password was successfully updated!')
                return redirect('/profile/setting')
            else:
                messages.error(request, 'Please correct the error below.')
        elif 'change_details' in request.POST:
            DB.Update(request.POST.get('firstname'),request.POST.get('lastname'),request.POST.get('email'),request.user.id)
            messages.success(request, 'Your informations was successfully updated!')
    else:
        form = PasswordChangeForm(request.user)



    d2={'form': form}
    d2.update(cart(request))
    return render(request, 'profile_Setting.html',d2)
   else:
	   return redirect('/signin')


def mypurchases (request):

	if request.user.is_authenticated:
		customer = request.user
		order=[]
		customer = request.user
		orders= Order.objects.all().filter(customer=customer)

		context = { 'orders':orders }
		context.update(cart(request))
		return render(request, "profile_purchases.html", context )
	else:
		return redirect('/signin')
