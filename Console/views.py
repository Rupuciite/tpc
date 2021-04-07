import threading
import os
import time
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login
import logging
import traceback
from products.utils import *
from products.models import *

def cart(request):
    data = cartData(request)

    order = data['order']

    context = {'order': order, 'categories': data['categories'],'Resellers':Resellers.objects.all()}

    return context

def test():
    from . import get_links
#def test():
#    from .gps import Haversine
#    import geocoder
#    g = geocoder.ip('me')
#    from geopy.geocoders import Nominatim
#    geolocator = Nominatim(user_agent="TPC")
#
#    location = geolocator.geocode("""1, RUE K. IBN WALID Sousse""")
#    print(Haversine([36.8123138,10.1713414],g.latlng).meters)


def update_db():
    from . import mega


def Mytek_Update():
    from . import Mytek
    Mytek.update()


def Wiki_Update():
    from . import Scoop
    Scoop.update()


def Scoop_Update():
    from . import wiki
    print(os.getcwd())
    wiki.update()


def Console_request(request):
    if request.user.is_authenticated:
        f = open('./logs/debug.log', 'r')
        file_content = f.readlines()
        f.close()
        context = {'file_content': file_content[-25:]}
        context.update(cart(request))
        if request.method == 'GET':
            return render(request, "Console_Profile.html", context)
        elif request.method == 'POST':
            if (str(request.POST["Console_command"]) == "Mytek"):
                t = threading.Thread(target=Mytek_Update, args=(), kwargs={})
                t.setDaemon(True)
                t.start()
            if (str(request.POST["Console_command"]) == "Wiki"):
                t = threading.Thread(target=Wiki_Update, args=(), kwargs={})
                t.setDaemon(True)
                t.start()
            if (str(request.POST["Console_command"]) == "Scoop"):
                t = threading.Thread(target=Scoop_Update, args=(), kwargs={})
                t.setDaemon(True)
                t.start()
            if (str(request.POST["Console_command"]) == "update"):
                t = threading.Thread(target=update_db, args=(), kwargs={})
                t.setDaemon(True)
                t.start()
            if (str(request.POST["Console_command"]) == "test"):
                t = threading.Thread(target=test, args=(), kwargs={})
                t.setDaemon(True)
                t.start()
            return render(request, "Console_Profile.html", context)
    else:
        return redirect('/signin')


def admin_view(request):
    if request.user.is_authenticated:
        f = open('./logs/debug.log', 'r')
        file_content = f.readlines()
        f.close()
        context = {'file_content': file_content[-25:]}
        context.update(cart(request))
        if request.method == 'GET':
            return render(request, "admin_view.html", context)
        elif request.method == 'POST':
            print(str(request.POST.get("dropdown")))
            if (str(request.POST.get("dropdown")) == "Mytek"):
                t = threading.Thread(target=Mytek_Update, args=(), kwargs={})
                t.setDaemon(True)
                t.start()
            if (str(request.POST.get("dropdown")) == "Wiki"):
                t = threading.Thread(target=Wiki_Update, args=(), kwargs={})
                t.setDaemon(True)
                t.start()
            if (str(request.POST.get("dropdown")) == "Scoop"):
                t = threading.Thread(target=Scoop_Update, args=(), kwargs={})
                t.setDaemon(True)
                t.start()
            if (str(request.POST.get("dropdown")) == "update"):
                t = threading.Thread(target=update_db, args=(), kwargs={})
                t.setDaemon(True)
                t.start()
            return render(request, "admin_view.html", context)
    else:
        return redirect('/signin')
