from rest_framework.routers import DefaultRouter
from .views import PostViewSet

router = DefaultRouter()
router.register('posts', PostViewSet)
urlpatterns = router.urls
# GET /posts/ => list of posts
# GET /posts/1/ => details of post with id 1
# POST /posts/ => create a new post
# PUT /posts/1/ => update post with id 1
# DELETE /posts/1/ => delete post with id 1
