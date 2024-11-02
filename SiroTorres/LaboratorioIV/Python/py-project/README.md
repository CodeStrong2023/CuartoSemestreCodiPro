# Game Project

Para correr el juego se deben seguir las instrucciones en terminal

```sh
cd game
python3 main.py
```

Y a jugar.

Game Project tiene su propio entorno virtual con el paquete matplotlib 3.5.0
App tiene su propio entorno virtual con matplotlib 3.9.2

# Entorno virtual en Python
    
    tildar cuanto tiempo de duracion tendra el token y tildar los permisos,
    generar y por ultimo copiar el toekn
    git pull origin main
    Usuario: Siro04
    password: accesToken #El que creamos y guardado correctamente
    git config --global credential.helper store # Este comando es para guardar el token, pero habra que integrarlo una vez desde alli lo recordara.
    ```

# Archivo requirements.txt
<br>Vamos a ver este archivo, este gestiona todas las dependencias y en que versiones se necesitan, vamos a dejar aqui los comandos para que alguien logre contribuir en este proyecto, los comandos son los siguientes:</br>

```
    sh
    git clone hhtps://...
    cd app
    python3 -m venv env #Se debe crear el entorno virtual, este no se comparte desde github
    source env/bin/activate #Activamos el entorno en linux
    venv/Script/activate #Activamos el entorno en windows
    pip3 install -r requirements.txt #Instala las dependencias el -r significa reutilizar
    python3 main.py #Ejecutamos el programa