
from django.urls import path, include

urlpatterns = [
    path('api/', include('department.urls')),
    path('api/', include('student.urls')),
    path('api/', include('user.urls'))
]
