# Generated by Django 3.1.7 on 2021-03-22 08:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0005_auto_20210322_0952'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='price_SBS',
        ),
    ]
