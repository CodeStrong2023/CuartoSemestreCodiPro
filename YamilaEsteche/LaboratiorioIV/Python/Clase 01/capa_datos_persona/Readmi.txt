-Instalar por terminal
1° pip install psycopg2

---------------------------
Logger_base
log.basicConfig(level=log.DEBUG,
                format='%(asctime)s:%(levelname)s [%(filename)s:%(lineno)s] %(message)s',
                formato= tiempo: nombre nivel  [archivo: linea] mensaje
                datefmt='%I:%M:%S %p',
                formato hora: Hora:Minutos:Segundos    am o pm
                handlers=[
                    log.FileHandler('capa_datos.log'),
                    log.StreamHandler()
                ]
                manipulador= [
                    crea el archivo,
                    imprime el contenido definido anteriormente
                ]
                )