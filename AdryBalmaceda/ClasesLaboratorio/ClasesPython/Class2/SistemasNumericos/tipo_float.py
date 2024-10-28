# Repaso del tipo float
a =3.0

# constructor de tipo float -> puede recibir int y str
a = float(10) # le pasamos un tipo entero (int)
print(f'a: {a:.2f}')
a = float('10')
print(f'a: {a:.2f}')

# notación exponencial (valores positivos o negativos)
a = 3e5
print(f'a: {a:.2f}')

a = 3e-5
print(f'a: {a:.5f}')

# cualquier cálculo que incluye un float; todo cambia a float

a = 4.0+5
print(a)
print(type(a))