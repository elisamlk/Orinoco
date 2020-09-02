ajaxGet("http://localhost:3000/api/cameras", function (reponse) {
  let cameras = JSON.parse(reponse);
  cameras.forEach(function (cameraDescription) {
    let productDescription = document.getElementById("productDescription");
    let cardDescription = document.createElement("div");
    cardDescription.className = "cardDescription";

    let imageDescription = document.createElement("img");
    imageDescription.src = cameraDescription.imageUrl;

    productDescription.appendChild(cardDescription);
    

    cardDescription.appendChild(imageDescription);
    console.log(cardDescription);
  });
});

/*
<div class="cardDescription">
  <img src="..." class="card-img" alt="...">
  <div class="card-body>
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
 </div>
</div>
*/
