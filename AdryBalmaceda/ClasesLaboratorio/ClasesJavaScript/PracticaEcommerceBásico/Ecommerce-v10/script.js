// Selecciona el formulario
const formulario = document.querySelector('.formulario-contacto');

// Agrega evento de envío del formulario
formulario.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita que el formulario se envíe por defecto

  // Obtén los valores de los campos del formulario
  const nombre = document.querySelector('input[name="nombre"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const mensaje = document.querySelector('textarea[name="mensaje"]').value;

  // Envía los datos al servidor
  enviarDatos(nombre, email, mensaje);
});
// Función para enviar datos al servidor
function enviarDatos(nombre, email, mensaje) {
    // Crea un objeto con los datos del formulario
    const datos = {
      nombre: nombre,
      email: email,
      mensaje: mensaje
    };
  
    // Convierte el objeto a JSON
    const json = JSON.stringify(datos);
  
    // Envía los datos al servidor mediante AJAX
    fetch('enviar_contacto.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: json
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
  }