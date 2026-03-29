from rest_framework.routers import DefaultRouter
from .views import PostViewSet

router = DefaultRouter()
router.register('posts', PostViewSet)
urlpatterns = router.urls
# GET       http://127.0.0.1:8000/api/posts/    :: list of posts
# GET       http://127.0.0.1:8000/api/posts/1/  :: details of post with id 1
# POST      http://127.0.0.1:8000/api/posts/    :: create a new post
# PUT       http://127.0.0.1:8000/api/posts/1/  :: update post with id 1
# DELETE    http://127.0.0.1:8000/api/posts/1/  :: delete post with id 1
