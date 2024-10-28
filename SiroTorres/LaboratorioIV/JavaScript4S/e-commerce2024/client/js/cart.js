const modalContainer = document.getElementById("modal-container");
const modalOverlay = document.getElementById("modal-overlay");

const cartBtn = document.getElementById("cart-btn");

const displayCart = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "block";
    modalOverlay.style.display = "block";

    //modal Header
    const modalHeader = document.createElement("div");

    const modalClose = document.createElement("div");
    modalClose.innerText = "❌";
    modalClose.className = "modal-close";
    modalHeader.append(modalClose);

    modalClose.addEventListener("click", ()=>{
        modalContainer.style.display = "none";
        modalOverlay.style.display = "none";
    })

    const modalTitle = document.createElement("div");
    modalTitle.innerText = "Cart";
    modalTitle.className = "modal-title";
    modalHeader.append(modalTitle);

    modalContainer.append(modalHeader);

    //Modal body
    cart.forEach((product)=> {
        const modalBody = document.createElement("div");
        modalBody.className = "modal-body";
        modalBody.innerHTML = `
        <div class="product">
            <img class="product-img" src="${product.img}" />
            <div class="produc t-info">
                <h4>${product.productName}</h4>
            </div>
          <div class="quantity">
            <span class="quantity-btn-decrese">-</span>
            <span class="quantity-input">${product.quanty}</span>
            <span class="quantity-btn-increse">+</span>
          </div>
            <div class="price">${product.price * product.quanty} $</div>
            <div class="delete-product">❌</div>
        </div>
        `;
        modalContainer.append(modalBody);
        //btn for decrese
        const decrese = modalBody.querySelector(".quantity-btn-decrese")
        decrese.addEventListener("click", ()=>{
            if(product.quanty !==1){
                product.quanty--;
                displayCart();
            }
            
        });
        //btn for increse
        const increse = modalBody.querySelector(".quantity-btn-increse")
        increse.addEventListener("click", ()=>{
            product.quanty++;
            displayCart();
        });

        //btn delete
        const deleteProduct = modalBody.querySelector(".delete-product");
        deleteProduct.addEventListener("click", ()=> {
            deleteCartProduct(product.id);
        })
    });

    //Modal fotter
    const total = cart.reduce((acc, el) => acc + el.price * el.quanty, 0);

    const modalFooter = document.createElement("div");
    modalFooter.className = "modal-footer"
    modalFooter.innerHTML = `
    <div class="total-price">Total: ${total}</div>

    `;
    modalContainer.append(modalFooter);
};

cartBtn.addEventListener("click", displayCart);

const deleteCartProduct =(id)=> {
    const foundId = cart.findIndex((element) => element.id === id);
    cart.splice(foundId ,1);
    displayCart();
}