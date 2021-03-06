# Generated by Django 3.1.7 on 2021-03-26 14:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0022_med_services_speciality'),
    ]

    operations = [
        migrations.CreateModel(
            name='Domaine',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=200)),
            ],
        ),
        migrations.AddField(
            model_name='resellers',
            name='domaine',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='products.domaine'),
        ),
    ]
