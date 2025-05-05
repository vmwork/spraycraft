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
  const cartState = getCartState();
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  for (let i = 0; i < products.length; i++) {
    let div = document.createElement("div");
    let buttonImg = "/img/cart-1.svg";
    if (cartState.some((cart) => cart.$id === products[i].$id)) {
      buttonImg = "/img/cart-2.svg";
    }
    div.className = "product-card";
    div.innerHTML = `<img src="${products[i].url}" alt="copter" width="200" />
                <p class="product-card-name">${products[i].product_name}</p> 
                <div class="product-card-artical"><p> Артикул : ${products[i].artical}</p></div>
                  
                <div class="product-card-price">
                  <p>${products[i].price} грн</p>
      
                <button id="${products[i].$id}"  class="product-card-buttons">   <img class="img-button" id="${products[i].$id}" src="${buttonImg}" alt="" width="25" />
                
                </button>   
                </div>`;

    element.append(div);

    if (i === products.length - 1) {
      const buttons = document.querySelectorAll(".product-card-buttons");
      const message = document.getElementById("added-to-cart");
      buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
          const cart = getCartState();
          let productToCard = [];
          const getProduct = () => {
            products.forEach((product) => {
              if (product.$id === e.target.id) {
                if (product.product_count_to_buy === null) {
                  product.product_count_to_buy = 1;
                } else {
                  product.product_count_to_buy++;
                }
                productToCard = product;
              }
            });
            let coincidence = false;
            const id = "";
            cart.forEach((product, i) => {
              if (product.$id === productToCard.$id) {
                cart[i] = productToCard;
                id = i;
                coincidence = true;
              }
            });
            if (cart.length === 0 || !coincidence) {
              let buttonInCard = document.getElementById(e.target.id);
              buttonInCard.innerHTML = `<img class="img-button shake" id="${id}" src=/img/cart-2.svg alt="" width="25" />`;
              message.classList.remove("hidden");
              setTimeout(() => {
                message.classList.add("hidden");
              }, 1500);
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
reactiveUpdateFilter();

const getFilterTags = () => {
  const tags = [];
  products.forEach((product) => {
    if (!tags.includes(product.product_name)) {
      let pretag =
        product.product_name.split(" ")[0] +
        " " +
        product.product_name.split(" ")[1];
      if (!pretag.includes(",")) {
        tags.push(pretag);
      }
    }
  });

  // фильтровать только по модели.
  const filtredTTags = tags.filter(
    (it, index) => index === tags.indexOf((it = it.trim()))
  );

  return filtredTTags;
};
const filternames = getFilterTags();

let filter = document.getElementById("products-filter");
let filterDiv = document.getElementById("select-div");
let filterPreviw = document.getElementById("filter-option");

for (let i = 0; i < filternames.length; i++) {
  let option = document.createElement("div");
  option.value = filternames[i];
  option.className = "filter-option";
  option.innerHTML = filternames[i];
  filter.append(option);
}
filterDiv.addEventListener("click", (e) => {
  filter.classList.add("active");
});
filter.addEventListener("click", (e) => {
  if (e.target.innerText === "Усі") {
    products = result?.documents;
  }
  if (e.target.innerText !== "Усі") {
    const filterValue = e.target.innerText.split(" ").reverse()[0];
    products = result?.documents.filter((product) => {
      return product.product_name.includes(filterValue);
    });
  }
  filterPreviw.innerText = e.target.innerText;
  filter.classList.remove("active");
  reactiveUpdateFilter();
});
