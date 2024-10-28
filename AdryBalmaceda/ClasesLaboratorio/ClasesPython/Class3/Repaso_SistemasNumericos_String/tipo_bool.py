
# Bool contiene los valores de True y False
# los tipos numéricos, falso para 0 (cero), true para los demás valores
valor = 0
resultado = bool(valor)
print(f'valor: {valor}, Resultado: {resultado}')

valor = 15
resultado = bool(valor)
print(f'valor: {valor}, Resultado: {resultado}')

# tipo string -> False '', True demás valores
valor = ''
resultado = bool(valor)
print(f'valor: {valor}, Resultado: {resultado}')

# tipo de colecciones -> False para colecciones vacias
# tipo de colecciones -> True para todas las demás
# Lista
valor = []
resultado = bool(valor)
print(f'valor de una lista vacía: {valor}, resultado: {resultado}')


valor = [2,3,4]
resultado = bool(valor)
print(f'valor de una lista llena: {valor}, resultado: {resultado}')

# Tupla
valor = ()
resultado = bool(valor)
print(f'valor de una tupla vacía: {valor}, resultado: {resultado}')

valor = (2,)
resultado = bool(valor)
print(f'valor de una tupla llena: {valor}, resultado: {resultado}')


# Diccionario
valor = {}
resultado = bool(valor)
print(f'valor de un diccionario vacía: {valor}, resultado: {resultado}')

valor = {'Nombre: Zeus'}
resultado = bool(valor)
print(f'valor de un diccionario lleno: {valor}, resultado: {resultado}')

# sentencias de control con bool
if '':
    print('Regresa verdadero')

else:
    print('Regresa falso')

# Ciclos
variable = 3
while variable:
    print('Regresa verdadero')
    break
else:
    print('Regresa falso')