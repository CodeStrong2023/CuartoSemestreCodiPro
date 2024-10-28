
from cgi import log

from Persona import Persona
from cursor_del_pool import CursorDelPool


class PersonaDAO:
    """
    DAO significa: Data Access Object
    CRUD significa:
                    Create -> Insertar
                    Read -> Seleccionar
                    Update -> Actualizar
                    Delete -> Eliminar
    """
    _SELECCIONAR = 'SELECT * FROM persona ORDER BY id_persona'
    _INSERTAR = 'INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)'
    _ACTUALIZAR = 'UPDATE persona SET nombre=%s, apellido =%s, email=%s WHERE id_persona=%s'
    _ELIMINAR = 'DELETE FROM persona WHERE id_persona=%s'

    @classmethod
    def seleccionar(cls):
        """
        Seleccionar todas las personas de la base de datos
        """
        with CursorDelPool() as cursor:
            try:
                cursor.execute(cls._SELECCIONAR)
                registros = cursor.fetchall()
                personas = []
                for registro in registros:
                    persona = Persona(registro[0], registro[1], registro[2], registro[3])
                    personas.append(persona)
                return personas
            except Exception as e:
                log.error(f'Error al seleccionar personas: {e}')
                return []

    @classmethod
    def insertar(cls, persona):
        """
        Insertar una persona en la base de datos
        """
        with CursorDelPool() as cursor:
            try:
                valores = (persona.nombre, persona.apellido, persona.email)
                cursor.execute(cls._INSERTAR, valores)
                log.info(f'Persona insertada: {persona}')
                return cursor.rowcount
            except Exception as e:
                log.error(f'Error al insertar persona: {e}')
                return 0

    @classmethod
    def actualizar(cls, persona):
        """
        Actualizar una persona en la base de datos
        """
        with CursorDelPool() as cursor:
            try:
                valores = (persona.nombre, persona.apellido, persona.email, persona.id_persona)
                cursor.execute(cls._ACTUALIZAR, valores)
                log.info(f'Persona actualizada: {persona}')
                return cursor.rowcount
            except Exception as e:
                log.error(f'Error al actualizar persona: {e}')
                return 0

    @classmethod
    def eliminar(cls, persona):
        """
        Eliminar una persona de la base de datos
        """
        with CursorDelPool() as cursor:
            try:
                valores = (persona.id_persona,)
                cursor.execute(cls._ELIMINAR, valores)
                log.info(f'Persona eliminada: {persona}')
                return cursor.rowcount
            except Exception as e:
                log.error(f'Error al eliminar persona: {e}')
                return 0