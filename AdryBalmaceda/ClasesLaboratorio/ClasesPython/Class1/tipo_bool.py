
# boolean: valores de true o false
# para todos los valores distintos de cero, es true; para cero es folse

valor = 0
resultado = bool(valor)

print(f'Valor: {valor}, resultado: {resultado}')

valor = 0.3
resultado = bool(valor)
print(f'Valor: {valor}, resultado: {resultado}')

# tipo string -> False "" , true para demás valores

valor = ""
resultado = bool(valor)
print(f'Valor: {valor}, resultado: {resultado}')

valor = "a"
resultado = bool(valor)
print(f'Valor: {valor}, resultado: {resultado}')

# tipo colecciones
# False para colecciones vacías, true para todas las demás

# Lista

valor = []
resultado = bool(valor)
print(f'Valor lista vacía: {valor}, resultado: {resultado}')

valor = ["a", 3]
resultado = bool(valor)
print(f'Valor lista: {valor}, resultado: {resultado}')

# Tupla

valor = ()
resultado = bool(valor)
print(f'Valor tupla vacía: {valor}, resultado: {resultado}')

valor = ("a",)
resultado = bool(valor)
print(f'Valor tupla: {valor}, resultado: {resultado}')

# Diccionario

# Lista

valor = {}
resultado = bool(valor)
print(f'Valor diccionario vacío: {valor}, resultado: {resultado}')

valor = {"Nombre": "Juan", "Apellido": "Perez"}
resultado = bool(valor)
print(f'Valor diccionario: {valor}, resultado: {resultado}')

# sentencias de control con bool

if bool(""):
    print("Regresar verdadeero")
else:
    print("Regresa falso")

if valor:
    print("Regresar verdadeero")
else:
    print("Regresa falso")

#Ciclos
#while

variable = 3

while variable:
    print("Regresar verdadeero")
    break
else:
    print("Regresa falso")

variable = 0

while variable:
    print("Regresar verdadeero")
    break
else:
    print("Regresa falso")