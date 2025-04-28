let cardCounter = document.getElementById("card-count");

const setCartState = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));

  if (cardCounter) {
    cardCounter.innerHTML = cart.length;
  }
};
const getCartState = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

const checkCounter = () => {
  const counter = JSON.parse(localStorage.getItem("cart")) || [];
  if (cardCounter) {
    cardCounter.innerHTML = counter.length;
  }
};
checkCounter();
