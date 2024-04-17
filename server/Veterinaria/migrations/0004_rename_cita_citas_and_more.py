# Generated by Django 5.0.2 on 2024-04-12 02:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Veterinaria', '0003_alter_asignacionpropietariomascota_options_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Cita',
            new_name='Citas',
        ),
        migrations.RenameModel(
            old_name='FichaDesparacitacion',
            new_name='Desparasitaciones',
        ),
        migrations.RenameModel(
            old_name='Propietario',
            new_name='Duenos',
        ),
        migrations.RenameModel(
            old_name='Mascota',
            new_name='Mascotas',
        ),
        migrations.AlterModelOptions(
            name='asignacionpropietariomascota',
            options={'verbose_name_plural': 'Asignacion de Dueños y Mascotas'},
        ),
        migrations.AlterModelOptions(
            name='duenos',
            options={'verbose_name_plural': 'Duenos'},
        ),
        migrations.RenameField(
            model_name='duenos',
            old_name='codigo_propietario',
            new_name='codigo_dueno',
        ),
    ]
