let cartItems = [];
let totalPrice = 0;

// Array of products
const products = [
    { name: "Threadmill", price: 800 },
    { name: "Cultsport smartRow cabo, Max Weight:110kg", price: 500 },
    { name: "Slovic Yellow Resistance Bands", price: 450 },
    { name: "Cultsport Adjustable Barbell 20kg", price: 780 },
    { name: "Kore PVC DM-PVC-1KG-COMBO161 FIXED Dumbbell Set, 1Kg", price: 490 },
    { name: "Chest Commerial Adidas Performance Power Tower", price: 1200 },
    // Add more products as needed
];

function addToCart(productIndex) {
    const selectedProduct = products[productIndex];

    if (selectedProduct) {
        const item = {
            name: selectedProduct.name,
            price: selectedProduct.price,
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
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)}</span>
        `;
        cartList.appendChild(listItem);
    });

    totalElement.innerText = totalPrice.toFixed(2);
}
