from django.urls import path
from .views import departments, create

urlpatterns = [
    path('departments/', departments),
    path('departments/create', create)
]
