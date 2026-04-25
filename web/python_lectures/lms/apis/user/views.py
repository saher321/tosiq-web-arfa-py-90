from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate

@api_view(['POST'])
def signup(request):
    if not request.data:
        return Response({
            'status': False,
            'message': "Please fill all remaining fields"
        })
    
    first_name=request.data['first_name']
    last_name=request.data['last_name']
    username=request.data['username']
    email=request.data['email']
    password=request.data['password']

    if not first_name or not last_name or not username or not email or not password:
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
        first_name=request.data['first_name'],
        last_name=request.data['last_name'],
        username=request.data['username'],
        email=request.data['email'],
        password=request.data['password']
    )
    
    return Response({
        'status': True,
        'message': "User created successfully",
    })


@api_view(['POST'])
def login(request):
    if not request.data:
        return Response({
            'status': False,
            'message': "Please fill all remaining fields"
        })
    
    username=request.data['username']
    password=request.data['password']

    if not username or not password:
        return Response({
            'status': False,
            'message': "Please fill all remaining fields"
        })

    # isMatched = User.objects.filter(username=username).exists()
    # if not isMatched :
    #     return Response({
    #         'status': False,
    #         'message': "User not found"
    #     })
    # select * from users where username=username and password=password
    user = authenticate(username=username, password=password)

    if user is not None:
        return Response({
            'status': True,
            'message': "User Loggedin",
            'user': {
                'id' : user.id,
                'first_name' : user.first_name,
                'last_name' : user.last_name,
                'username' : user.username,
                'email' : user.email
            }
        })
    
    return Response({
        "status": False,
        "message": "Invalid credentials"
    })
    