from capa_datos_persona.Usuario import Usuario
from capa_datos_persona.cursor_del_pool import CursorDelPool
from logger_base import log
class UsuarioDAO:
    """"
    DAO significa: Data Access Object
    CRUD significa:
        Create -> Insertar
        Read   -> Seleccionar
        Update -> Actualizar
        Delete -> Eliminar
    """

    _SELECCIONAR = "SELECT * FROM usuario ORDER BY id_usuario"
    _INSERTAR = "INSERT INTO usuario(username, password) VALUES (%s,%s)"
    _ACTUALIZAR = "UPDATE usuario SET username=%s, password=%s WHERE id_usuario=%s"
    _ELIMINAR = "DELETE FROM usuario WHERE id_usuario=%s"

    #Definimos los métodos de clase
    @classmethod
    def seleccionar(cls):
        with CursorDelPool() as cursor:
            log.debug("Seleccionando usuarios")
            cursor.execute(cls._SELECCIONAR)
            registros = cursor.fetchall()
            usuarios = [] #Creamos una lista
            for registro in registros:
                usuario = Usuario(registro[0], registro[1], registro[2])
                usuarios.append(usuario)
            return usuarios

    @classmethod
    def insertar(cls, usuario):
        with CursorDelPool() as cursor:
            log.debug(f"Usuario a insertar: {usuario}")
            valores = (usuario.username, usuario.password)
            cursor.execute(cls._INSERTAR, valores)
            return cursor.rowcount

    @classmethod
    def actualizar(cls, usuario):
        with CursorDelPool() as cursor:
            log.debug(f"Usuario a actualizar: {usuario}")
            valores = (usuario.username, usuario.password, usuario.id_usuario)
            cursor.execute(cls._ACTUALIZAR, valores)
            return cursor.rowcount

    @classmethod
    def eliminar(cls, usuario):
        with CursorDelPool() as cursor:
            log.debug(f"Usuario a eliminar: {usuario}")
            valores = (usuario.id_usuario,)
            cursor.execute(cls._ELIMINAR, valores)
            return cursor.rowcount


if __name__ == "__main__":
    # Eliminar un registro
    usuario1 = Usuario(id_usuario=3)
    usuario_eliminado = UsuarioDAO.eliminar()
    log.debug(f"Usuario eliminado: {usuario_eliminado}")

    # Actualizar un registro
    usuario1 = Usuario(id_usuario= 1, username="", password="369")
    usuario_actualizado = UsuarioDAO.actualizar(usuario1)
    log.debug(f"Usuario actualizado: {usuario_actualizado}")

    # Insertar un registro
    usuario1 = Usuario(username="kely", password="321")
    usuario_insertado= UsuarioDAO.insertar(usuario1)
    log.debug(f"Usuario insertado: {usuario_insertado}")

    # Seleccionar objetos
    usuarios = UsuarioDAO.seleccionar()
    for usuario in usuarios:
        log.debug(usuario)
