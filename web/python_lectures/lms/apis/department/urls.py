from django.urls import path
from .views import *

urlpatterns = [
    path('departments/', departments),
    path('departments/create', create),
    path('departments/delete/<int:pk>', delete),
    path('departments/update/<int:pk>', update)
]

#  a = 10 => <class int>
