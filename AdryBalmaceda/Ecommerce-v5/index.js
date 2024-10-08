const shopContent = document.getElementById("shopContent");
const cart = []; //Este es nuestro carrito, un array vacío

//Filter section
//const productos = [...]; // your products array

const filterSection = document.getElementById('filter');
const petTypeSelect = document.getElementById('pet-type');
const priceRangeSelect = document.getElementById('price-range');
const applyFilterButton = document.getElementById('apply-filter');

applyFilterButton.addEventListener('click', applyFilter);

function applyFilter() {
  const petType = petTypeSelect.value;
  const priceRange = priceRangeSelect.value;
  const filteredProducts = productos.filter(product => {
    let petTypeMatch = true;
    let priceRangeMatch = true;

    if (petType !== '') {
      petTypeMatch = product.productName.includes(petType);
    }

    if (priceRange !== '') {
      const [minPrice, maxPrice] = priceRange.split('-').map(Number);
      priceRangeMatch = product.price >= minPrice && product.price <= maxPrice;
    }

    return petTypeMatch && priceRangeMatch;
  });

  // Update the product list with the filtered products
  const productList = document.getElementById('shopContent');
  productList.innerHTML = '';
  filteredProducts.forEach(product => {
    const productCard = createProductCard(product);
    productList.appendChild(productCard);
  });
}

//function createProductCard(product) {
  // Create a product card element and return it
  // (you can use your existing product card HTML structure)
//}


productos.forEach(product => {
    const content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
        <img src="${product.img}" alt="${product.productName}">
        <h3>${product.productName} $</h3>
        <p>${product.price} $</p>
    `;
    shopContent.append(content);

    const buyButton = document.createElement("button");
    buyButton.innerText = "Buy";
    content.append(buyButton);

    buyButton.addEventListener("click", () => {
        const repeat = cart.some(repeatProduct => repeatProduct.id === product.id);
        
        if(repeat){
            cart.map(prod => {
                if(prod.id === product.id) {
                    prod.quantity++
                    displayCartCounter();
                }                    
            });
        }else {
            cart.push({
                id:product.id,
                productName: product.productName,
                price: product.price,
                quantity: product.quantity,
                img: product.img,    
            });
            displayCartCounter();

        //descomentar si es necesario para depuración
        //console.log(cart)} 
        }
});
});