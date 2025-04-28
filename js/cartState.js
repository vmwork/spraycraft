let cardCounter = document.getElementById("card-count");


const setCartState = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
  cardCounter.innerHTML = cart.length;
};
const getCartState = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};
