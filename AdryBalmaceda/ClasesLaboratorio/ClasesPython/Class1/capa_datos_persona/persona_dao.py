from Persona import Persona
from capa_datos_persona.cursor_del_pool import CursorDelPool
from conexion import Conexion
from logger_base import log


class PersonaDAO:
    """
    DAO significa: Data Access Objet
    CRUD significa:
                    Create  -> Isertar
                    Read    -> Seleccioar
                    Update  -> Actualizar
                    Delete  -> Eliminar

    """
    _SELECCIONAR = 'SELECT * FROM persona ORDER BY id_persona'
    _INSERTAR = 'INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)'
    _ACTUALIZAR = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
    _ELIMINAR = 'DELETE FROM persona WHERE id_persona=%s'

    # definir los métodos de clase
    @classmethod
    def seleccionar(cls):  # conexiones automáticas
        with CursorDelPool() as cursor:
            cursor.execute(cls._SELECCIONAR)
            registros = cursor.fetchall()
            personas = []  # lista vacia
            for registro in registros:
                persona = Persona(registro[0], registro[1], registro[2], registro[3])
                personas.append(persona)
            return personas

    @classmethod
    def insertar(cls, persona):
        with CursorDelPool() as cursor:
            valores = (persona.nombre, persona.apellido, persona.email)
            cursor.execute(cls._INSERTAR, valores)
            log.debug(f'Persona Insertada: {persona}')
            return cursor.rowcount

    @classmethod
    def actualizar(cls, persona):
        with CursorDelPool() as cursor:
            valores = (persona.nombre, persona.apellido, persona.email, persona.id_persona)
            cursor.execute(cls._ACTUALIZAR, valores)
            log.debug(f'Persona actualizada: {persona}')
            return cursor.rowcount

    @classmethod
    def elimianar(cls, persona):
        with CursorDelPool() as cursor:
            valores = (persona.id_persona,)
            cursor.execute(cls._ELIMINAR, valores)
            log.debug(f'Los objetos eliminados son:{persona}')
            return cursor.rowcount


if __name__ == '__main__':
    # eliminar un registro
    persona1 = Persona(id_persona=5)
    personas_eliminadas = PersonaDAO.elimianar(persona1)
    log.debug(f'Personas eliminadas: {personas_eliminadas}')

    # actualizar un  registro
    persona1 = Persona(7, 'Juan', 'Pena', 'jpena@mail.com')
    personas_actualizadas = PersonaDAO.actualizar(persona1)
    log.debug(f'Personas actualizadas_ {personas_actualizadas}')

    # insertar un registro
    persona1 = Persona(nombre='Francisco', apellido='Sanchez', email='sanchezf@mail.com')
    personas_insaertadas = PersonaDAO.insertar(persona1)
    log.debug(f'personas insertadas: {personas_insaertadas}')

    # seleccionar objetos
    personas = PersonaDAO.seleccionar()
    for persona in personas:
        log.debug(persona)