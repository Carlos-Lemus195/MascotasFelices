from django.db import models

# Create your models here.
class Duenos(models.Model):
    codigo_dueno = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    telefono = models.IntegerField(max_length=8)
    direccion = models.CharField(max_length=255)
    correo_electronico = models.EmailField()
    estado = models.CharField(max_length=10, choices=[('active', 'ACTIVE'), ('inactive', 'INACTIVE')], default='active')
    class Meta:
       verbose_name_plural = "Duenos"

    def __str__(self):
        return self.nombre
    
class Mascotas(models.Model):
    codigo_mascota = models.AutoField(primary_key=True)
    codigo_dueno = models.ForeignKey(Duenos, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=50)
    fecha_nacimiento = models.DateField()
    sexo = models.CharField(max_length=1)
    especie = models.CharField(max_length=50)
    raza = models.CharField(max_length=50)
    estado = models.CharField(max_length=10, choices=[('active', 'ACTIVE'), ('inactive', 'INACTIVE')], default='active')

    class Meta:
       verbose_name_plural = "Mascotas"

    def __str__(self):
        return self.nombre
    
class Desparasitaciones(models.Model):
    codigo_ficha_desparacitacion = models.AutoField(primary_key=True)
    fecha = models.DateField()
    tipo = models.CharField(max_length=50)
    nombre = models.CharField(max_length=50)
    via_administracion = models.CharField(max_length=50)
    estado = models.CharField(max_length=11, choices=[('completed', 'completado'), ('incompleted', 'no completado')], default='completed')

    class Meta:
       verbose_name_plural = "Fichas de Desparacitacion"

    def __str__(self):
        return self.nombre
    
class Citas(models.Model):
    codigo_cita = models.AutoField(primary_key=True)
    codigo_propietario = models.ForeignKey(Duenos, on_delete=models.CASCADE)
    codigo_mascota = models.ForeignKey(Mascotas, on_delete=models.CASCADE)
    fechaHora = models.DateTimeField()
    razon_cita = models.CharField(max_length=255)
    estado = models.CharField(max_length=10, choices=[('done', 'DONE'), ('canceled', 'CANCELED')], default='done')

    class Meta:
       verbose_name_plural = "Citas"

    def __str__(self):
        return self.codigo_cita