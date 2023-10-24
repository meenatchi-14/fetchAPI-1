console.log("my design");
const mainDiv=document.querySelector(".container");

const API="https://api.thecatapi.com/v1/images/search";

// fetch Api
function getAnimalImage(){
    fetch(API,{
        method:"GET",
    })
    .then((response) => response.json())
  .then((data) => {
    console.log(data);

    data.forEach((cat) => {
      const animalObject = {
        id:cat.id,
        url: cat.url,
        height:cat.height,
        width:cat.width,
    };
    console.log(animalObject);
    AnimelCatCard(animalObject);
    
     
    });
  })
  .catch((err) => console.log("error : ", err));
}

getAnimalImage();

// create card
function AnimelCatCard(cat)
{
  const catImage = document.createElement("div");
  catImage.innerHTML +=`
  <h1 class="title">Cat Images</h1>
  <div class="card">
  <img class="card-img"src="${cat.url}">
  </div>
`;

  mainDiv.append(catImage);
}
/* <img src="${element.url}" width="${element.width}" height="${element.height}"></img> */