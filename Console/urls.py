
from django.urls import path,include
from . import views
app_name = 'main'
urlpatterns = [
    path('admin_view', views.admin_view ,name='admin_view'),
    path('', views.Console_request ,name='Console'),


]
