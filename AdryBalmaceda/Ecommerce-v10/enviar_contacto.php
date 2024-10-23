// Conecta a la base de datos MySQL
$servername = "localhost";
$username = "tu_usuario";
$password = "tu_contraseña";
$dbname = "tu_base_de_datos";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica la conexión
if ($conn->connect_error) {
  die("Conexión fallida: " . $conn->connect_error);
}

// Recibe los datos del formulario
$data = json_decode(file_get_contents('php://input'), true);

// Inserta los datos en la base de datos
$sql = "INSERT INTO contacto (nombre, email, mensaje) VALUES ('" . $data['nombre'] . "', '" . $data['email'] . "', '" . $data['mensaje'] . "')";

if ($conn->query($sql) === TRUE) {
  echo "Mensaje enviado con éxito!";
} else {
  echo "Error al enviar el mensaje: " . $conn->error;
}

$conn->close();