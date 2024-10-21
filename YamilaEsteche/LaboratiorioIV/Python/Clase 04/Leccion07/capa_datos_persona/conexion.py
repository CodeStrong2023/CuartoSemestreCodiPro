import sys

import psycopg2 as bd
from logger_base import log

class Conexion:
    _DATABASE = 'test_bd'
    _USERNAME = 'postgres'
    _PASSWORD = '32893064'
    _DB_PORT = '5432'
    _HOST = 'localhost'
    _conexion = None
    _cursor = None


    @classmethod
    def obtenerConexion(cls):
        if cls._conexion is None:
            try:
                cls._conexion = bd.connect(host=cls._HOST,
                                           user=cls._USERNAME,
                                           password=cls._PASSWORD,
                                           port=cls._DB_PORT,
                                           database=cls._DATABASE)

                log.debug(f'Conexión Exitosa: {cls._conexion}')
                return cls._conexion
            except Exception as e:
                log.error(f'Ocurrió un error de la gran flauta: {e}')
                sys.exit()
        else:
            return cls._conexion

    @classmethod
    def obtenerCursor(cls):
        if cls._cursor is None:
            try:
                cls._cursor = cls.obtenerConexion().cursor()
                log.debug(f'Se abrió correctamente el cursor, sos un genio loco: {cls._cursor}')
                return cls._cursor
            except Exception as e:
                log.error((f'Ocurrió un error que rompió todo: {e}'))
                sys.exit()
        else:
            return cls._cursor

  

if __name__ == '__main__':
    Conexion.obtenerConexion()
    Conexion.obtenerCursor()
