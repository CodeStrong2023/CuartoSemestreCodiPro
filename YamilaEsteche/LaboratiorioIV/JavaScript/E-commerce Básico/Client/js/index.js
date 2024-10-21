const shopContent = document.getElementById('shopContent');
const cart = []; //Este es nuestro carrito, un array vacio.

productos.forEach((product) => {
    const content = document.createElement("div");
    content.innerHTML = `
    <img src="${product.image}">
    <h3>${product.productName}</h3>
    <p>$ ${product.price}</p>
    `;
    shopContent.append(content);

    const buyButton = document.createElement("button");
    buyButton.innerText = "Buy";

    content.append(buyButton);

    buyButton.addEventListener("click", ()=>{
        const repeat = cart.some((repeatProduct) => repeatProduct.id === product.id);

        if(repeat){
            cart.map((prod)=> {
                if(prod.id === product.id){
                    prod.quantity++;
                    displayCartCounter();
                }
            });
        } else {
            cart.push({
                id: product.id,
                productName: product.productName,
                price: product.price,
                quantity: product.quantity,
                image: product.image,
            });
            displayCartCounter();
        }
    })
});