from django.db import models

# Create your models here.
class Student(models.Model):
    name = models.CharField(max_length=80)
    image = models.TextField()
    enrollment_no = models.CharField(max_length=80)
    email = models.EmailField(max_length=80)
    dept = models.ForeignKey('department.Department', on_delete=models.CASCADE)
    semester = models.IntegerField()
    cgpa = models.FloatField()
    status = models.CharField(max_length=10, default='active')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name