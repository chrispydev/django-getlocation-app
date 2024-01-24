from django.urls import include, path
from location.views import index, LocationViewSet
from rest_framework import routers


router = routers.DefaultRouter()
router.register(r"", LocationViewSet)

urlpatterns = [path("", index, name="home"), path("location/", include(router.urls))]

urlpatterns += router.urls
