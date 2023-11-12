let cartItems = [];
let totalPrice = 0;

// Array of products
const products = [
    { name: "Threadmill", price: 800, image:"./assets/images/005.jpg"},
    { name: "Cultsport smartRow cabo, Max Weight:110kg", price: 500, image:"./assets/images/006.jpg" },
    { name: "Slovic Yellow Resistance Bands", price: 450,  image:"./assets/images/007.jpg" },
    { name: "Cultsport Adjustable Barbell 20kg", price: 780,  image:"./assets/images/008.jpg" },
    { name: "Kore PVC DM-PVC-1KG-COMBO161 FIXED Dumbbell Set, 1Kg", price: 490,  image:"./assets/images/009.jpg" },
    { name: "Chest Commerial Adidas Performance Power Tower", price: 1200,  image:"./assets/images/010.jpg" },
    // Add more products as needed
];

function addToCart(productIndex) {
    const selectedProduct = products[productIndex];

    if (selectedProduct) {
        const item = {
            name: selectedProduct.name,
            price: selectedProduct.price,
            image: selectedProduct.image
        };

        cartItems.push(item);
        totalPrice += selectedProduct.price;

        updateCart();
    }
}

function updateCart() {
    const cartList = document.getElementById("cartItems");
    const totalElement = document.getElementById("totalPrice");

    cartList.innerHTML = "";
    cartItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)}</span>
        `;
        cartList.appendChild(listItem);
    });

    totalElement.innerText = totalPrice.toFixed(2);
}
