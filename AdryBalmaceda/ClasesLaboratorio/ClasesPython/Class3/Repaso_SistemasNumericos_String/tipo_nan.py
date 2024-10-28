import math
from _pydecimal import Decimal

# Nan (Not a Number)
a = float('nan')
print(f'a: {a} ')


# módulo math
a = float('nan')
print(f'Es de tipo NaN(Not a Number)?: {math.isnan(a)}')

# módulo decimal
a = Decimal('2.0')
print(f'Es de tipo NaN(Not a Number)?: {math.isnan(a)}')