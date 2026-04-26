from django.urls import path
from .views import *

urlpatterns = [
    path('signup/', signup),
    path('login/', login),
    path('forgot-password/', forgot_password),
]

#  a = 10 => <class int>
