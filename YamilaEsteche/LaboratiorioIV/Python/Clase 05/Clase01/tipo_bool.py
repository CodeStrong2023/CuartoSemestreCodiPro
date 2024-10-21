
#Bool con tiene los valores de True y False
#Los tipos numéticos, es flase para el 0 (cero), true para los demás valores
valor = 0
resultado = bool(valor)
print(f'valor: {valor}, Resultado: {resultado}')

valor = 15
resultado = bool(valor)
print(f'valor: {valor}, Resultado: {resultado}')

#Tipo string -> False '', True demás valores
valor = ''
resultado = bool(valor)
print(f'valor: {valor}, Resultado: {resultado}')

#Tipo de colecciones -> False para colecciones vacias
#Tipo de colecciones -> True para todas las demás
#Lista
valor = []
resultado = bool(valor)
print(f'valor de una lista vacía: {valor}, resultado: {resultado}')


valor = [2,3,4]
resultado = bool(valor)
print(f'valor de una lista llena: {valor}, resultado: {resultado}')

#Tupla
valor = ()
resultado = bool(valor)
print(f'valor de una tupla vacía: {valor}, resultado: {resultado}')


valor = (2,)
resultado = bool(valor)
print(f'valor de una tupla llena: {valor}, resultado: {resultado}')


#Diccionario
valor = {}
resultado = bool(valor)
print(f'valor de un diccionario vacía: {valor}, resultado: {resultado}')

valor = {'Nombre: Zeus'}
resultado = bool(valor)
print(f'valor de un diccionario lleno: {valor}, resultado: {resultado}')

#Sentencias de control con bool
if '':
    print('Regresa verdadero')

else:
    print('Regresa falso')


#Ciclos
variable = 3
while variable:
    print('Regresa verdadero')
    break
else:
    print('Regresa falso')