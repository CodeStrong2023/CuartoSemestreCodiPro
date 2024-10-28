
#help(str.join)

tupla_str = ('Hola', 'alumnos', 'Tecnicatura', 'Universitaria')
mensaje = ' '.join(tupla_str)
print(f'Mensaje: {mensaje}')

lista_cursos = ['Java', 'Python', 'Angular', 'Spring']
mensaje = ', '.join(lista_cursos)
print(f'Mensaje: {mensaje}')

cadena = 'HomaMundo'
mensaje = '.'.join(cadena)
print(f'Mensaje: {mensaje}')

diccionario = {'Nombre':'Juan','Apellido': 'Perez', 'Edad': '18'}
llaves = '-'.join(diccionario.keys())
valores = '-'.join(diccionario.values())
print(f'llaves:{llaves}, Type: {type(llaves)}')
print(f'valores:{valores}, Type: {type(valores)}')