import math
from decimal import Decimal

# NaN (not a number)
a = float('Nan')
print(f'a= {a}')

# Módulo math
a = float('nan')
print(f'Es de tipo NaN?: = {math.isnan(a)}')

# Módulo decimal
a = Decimal('nan')
print(f'Es de tipo NaN?: = {math.isnan(a)}')