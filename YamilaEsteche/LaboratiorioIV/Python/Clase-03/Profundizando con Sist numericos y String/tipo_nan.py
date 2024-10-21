import math
from _pydecimal import Decimal

#Nan (Not a Number)
a = float('nan')
print(f'a: {a} ')


#Modulo math
a = float('nan')
print(f'Es de tipo NaN(Not a Number)?: {math.isnan(a)}')

#Módulo decimal
a = Decimal('2.0')
print(f'Es de tipo NaN(Not a Number)?: {math.isnan(a)}')