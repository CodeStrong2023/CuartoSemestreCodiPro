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

    //modal Body
    if (cart.length > 0) {
        cart.forEach((product)=> {
            const modalBody = document.createElement("div");
            modalBody.className = "modal-body"
            modalBody.innerHTML = `
            <div class="product">
                    <img class="product-img" src="${product.image}" />
                    <div class="product-info">
                            <h4>${product.productName}</h4>
                    </div>
                <div class="quantity">
                    <span class="quantity-btn-decrease">-</span>
                    <span class="quantity-input">${product.quantity}</span>
                    <span class="quantity-btn-increase">+</span>
                </div>
                    <div class="price">$ ${product.price * product.quantity}</div>
                    <div class="delete-product">X</div>
            </div>
            `;
            modalContainer.append(modalBody);

            const decrease = modalBody.querySelector(".quantity-btn-decrease")
            decrease.addEventListener("click", ()=> {
                if(product.quantity !== 1) {
                    product.quantity--;
                    displayCart();
                }
                displayCartCounter();
            });

            const increase = modalBody.querySelector(".quantity-btn-increase");
            increase.addEventListener("click", ()=> {
                product.quantity++;
                displayCart();
                displayCartCounter();
            });

            //delete
            const deleteProduct = modalBody.querySelector(".delete-product")
            deleteProduct.addEventListener("click", ()=> {
                deleteCartProduct(product.id);
            })
        });

        //modal Footer
        const total = cart.reduce((acc, element) => acc + element.price* element.quantity, 0)
        const modalFooter = document.createElement("div");
        modalFooter.className = "modal-footer"
        modalFooter.innerHTML = `
        <div class="total-price">Total: $ ${total}</div>
        <button class="btn-primary" id="checkout-btn">Go to checkout</button>
        <div id="wallet_container"></div>
        `;
        modalContainer.append(modalFooter);

        //Mercado Pago
        const mp = new MercadoPago("APP_USR-ef5db936-bc44-4b1c-ae47-783966b67e2e", {
            locale: "es-AR",
        });

        //Funcion que genera un titulo con la info del carrito
        const generateCartDescription = () => {
            return cart.map(product => `${product.productName} (x${product.quantity})`).join(', ');
        }
    
        document.getElementById("checkout-btn").addEventListener("click", async () => {
            try {
                const orderData = {
                    title: generateCartDescription(),
                    quantity: 1,
                    price: total,
                };

                const response = await fetch("http://localhost:8080/create_preference", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(orderData),
                });

                const preference = await response.json();
                createCheckoutButton(preference.id);
            } catch (error) {
                alert("Error al generar la preferencia");
            }
        });

        const createCheckoutButton = async (preferenceId) => {
            const bricksBuilder = mp.bricks();
            console.log("Preference ID:", preferenceId);

            const renderComponent = async () => {
                if (window.checkoutButton) {
                    window.checkoutButton.unmount();
                }

                window.checkoutButton = await bricksBuilder.create("wallet", "wallet_container", {
                    initialization: {
                        preferenceId: preferenceId,
                    },
                });
            };

            renderComponent();
        };

    } else {
        const modalText = document.createElement("h2")
        modalText.className = "modal-body";
        modalText.innerText = "Your cart is empty."
        modalContainer.append(modalText);
    }
};

cartBtn.addEventListener("click", displayCart);

const deleteCartProduct =(id)=> {
    const foundId = cart.findIndex((element)=> element.id === id);
    cart.splice(foundId , 1);
    displayCart();
    displayCartCounter();
};

const displayCartCounter=()=> {
    const cartLength = cart.reduce((acc, element) => acc + element.quantity, 0)
    if(cartLength > 0) {
        cartCounter.style.display = "block";
        cartCounter.innerText = cartLength;
    }else {
        cartCounter.style.display = "none";
    };   
};