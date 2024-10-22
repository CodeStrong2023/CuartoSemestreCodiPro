# Profundizando en el tipo Float

a = 3.0
print(f'a= {a:.2f}')

# Constructor del tipo float -> Puede recibir int y str

a = float(10)  # Le pasamos un tipo entero int
a = float("10")
print(f'a= {a:.2f}')

# Notación exponencial (valores positivos o negativos)

a = 3e5
print(f'a exponencial positivo= {a:.2f}')

a = 3e-5
print(f'a exponencial negativo= {a:.5f}')

# Cualquier calculo que incluye un float, todo cambia a float

a = 4.0 + 5
print(a)
print(type(a))
