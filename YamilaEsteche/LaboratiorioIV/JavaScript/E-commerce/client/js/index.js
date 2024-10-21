// Obtenemos el array de productos
const shopcontent = document.getElementById('shopcontent');
const cart = []; //Este es nuestro carrtio de compras, un array vacio que se ira llenando con los productos que el usuario seleccione

// Iteramos sobre el array de productos
productos.forEach((product) => {
    const content = document.createElement('div');
    content.innerHTML= document.createElement('div');
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.productName}</h3>
    <p>${product.price} $</p>
    `;
    shopcontent.append(content);

    const buyButton = document.createElement('button');
    buyButton.innerText = 'Comprar';

    content.append(buyButton);

    buyButton.addEventListener("click", () => {
        //Reciba en el array a traves de comparar los id si ya existe un elemento en la lista,
        //Devuelve true si es verdadero
        const repeat = cart.some((repeatProduct) => repeatProduct.id === product.id);
        if (repeat) {
            cart.map((prod) => {
                if (prod.id === product.id) {
                    prod.quanty++;
                    displayCartCounter();
                }
            })
        } else {
            cart.push({
                id: product.id,
                productName: product.productName,
                price: product.price,
                quanty: product.quanty,
                img: product.img,

            });
            displayCartCounter();
        }

        console.log(cart)
    })

});