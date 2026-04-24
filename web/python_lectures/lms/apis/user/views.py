from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def signup(request):
    if not request.data:
        return Response({
            'status': False,
            'message': "Please fill all remaining fields"
        })
    
    username=request.data['username']
    email=request.data['email']
    password=request.data['password']

    if not username or not email or not password:
        return Response({
            'status': False,
            'message': "Please fill all remaining fields"
        })

    isMatched = User.objects.filter(email=email).first()
    if isMatched:
        return Response({
            'status': False,
            'message': "Email already exists, try new one"
        })
        
    User.objects.create_user(
        username=request.data['username'],
        email=request.data['email'],
        password=request.data['password']
    )
    
    return Response({
        'status': True,
        'message': "User created successfully",
    })