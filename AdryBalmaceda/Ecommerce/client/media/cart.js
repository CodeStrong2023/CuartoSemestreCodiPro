const modalContainer = document.getElementById("modal-container");
const modalOverlay = document.getElementById("modal-overlay");

const cartBtn = document.getElementById("cart-btn");
const cartCounter = document.getElementById("cart-counter");

const displayCart = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "block";
    modalOverlay.style.display = "block";

    //modal Header
    const modalHeader = document.createElement("div");

    const modalClose = document.createElement("div");
    modalClose.innerText = "❌"
    modalClose.className = "modal-close";
    modalHeader.append(modalClose);

    modalClose.addEventListener("click", () =>{
        modalContainer.style.display = "none";
        modalOverlay.style.display = "none";
    });

    const modalTitle = document.createElement("div");
    modalTitle.innerText = "Cart";
    modalTitle.className = "modal-title";
    modalHeader.append(modalTitle);

    modalContainer.append(modalHeader);

    // modal Body
cart.forEach((product) => {
    // Crear un nuevo div para el cuerpo del modal
    const modalBody = document.createElement("div");
    modalBody.className = "modal-body";
    
    // Establecer el contenido HTML del nuevo div
    modalBody.innerHTML = `
        <div class="product">
            <img class="product-img" src="${product.img}" /> ////alt="${product.productName}" 
            <div class="product-info">
                <h4>${product.productName}</h4>
            </div>
            <div class="quantity">
                <span class="quantity-btn-decrease">-</span>
                <span class="quantity-input">${product.quantity}</span>
                <span class="quantity-btn-increase">+</span>
            </div>
            <div class="price">${product.price * product.quantity} $</div>   ////.toFixed(2)
            <div class="delete-product">❌</div>
        </div>
    `;

    // Agregar el div al cuerpo del modal (esto debería ser parte del código más amplio donde se maneja el modal)
    // modalContainer.appendChild(modalBody); // Descomentar y ajustar según la estructura del DOM
    
    modalContainer.append(modalBody);

    const decrease = modalBody.querySelector(".quantity-btn-decrease");
    decrease.addEventListener("click", () => {
        if(product.quantity > 1){  // Cambio de "product.quantity !== 1" a "product.quantity > 1"
            product.quantity--;
            displayCart();    
        }
    });
    const increase = modalBody.querySelector(".quantity-btn-increase");
    increase.addEventListener("click", () => {
        product.quantity++;
        displayCart();
    })
});
    //delete
    const deleteProduct = modalBody.querySelector(".delete-product");

    deleteProduct.addEventListener("click", ()=> {
        deleteCartProduct(product.id);
    })

    //modal footer
    const total = cart.reduce((acc, el) => acc + el.price * el.quantity, 0);

    const modalFooter = document.createElement("div");
    modalFooter.className = "modal-footer"
    modalFooter.innerHTML = `
    <div class="total-price">Total: ${total.toFixed(2)} $</div>     //se ha cambiado Total

    `;
    modalContainer.append(modalFooter);

    };

cartBtn.addEventListener("click", displayCart);

//agrego if
const deleteCartProduct =(id)=> {
    const foundId = cart.findIndex((element)=> element.id === id)
    if(foundId !== -1){
    console.log(foundId);
    cart.splice(foundId, 1);
    displayCart();
    displayCartCounter();
    };

const displayCartCounter =()=> {
    const cartLength = cart.reduce((acc, el) => acc + el.price * el.quantity, 0);
    if (cartLength > 0) {
        cartCounter.style.display = "block";
    cartCounter.innerText = cartLength;
    } else {
        cartCounter.style.display = "none";
    }
    
    
};

}