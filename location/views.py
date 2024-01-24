from django.shortcuts import render
from rest_framework import permissions, viewsets
from location.models import Location
from location.serializers import LocationSerializer


def index(request):
    return render(request, "location/index.html")


class LocationViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """

    queryset = Location.objects.all().order_by("-date_created")
    serializer_class = LocationSerializer
