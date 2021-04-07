
from django.urls import path,include
from . import views

app_name = 'Santer'
urlpatterns = [
    path('', views.store ,name='index'),
    path('<slug:slug>/',views.product_about ,name='details'),
    path('geolocalisation/',views.save_user_geolocation ,name='geo')



]
