from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import DepartmentSerializer
from .models import Department
from django.shortcuts import get_object_or_404

@api_view(['GET'])
def departments(request):
    depts = Department.objects.all()

    dsr = DepartmentSerializer(depts, many=True)

    return Response({
        'status': True,
        'data' : dsr.data
    })

@api_view(['POST'])
def create(request):

    if not request.data:
        return Response({
            'status': False,
            'message': "Please fill all remaining fields"
        })
    
    deptData = DepartmentSerializer(data=request.data)
    if deptData.is_valid():
        deptData.save()
        return Response({
            'status': True,
            'message': "Data has been created"
        })
    else:
        return Response({
            'status': False,
            'message': "Failed to create data"
        })

@api_view(["DELETE"])
def delete(request, pk):

    dept = get_object_or_404(Department, pk=pk)

    dept.delete()
    return Response({
        "status": True,
        "message": "Data has been deleted"
    })


