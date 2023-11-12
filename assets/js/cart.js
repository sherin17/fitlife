
let cartItems = [];
let totalPrice = 0;

// Array of products
const products = [
    { name: "Threadmill", price: 600, image: "./assets/images/005.jpg" },
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
        // Check if the item is already in the cart
        const existingItem = cartItems.find(item => item.name === selectedProduct.name);

        if (existingItem) {
            // If item exists, increment the count
            existingItem.count += 1;
        } else {
            // If item doesn't exist, add it to the cart with count 1
            const newItem = {
                name: selectedProduct.name,
                price: selectedProduct.price,
                image: selectedProduct.image,
                count: 1
            };
            cartItems.push(newItem);
        }

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
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <span>${item.name}</span>
                <span>Quantity: ${item.count}</span>
                <span>Total: $${(item.price * item.count).toFixed(2)}</span>
            </div>
        `;
        cartList.appendChild(listItem);
    });

    totalElement.innerText = totalPrice.toFixed(2);
}