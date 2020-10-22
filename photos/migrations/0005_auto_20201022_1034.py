# Generated by Django 3.1.2 on 2020-10-22 10:34

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('photos', '0004_photo_liked_by'),
    ]

    operations = [
        migrations.AlterField(
            model_name='photo',
            name='liked_by',
            field=models.ManyToManyField(blank=True, related_name='liked_photos', to=settings.AUTH_USER_MODEL),
        ),
    ]
