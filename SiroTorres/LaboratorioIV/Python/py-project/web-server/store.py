import requests

def get_razas():
    r = requests.get('https://dog.ceo/api/breeds/list');
    print(r.status_code)
    # print(r.text)
    print(type(r.text)) #Vemos de que tipo es el texto, puede ser un string
    #En este caso es un string por el .text, pero aqui
    #encontramos un diccionario con listas
    razas = r.json()
    for raza in razas.values(): #Utilizamos la funcion ppara los valores
        print(f"Raza de los perros: {raza[5]}")
