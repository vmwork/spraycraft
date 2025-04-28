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

let element = document.getElementById("cards");
for (let i = 0; i < result.documents.length; i++) {
  let div = document.createElement("div");
  div.className = "product-card";
  div.innerHTML = `<img src="${result.documents[i].url}" alt="copter" width="200" />
          <p>${result.documents[i].product_name}</p> 
          <div class="product-card-price">
            <p>${result.documents[i].price} грн</p>

          <button class="product-card-buttons">   <img src="/img/back.png" alt="" width="25" /></button>   
          </div>`;

  element.append(div);
  const buttons = document.querySelectorAll(".product-card-buttons");

  console.log(buttons);
}
