
from django.urls import path

from . import views
app_name = 'products'

urlpatterns = [
	#Leave as empty string for base url
	path('', views.store, name="catalog"),
	path('update_item/', views.updateItem, name="update_item"),
	path('process_order/', views.processOrder, name="process_order"),
	path('<slug:slug>/',views.product_about ,name='details')

]
