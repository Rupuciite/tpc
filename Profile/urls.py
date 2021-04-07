
from django.urls import path,include
from . import views

app_name = 'Profile'
urlpatterns = [

    path('', views.profile ,name='index'),
    path('setting', views.Setting ,name='Setting'),
    path('mypurchases',views.mypurchases,name="mypurchases")

]
