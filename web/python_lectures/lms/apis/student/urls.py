from django.urls import path
from .views import *

urlpatterns = [
    path('students/', students),
    path('students/create', create),
    path('students/delete/<int:pk>', delete),
    path('students/update/<int:pk>', update),
    path('students/details/<int:pk>', details),
]

#  a = 10 => <class int>
