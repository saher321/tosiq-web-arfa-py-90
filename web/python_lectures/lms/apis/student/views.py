from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import StudentSerializer
from .models import Student
from django.shortcuts import get_object_or_404

@api_view(['GET'])
def students(request):
    students = Student.objects.all()

    stdData = StudentSerializer(students, many=True)

    return Response({
        'status': True,
        'data' : stdData.data
    })

@api_view(['POST'])
def create(request):

    if not request.data:
        return Response({
            'status': False,
            'message': "Please fill all remaining fields"
        })
    
    stdData = StudentSerializer(data=request.data)
    if stdData.is_valid():
        stdData.save()
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

    student = get_object_or_404(Student, pk=pk)

    if not student:
        return Response({
            "status": False,
            "message": "Data not found"
        })
    else:
        student.delete()
        return Response({
            "status": True,
            "message": "Data has been deleted"
        })

@api_view(['PATCH'])
def update(request, pk):

    # print(request.data, pk)
    student = get_object_or_404(Student, pk=pk)

    stdData = StudentSerializer( student, data=request.data, partial=True) 

    if stdData.is_valid():
        stdData.save()
        return Response({
            'status': True,
            'message': "Data has been updated"
        })
    else:
        return Response({
            'status': False,
            'message': "Failed to update data"
        })

@api_view(["GET"])
def details(request, pk):

    student = get_object_or_404(Student, pk=pk)
    stdData = StudentSerializer(student)

    return Response({
        'status': True,
        'data': stdData.data
    })