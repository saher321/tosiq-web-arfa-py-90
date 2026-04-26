import random
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate
from django.core.mail import send_mail
from .models import ResetPasswordOtp

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
        send_mail(
            subject='Login Alert',
            message='You have been logged in successfully',
            from_email='untoldgamingplays@gmail.com',
            recipient_list=[user.email],
            fail_silently=False,
        )
        return Response({
            'status': True,
            'message': "User Loggedin successfully and email sent successfully",
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


@api_view(['POST'])
def forgot_password(request):
    if not request.data:
        return Response({
            'status': False,
            'message': "Please fill all remaining fields"
        })

    email=request.data['email']
    if not email:
        return Response({
            'status': False,
            'message': "Please fill all remaining fields"
        })
    
    user = User.objects.filter(email=email).first()
    if not user:
        return Response({
            'status': False,
            'message': "User not found"
        })
    
    otp = random.randint(100000, 999999)
    
    ResetPasswordOtp.objects.create(user=user, otp=otp, is_verified=False)

    send_mail(
        subject='Forgot Password',
        message='Your password has been reset successfully',
        from_email='untoldgamingplays@gmail.com',
        recipient_list=[email],
        html_message=f'<p>Your OTP: {otp}</p>',
        fail_silently=False
    )
    
    return Response({
        'status': True,
        'message': "OTP sent successfully to your email",
        "user": {
            "id": user.id,
            "email": user.email
        }
    })