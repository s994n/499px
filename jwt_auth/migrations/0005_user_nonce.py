# Generated by Django 3.1.3 on 2021-11-25 16:17

from django.db import migrations, models
import jwt_auth.models


class Migration(migrations.Migration):

    dependencies = [
        ('jwt_auth', '0004_auto_20201022_1326'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='nonce',
            field=models.CharField(default=jwt_auth.models.random_string, max_length=10),
        ),
    ]
