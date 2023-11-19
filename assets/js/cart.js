// OPEN & CLOSE CART
const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#cart-close");

cartIcon.addEventListener("click", () => {
  cart.classList.add("active");
});

closeCart.addEventListener("click", () => {
  cart.classList.remove("active");
});

// Start when the document is ready
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}

// =============== START ====================
function start() {
  addEvents();
}

// ============= UPDATE & RERENDER ===========
function update() {
  addEvents();
  updateTotal();
}

// =============== ADD EVENTS ===============
function addEvents() {
  // Remove items from cart
  let cartRemove_btns = document.querySelectorAll(".cart-remove");
  console.log(cartRemove_btns);
  cartRemove_btns.forEach((btn) => {
    btn.addEventListener("click", handle_removeCartItem);
  });

  // Change item quantity
  let cartQuantity_inputs = document.querySelectorAll(".cart-quantity");
  cartQuantity_inputs.forEach((input) => {
    input.addEventListener("change", handle_changeItemQuantity);
  });

  // Add item to cart
  let addCart_btns = document.querySelectorAll(".add-cart");
  addCart_btns.forEach((btn) => {
    btn.addEventListener("click", handle_addCartItem);
  });

  // Buy Order
  const buy_btn = document.querySelector(".btn-buy");
  buy_btn.addEventListener("click", handle_buyOrder);
}

// ============= HANDLE EVENTS FUNCTIONS =============
let itemsAdded = [];

function handle_addCartItem() {
  let product = this.parentElement;
  let title = product.querySelector(".product-title").innerHTML;
  let price = product.querySelector(".product-price").innerHTML;
  let imgSrc = product.querySelector(".product-img").src;
  console.log(title, price, imgSrc);

  let newToAdd = {
    title,
    price,
    imgSrc,
  };

  // handle item is already exist
  if (itemsAdded.find((el) => el.title == newToAdd.title)) {
    alert("This Item Is Already Exist!");
    return;
  } else {
    itemsAdded.push(newToAdd);
  }

  // Add product to cart
  let cartBoxElement = CartBoxComponent(title, price, imgSrc);
  let newNode = document.createElement("div");
  newNode.innerHTML = cartBoxElement;
  const cartContent = cart.querySelector(".cart-content");
  cartContent.appendChild(newNode);

  update();
}

function handle_removeCartItem() {
  this.parentElement.remove();
  itemsAdded = itemsAdded.filter(
    (el) =>
      el.title !=
      this.parentElement.querySelector(".cart-product-title").innerHTML
  );

  update();
}

function handle_changeItemQuantity() {
  if (isNaN(this.value) || this.value < 1) {
    this.value = 1;
  }
  this.value = Math.floor(this.value); // to keep it integer

  update();
}

function handle_buyOrder() {
  if (itemsAdded.length <= 0) {
    alert("There is No Order to Place Yet! \nPlease Make an Order first.");
    return;
  }
  const cartContent = cart.querySelector(".cart-content");
  cartContent.innerHTML = "";


  update();
}

// =========== UPDATE & RERENDER FUNCTIONS =========
function updateTotal() {
  let cartBoxes = document.querySelectorAll(".cart-box");
  const totalElement = cart.querySelector(".total-price");
  let total = 0;
  cartBoxes.forEach((cartBox) => {
    let priceElement = cartBox.querySelector(".cart-price");
    let price = parseFloat(priceElement.innerHTML.replace("$", ""));
    let quantity = cartBox.querySelector(".cart-quantity").value;
    total += price * quantity;
  });

  // keep 2 digits after the decimal point
  total = total.toFixed(2);
  // or you can use also
  // total = Math.round(total * 100) / 100;

  totalElement.innerHTML = "$" + total;
}

// ============= HTML COMPONENTS =============
function CartBoxComponent(title, price, imgSrc) {
  return `
    <div class="cart-box">
        <img src=${imgSrc} alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <!-- REMOVE CART  -->
        <i class='bx bxs-trash-alt cart-remove'></i>
    </div>`;
}
// Add an event listener for the "keyup" event on the search input
document.getElementById('searchInput').addEventListener('keyup', function () {
  // Call the searchItems function
  searchItems();
});

function searchItems() {
  // Get the search query from the input field
  const searchQuery = document.getElementById('searchInput').value.toLowerCase();

  // Get all the cards
  const cards = document.querySelectorAll('.product-box');

  // Loop through each card to check if it contains the search query
  cards.forEach(card => {
    const cardTitle = card.querySelector('.product-title').innerText.toLowerCase();
    // If the card contains the search query, display it; otherwise, hide it
    if (cardTitle.includes(searchQuery)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}


function showDetails(button) {
  // Find the parent product-box element
  let productBox = button.parentElement;

  // Extract details from the product-box
  let title = productBox.querySelector(".product-title").innerHTML;
  let price = productBox.querySelector(".product-price").innerHTML;
  let imgSrc = productBox.querySelector(".product-img").src;
  let description = productBox.querySelector(".description").innerHTML;

  // Create a modal container
  let modalContainer = document.createElement("div");
  modalContainer.classList.add("modal-container");

  // Create the content for the modal
  let modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");
  modalContent.innerHTML = `
      <h2>${title}</h2>
      <img src="${imgSrc}" alt="${title}" class="modal-img">
      <p>Price: ${price}</p>
      <p>Description: ${description}</p>
      <!-- Add other details as needed -->
  `;

  // Create a close button for the modal
  let closeButton = document.createElement("button");
  closeButton.classList.add("close-button");
  closeButton.innerHTML = "&times;"; // × symbol for the close button

  // Append the content and close button to the modal container
  modalContainer.appendChild(closeButton);
  modalContainer.appendChild(modalContent);

  // Append the modal container to the body
  document.body.appendChild(modalContainer);

  // Add an event listener to the close button to remove the modal on click
  closeButton.addEventListener("click", function () {
    modalContainer.remove();
  });
}