# Generated by Django 3.1.7 on 2021-03-22 08:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_auto_20210322_0933'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='price',
        ),
        migrations.AddField(
            model_name='product',
            name='price',
            field=models.ManyToManyField(to='products.Price_Item'),
        ),
    ]
