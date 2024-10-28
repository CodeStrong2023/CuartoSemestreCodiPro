from capa_datos_persona.Usuario import Usuario
from capa_datos_persona.usuario_dao import UsuarioDAO
from logger_base import log

opcion = None
while opcion != 5:
    print('Opciones:')
    print('1. Listar Usuarios')
    print('2. Agregar usuario')
    print('3. Modificar Usuario')
    print('4. Eliminar Usuario')
    print('5. Salir')
    opcion = int(input('Digite la opcion de 1 a 5: '))
    if opcion == 1:
        usuarios = UsuarioDAO.seleccionar()
        for usuario in usuarios:
            log.info(usuario)
    elif opcion == 2:
        username_insert = input('Cree el username del usuario: ')
        password_insert = input('Ingrese Contraseña: ')
        usuario = Usuario(username=username_insert, password=password_insert)
        usuario_insert = UsuarioDAO.insertar(usuario)
        log.info(f'Usuario insertado: {usuario_insert}')
    elif opcion == 3:
        id_usuario_modificar = int(input('Ingresar id usuario a modificar: '))
        username_modificar = input('Digite el usuario a modificar: ')
        password_modificar = input('Ingrese Contraseña a modificar: ')
        usuario = Usuario(username=username_modificar, password=password_modificar, id_usuario=id_usuario_modificar)
        usuario_modificado = UsuarioDAO.actualizar(usuario)
        log.info(f'Usuario a Actualizar: {usuario_modificado}')
    elif opcion == 4:
        id_usuario_elimianar = int(input('Ingresar id usuario a eliminar: '))
        usuario = Usuario(id_usuario=id_usuario_elimianar)
        usuario_eliminado = UsuarioDAO.eliminar(usuario)
        log.info(f'Usiario eliminado: {usuario_eliminado}')

else:
    log.info('Salimos de la aplicacion')
