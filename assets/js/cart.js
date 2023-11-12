let cartItems = [];
let totalPrice = 0;

// Array of products
const products = [
    { name: "Threadmill", price: 800 },
    { name: "Dumbbells", price: 50 },
    { name: "Yoga Mat", price: 20 },
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
