from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import DepartmentSerializer
from .models import Department

@api_view(['GET'])
def departments(request):
    depts = Department.objects.all()

    dsr = DepartmentSerializer(depts, many=True)

    return Response({
        'status': True,
        'data' : dsr.data
    })

