# Generated by Django 5.0.1 on 2024-01-23 13:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('location', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='location',
            name='location',
            field=models.CharField(default='location', max_length=200),
        ),
    ]
