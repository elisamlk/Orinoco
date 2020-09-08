let params = new URLSearchParams (document.location.href.split("?")[1]);
let url = params.get("id_ourson");



ajaxGet("http://localhost:3000/api/cameras", function (reponse) {
  let cameras = JSON.parse(reponse);
  cameras.forEach(function (cameraDescription) {
    let productDescription = document.getElementById("productDescription");
    let cardDescription = document.createElement("div");
    cardDescription.className = "cardDescription";
    let imageDescription = document.createElement("img");
    imageDescription.src = cameraDescription.imageUrl;
    imageDescription.className = "imageDescription";
    let bodyDescription = document.createElement("div");
    bodyDescription.className = "bodyDescription";
    let titleDescription = document.createElement("h5");
    titleDescription.className = "titleDescription";
    titleDescription.textContent = cameraDescription.name;
    let itemDescription = document.createElement("p");
    itemDescription.className = "itemDescription";
    itemDescription.textContent = cameraDescription.description;
    productDescription.appendChild(cardDescription);
    cardDescription.appendChild(imageDescription);
    cardDescription.appendChild(bodyDescription);
    bodyDescription.appendChild(titleDescription);
    bodyDescription.appendChild(itemDescription);
  });
});

console.log(productDescription);

/*
<div class="cardDescription">
  <img src="..." class="card-img" alt="...">
  <div class="bodyDescription>
    <h5 class="titleDescription">Card title</h5>
    <p class="productDescription">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
 </div>
</div>
*/

