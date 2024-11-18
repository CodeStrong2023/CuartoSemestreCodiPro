# help(str.join)
tupla_str = ("Hola", "alumnos", "Tecnicatura", "Universitaria")
mensaje = " ".join(tupla_str)
print(f"Mensaje final: {mensaje}")

lista_cursos = ["Java", "Python", "Angular", "Spring"]
mensaje = ", ".join(lista_cursos)
print(f"Mensaje final: {mensaje}")

cadena = "HolaMundo"
mensaje = "-".join(cadena)
print(f"Mensaje final: {mensaje}")

diccionario = {"nombre": "Juan", "apellido": "Perez", "edad": "18"}
llaves = "-".join(diccionario.keys())
valores = "-".join(diccionario.values())
print(f"Llaves: {llaves}, Type: {type(llaves)}")
print(f"Valores: {valores}, Type: {type(valores)}")
