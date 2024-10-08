// Obtener los elementos del DOM que necesitamos
const filterContainer = document.querySelector('.filter-container');
const productsSection = document.querySelector('#products');
const tipoInputs = filterContainer.querySelectorAll('input[name="tipo"]');
const precioInputs = filterContainer.querySelectorAll('input[name="precio"]');

// Definir la función que filtra los productos
function filterProducts(products) {
    // Obtener los valores de los filtros seleccionados
    const tipoSeleccionado = Array.from(tipoInputs).find(input => input.checked).value;
    const precioSeleccionado = Array.from(precioInputs).find(input => input.checked).value;

    // Filtrar los productos según los filtros seleccionados
    const filteredProducts = products.filter(product => {
        if (tipoSeleccionado && !product.title.includes(tipoSeleccionado)) return false;
        if (precioSeleccionado) {
            const precioMin = parseInt(precioSeleccionado.split('—')[0].trim().replace('$', ''));
            const precioMax = parseInt(precioSeleccionado.split('—')[1].trim().replace('$', ''));
            if (product.price < precioMin || product.price > precioMax) return false;
        }
        return true;
    });

    // Actualizar la lista de productos
    productsSection.innerHTML = '';
    filteredProducts.forEach(product => {
        const productHTML = `
            <div class="container">
                <div>
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <div>
                    <p>${product.title}</p>
                    <span>$ ${product.price}</span>
                    <button>Comprar</button>
                </div>
            </div>
        `;
        productsSection.insertAdjacentHTML('beforeend', productHTML);
    });
}

// Agregar un evento de cambio a los filtros
tipoInputs.forEach(input => input.addEventListener('change', () => filterProducts(original_products)));
precioInputs.forEach(input => input.addEventListener('change', () => filterProducts(original_products)));

// Inicializar la lista de productos
filterProducts(original_products);