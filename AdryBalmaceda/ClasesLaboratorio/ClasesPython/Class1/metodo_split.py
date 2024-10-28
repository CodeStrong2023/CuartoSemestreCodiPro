cursos = 'Node Java JavaScript Python Diseño'

lista_cursos = cursos.split()
print(f'Lista de cursos: {lista_cursos}')

cursos_separados_coma = 'Node,Java,JavaScript,Python,Diseño'
lista_cursos = cursos_separados_coma.split(',', 2)
print(f'Lista de cursos: {lista_cursos}')
print(len(lista_cursos))