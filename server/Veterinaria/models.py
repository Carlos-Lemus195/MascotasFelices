from django.db import models

# Create your models here.
class Propietario(models.Model):
    codigo_propietario = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    telefono = models.CharField(max_length=8)
    direccion = models.CharField(max_length=255)
    correo_electronico = models.EmailField()
    
    class Meta:
       verbose_name_plural = "Propietarios"

    def __str__(self):
        return self.nombre
    
class FichaDesparacitacion(models.Model):
    codigo_ficha_desparacitacion = models.AutoField(primary_key=True)
    fecha = models.DateField()
    tipo = models.CharField(max_length=50)
    nombre = models.CharField(max_length=50)
    via_administracion = models.CharField(max_length=50)

    class Meta:
       verbose_name_plural = "Fichas de Desparacitacion"

    def __str__(self):
        return self.nombre
    
class Mascota(models.Model):
    codigo_mascota = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    fecha_nacimiento = models.DateField()
    sexo = models.CharField(max_length=1)
    especie = models.CharField(max_length=50)
    raza = models.CharField(max_length=50)

    class Meta:
       verbose_name_plural = "Mascotas"

    def __str__(self):
        return self.nombre
    
class AsignacionPropietarioMascota(models.Model):
    codigo_propietario = models.ForeignKey(Propietario, on_delete=models.CASCADE)
    codigo_mascota = models.ForeignKey(Mascota, on_delete=models.CASCADE)

    class Meta:
       verbose_name_plural = "Asignacion de Propietario y Mascota"

    def __str__(self):
        return self.codigo_propietario
    
class Cita(models.Model):
    codigo_cita = models.AutoField(primary_key=True)
    codigo_propietario = models.ForeignKey(Propietario, on_delete=models.CASCADE)
    codigo_mascota = models.ForeignKey(Mascota, on_delete=models.CASCADE)
    fechaHora = models.DateTimeField()
    razon_cita = models.CharField(max_length=255)

    class Meta:
       verbose_name_plural = "Citas"

    def __str__(self):
        return self.codigo_cita