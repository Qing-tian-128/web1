// Example of simple JavaScript functionality for login, cart, and product handling

// Sample data for products (this could be fetched from a server in a real app)
const products = [
  {
    name: "Biskut Mazola",
    description: "Delicious homemade cookies with a twist of Mazola.",
    price: 20,
    image: "Biskut Mazola.jpg"
  },
  {
    name: "Chocolate Chips",
    description: "Sweet and crunchy chocolate chip cookies.",
    price: 25,
    image: "Chocolate Chips.jpg"
  }
];

// Sample cart, initially empty
let cart = [];

// Function to add product to cart
function addToCart(product) {
  cart.push(product);
  updateCartUI();
}

// Function to update the cart UI
function updateCartUI() {
  const cartItemContainer = document.querySelector('.cart-items');
  cartItemContainer.innerHTML = ""; // Clear current cart items

  // Loop through cart and display each item
  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>Price: RM ${item.price}</p>
      <p>Quantity: 1</p>
    `;

    cartItemContainer.appendChild(cartItem);
  });

  // Update total price
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  document.querySelector('.cart-total').textContent = `Total: RM ${total}`;
}

// Function to simulate login (this is just a placeholder for future login functionality)
function login(username, password) {
  // Placeholder for login logic
  console.log(`Logging in with username: ${username} and password: ${password}`);
}

// Event listeners for adding products to cart (this would be used in the products page)
document.querySelectorAll('.add-to-cart-btn').forEach((button, index) => {
  button.addEventListener('click', () => {
    const product = products[index];
    addToCart(product);
  });
});

// You could also add functions for login, checkout, etc.
