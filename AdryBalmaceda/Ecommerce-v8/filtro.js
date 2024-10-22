document.getElementById('button').addEventListener('click', function() {
    const query = document.getElementById('filtro').value;
    alert('Buscando: ' + query); // Aquí puedes implementar la lógica de búsqueda
});

function buscarProductos() {
    const busqueda = document.getElementById('busqueda').value.toLowerCase();
    const productos = document.querySelectorAll('.producto');

    productos.forEach(producto => {
        const nombreProducto = producto.textContent.toLowerCase();
        if (nombreProducto.includes(busqueda)) {
            producto.style.display = 'block'; // Muestra el producto
        } else {
            producto.style.display = 'none'; // Oculta el producto
        }
    });
}

