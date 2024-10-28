# dar formato a string

nombre = "Ariel"
edad = 28
mensaje_con_formato ='Mi nombre es %s y tengo %d años' % (nombre, edad)
print(mensaje_con_formato)

# crear una tupla
persona= ('Carlos', 'Gomez', 5000.00)
mensaje_con_formato = 'Hola %s %s. Tu sueldo es de %.2f' % persona

nombre = "Juan"
edad = 19
sueldo = 3000
mensaje_con_formato = 'Nombre {}, Edad {}, Sueldo {}'.format(nombre, edad, sueldo)

mensaje = 'Nombre {0}, Edad {1}, Sueldo {2:.2f}'.format(nombre, edad, sueldo)

print(mensaje)

mensaje = 'Nombre {nombre}, Edad {edad}, Sueldo {sueldo}'.format(nombre=nombre, edad=edad, sueldo=sueldo)

print(mensaje)

diccionario = {'nombre': 'José', 'edad': 19, 'sueldo': 8000}

mensaje = f'Nombre {diccionario["nombre"]}, Edad {diccionario["edad"]}, Sueldo {diccionario["sueldo"]}'.format(**diccionario)