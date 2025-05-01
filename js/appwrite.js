const client = new Appwrite.Client();

client
  .setEndpoint("https://fra.cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("680e20d30008c65bc1d1"); // Your project ID

// export const account = new Appwrite.Account(client);
const databases = new Appwrite.Databases(client);
const query = new Appwrite.Query(client);
const result = await databases.listDocuments(
  "680e235f00009982dde6", // databaseId
  "680e26a100097b97eebd", // collectionId
  [Appwrite.Query.limit(100)]
);

const socialLinks = await databases.listDocuments(
  "680e235f00009982dde6", // databaseId
  "681323460016645d21a3" // collectionId
);

let products = result?.documents;
let element = document.getElementById("cards");

const reactiveUpdateFilter = () => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  for (let i = 0; i < products.length; i++) {
    let div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `<img src="${products[i].url}" alt="copter" width="200" />
                <p class="product-card-name">${products[i].product_name}</p> 
                <div class="product-card-artical"><p> Артикул : ${products[i].artical}</p></div>
                  
                <div class="product-card-price">
                  <p>${products[i].price} грн</p>
      
                <button  class="product-card-buttons">   <img class="img-button" name="${products[i].$id}" src="/img/add-to-cart.png" alt="" width="25" /></button>   
                </div>`;

    element.append(div);

    if (i === products.length - 1) {
      const buttons = document.querySelectorAll(".img-button");
      buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
          const cart = getCartState();
          let productToCard = [];
          const getProduct = () => {
            products.forEach((product) => {
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
};
// console.log(result?.documents);
reactiveUpdateFilter();

const getFilterTags = () => {
  const tags = [];
  products.forEach((product) => {
    if (!tags.includes(product.product_name)) {
      let pretag =
        product.product_name.split(" ")[0] +
        " " +
        product.product_name.split(" ")[1];
      tags.push(pretag);
    }
  });
  const filtredTTags = tags.filter(
    (it, index) => index === tags.indexOf((it = it.trim()))
  );
  console.log(filtredTTags);
  return filtredTTags;
};
const filternames = getFilterTags();

let filter = document.getElementById("products-filter");
for (let i = 0; i < filternames.length; i++) {
  let option = document.createElement("option");
  option.value = filternames[i];
  option.innerHTML = filternames[i];
  filter.append(option);
}
filter.addEventListener("change", (e) => {
  if (e.target.value === "Усі") {
    products = result?.documents;
  }
  if (e.target.value !== "Усі") {
    products = result?.documents.filter((product) => {
      return product.product_name.includes(e.target.value);
    });
  }
  reactiveUpdateFilter();
});
