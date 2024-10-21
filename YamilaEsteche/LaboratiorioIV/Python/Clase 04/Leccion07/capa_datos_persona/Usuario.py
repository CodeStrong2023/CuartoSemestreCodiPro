class Usuario:
    # El constructor de la clase. Se llama automáticamente cuando se crea un nuevo objeto de tipo Usuario.
    def __init__(self, id_usuario=None, username=None, password=None):
        # Se inicializan los atributos privados con los valores proporcionados al crear el objeto, o con None si no se proporcionan.
        self._id_usuario = id_usuario
        self._username = username
        self._password = password

    # Método especial que se llama cuando se convierte un objeto a una cadena (por ejemplo, al usar print).
    def __str__(self):
        # Devuelve una representación en cadena del objeto, mostrando el id_usuario, username y password.
        return f'Usuario: {self._id_usuario} {self._username} {self._password}'

    # Métodos Get y Set para acceder y modificar los atributos de la clase de forma controlada.
    # El decorador @property permite acceder al método como si fuera un atributo.
    @property
    def id_usuario(self):
        # Devuelve el valor del atributo privado _id_usuario.
        return self._id_usuario

    # El setter permite asignar un valor al atributo privado _id_usuario.
    @id_usuario.setter
    def id_usuario(self, id_usuario):
        # Asigna un nuevo valor al atributo privado _id_usuario.
        self._id_usuario = id_usuario

    @property
    def username(self):
        # Devuelve el valor del atributo privado _username.
        return self._username

    @username.setter
    def username(self, username):
        # Asigna un nuevo valor al atributo privado _username.
        self._username = username

    @property
    def password(self):
        # Devuelve el valor del atributo privado _password.
        return self._password

    @password.setter
    def password(self, password):
        # Asigna un nuevo valor al atributo privado _password.
        self._password = password