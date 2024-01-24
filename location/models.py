from django.db import models
from django.utils import timezone


class Location(models.Model):
    location = models.CharField(max_length=200, default="location")
    date_created = models.DateTimeField(default=timezone.now)
