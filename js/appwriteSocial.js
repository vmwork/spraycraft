const client = new Appwrite.Client();

client
  .setEndpoint("https://fra.cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("680e20d30008c65bc1d1"); // Your project ID

const databases = new Appwrite.Databases(client);

const socialLinks = await databases.listDocuments(
  "680e235f00009982dde6", // databaseId
  "681323460016645d21a3" // collectionId
);

const setHeaderSocialLinks = () => {
  const socialLinksElement = document.getElementById("social-links");
  for (let i = 0; i < socialLinks.documents.length; i++) {
    const socialLinksLi = document.createElement("li");
    socialLinksLi.className = "";
    socialLinksLi.innerHTML = `<a href="${
      socialLinks.documents[i].url
    }" target="_blank">
    <img src="img/social-icon-${i + 1}.svg" alt="Alternate Text"
                  />
    </a>`;
    socialLinksElement.append(socialLinksLi);
  }
};
const setFooterSocialLinks = () => {
  const socialLinksElement = document.getElementById("social-links-footer");
  for (let i = 0; i < socialLinks.documents.length; i++) {
    const socialLinksLi = document.createElement("li");
    socialLinksLi.className = "";
    socialLinksLi.innerHTML = `<a href="${
      socialLinks.documents[i].url
    }" target="_blank">
      <img src="img/social-footer-icon-${i + 1}.png" alt="Alternate Text"
                    />
      </a>`;
    socialLinksElement.append(socialLinksLi);
  }
};
setHeaderSocialLinks();
setFooterSocialLinks();
