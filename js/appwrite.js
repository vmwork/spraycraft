const client = new Appwrite.Client();

client
  .setEndpoint("https://fra.cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("680e20d30008c65bc1d1"); // Your project ID

export const account = new Appwrite.Account(client);
export const databases = new Appwrite.Databases(client);

const result = await databases.listDocuments(
  "680e235f00009982dde6", // databaseId
  "680e26a100097b97eebd" // collectionId
);
console.log(result);
let element = document.getElementById("cards");
for (let i = 0; i < result.documents.length; i++) {
  let div = document.createElement("div");
  div.className = "product-card";
  div.innerHTML = `<img src="${result.documents[i].url}" alt="copter" width="200" />
          <p>${result.documents[i].product_name}</p> 
          <div class="product-card-price">
            <p>${result.documents[i].price} грн</p>

          <button  class="product-card-buttons">   <img name="${result.documents[i].$id}" src="/img/back.png" alt="" width="25" /></button>   
          </div>`;

  element.append(div);

  if (i === result.documents.length - 1) {
    const buttons = document.querySelectorAll(".product-card-buttons");
    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const cart = getCartState();
        let productToCard = [];
        const getProduct = () => {
          result.documents.forEach((product) => {
            if (product.$id === e.target.name) {
              if (product.product_count_to_buy === null) {
                product.product_count_to_buy = 1;
              } else {
                product.product_count_to_buy++;
              }
              productToCard = product;
            }
          });
          let coincidence = false;
          cart.forEach((product, i) => {
            if (product.$id === productToCard.$id) {
              cart[i] = productToCard;
              coincidence = true;
            }
          });
          if (cart.length === 0 || !coincidence) {
            cart.push(productToCard);
          }
          setCartState(cart);
        };
        getProduct();
      });
    });
  }
}
