from django.contrib import admin

# Register your models here.
from .models import Propietario, FichaDesparacitacion, Mascota, AsignacionPropietarioMascota, Cita

admin.site.register(Propietario)
admin.site.register(FichaDesparacitacion)
admin.site.register(Mascota)
admin.site.register(AsignacionPropietarioMascota)
admin.site.register(Cita)
