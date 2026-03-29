# 1) viewsets => rest framework
# 2) serializers => rest framework
# 3) models => django models

from rest_framework import viewsets
from .serializers import PostSerializer
from .models import Post
# Create your views here.

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
