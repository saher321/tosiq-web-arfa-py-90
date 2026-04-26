from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class ResetPasswordOtp(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    otp = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_verified = models.BooleanField(default=False)
    
    def __str__(self):
        return self.user.username