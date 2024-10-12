# help(str.join)

tupla_str = ('hola', 'alumnos', 'tecnicatura', 'universitaria')
mensaje = ' '.join(tupla_str)

print(f'Mensaje: {mensaje}')

lista_cursos = ['java', 'python', 'angular', 'spring']

mensaje1 = ', '.join(lista_cursos)

print(f'Mensaje: {mensaje1}')

cadena = 'HolaMundo'
mensaje2 = '.'.join(cadena)
print(f'Mensaje: {mensaje2}')

diccionario = {"Nombre": "Juan", "Apellido": "Perez", "Edad": "23"}
llaves = "-".join(diccionario.keys())
valores = "-".join(diccionario.values())
print(f'Llaves:{llaves}, Type: {type(llaves)}')
print(f'Valores:{valores}, Type: {type(valores)}')
