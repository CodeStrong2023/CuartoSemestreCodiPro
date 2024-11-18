import math
from decimal import Decimal

#NaN (Not a Number)
a = float("nan")
print(f"a: {a}")

#Módulo Math
a = float("nan")
print(f"Es de tipo NaN(Not a Number): {math.isinf(a)}")

#Módulo Decimal
a = Decimal("nan")
print(f"Es de tipo NaN(Not a Number): {math.isinf(a)}")



