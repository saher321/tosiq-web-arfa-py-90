from django.urls import path
from .views import *

urlpatterns = [
    path('signup/', signup),
]

#  a = 10 => <class int>
