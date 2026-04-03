from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import DepartmentSerializer
from .models import Department

@api_view(['GET'])
def departments(request):
    depts = Department.objects.all()

    sr = DepartmentSerializer(depts)

    return Response({
        'status': True,
        'data' : sr.data
    })

