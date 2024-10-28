from logger_base import log
from conexion import Conexion

class CursorDelPool:
    def __init__(self):
        self._conexion = None
        self._cursor = None

    def __enter__(self):
        log.debug('Inicio del metodo with y __enter__')  # Log para indicar el inicio del método __enter__
        self._conexion = Conexion.obtenerConexion()  # obtiene una conexión del pool de conexiones
        self._cursor = self._conexion.cursor()  # crea un cursor a partir de la conexión obtenida
        return self._cursor  # devuelve el cursor para su uso en el bloque with

    def __exit__(self, tipo_exception, valor_exception, detalle_exception):
        log.debug('Se ejecuta el método exit')
        if valor_exception:
            self._conexion.rollback()  # si hubo una excepción, deshace los cambios (rollback)
            log.debug(f'Ocurrio una excepcion: {valor_exception}')
        else:
            self._conexion.commit()  # si no hubo excepción, confirma los cambios (commit)
            log.debug('Commit de la transaccion')
        self._cursor.close()  # cierra el cursor
        Conexion.liberarConexion(self._conexion)  # libera la conexión de vuelta al pool

if __name__ == '__main__':
    with CursorDelPool() as cursor:
        log.debug('Estamos dentro del bloque with')  # Log indicando que se está dentro del bloque with
        cursor.execute('SELECT * FROM persona')  # ejecuta una consulta SQL para seleccionar todos los registros de la tabla "persona"
        log.debug(cursor.fetchall())  # resultados de la consulta
