let cartItems = [];
let totalPrice = 0;

function addToCart() {
    const itemName = "Threadmill";
    const itemPrice = 800;

    const item = {
        name: itemName,
        price: itemPrice,
    };

    cartItems.push(item);
    totalPrice += itemPrice;

    updateCart();
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

    
}
