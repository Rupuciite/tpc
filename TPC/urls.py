

from django.contrib import admin
from django.urls import path,include
from . import settings,views
from django.contrib.auth import views as auth_views
import products.views as products
from django.contrib.staticfiles.urls import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
admin.site.site_header = "TPC"
admin.site.index_title = "Welcome to the admin apge"
admin.site.site_title = "TPC"
app_name = 'main'

urlpatterns = [
        path('admin/', admin.site.urls ,name='adminpage'),
        path('Console/', include('Console.urls')),
        path('profile/', include('Profile.urls')),
        path('santer/', include('santer.urls')),
        path('products/', include('products.urls')),
        path('about/',views.about, name='about'),
        path('logout/',views.logout_view, name='logout'),
        path('update/',views.update,name='update'),
        path('article/',views.article, name='article'),
        path('category/',views.category, name='category'),
        path('checkout/',products.checkout, name='checkout'),
        path('contact/',views.contact, name='contacts'),
        path('details/',views.details, name='details'),
        path('news/',views.news, name='news'),
        path('interview/',views.interview, name='interview'),
        path('faq/',views.faq, name='faq'),
        path('favorites/',views.favorites, name='favorites'),

        path('signin/',views.signin, name='signin'),
        path('signup/',views.signup, name='signup'),
        path('forgot/',views.forgot, name='forgot'),
        path('privacy/',views.privacy, name='privacy'),
        path('404/',views.error_404_view, name='404'),
        path('',views.index, name='index'),
        path('details_tab2',views.details_tab2, name='details_tab2'),
        path('reset_password/',
         auth_views.PasswordResetView.as_view(template_name="forgot.html"),
         name="reset_password"),

        path('reset_password_sent/',
            views.forgot,
            name="password_reset_done"),

        path('reset/<uidb64>/<token>/',
         auth_views.PasswordResetConfirmView.as_view(template_name="pass_reset_form.html"),
         name="password_reset_confirm"),

        path('reset_password_complete/',
            views.recovered,
            name="password_reset_complete"),


    ]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
handler404 = 'TPC.views.error_404_view'
if settings.DEBUG: # new
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
