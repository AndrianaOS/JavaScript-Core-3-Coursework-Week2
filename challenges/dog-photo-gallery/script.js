const buttonEl = document.querySelector("#submit");
const photoGallery = document.querySelector("#photogallery");

async function getDogImage() {
  try {
    const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
    const dogData = await response.json();

    const dogImage = document.createElement("img");
    dogImage.src = dogData.message;
    dogImage.style.width = "20em";
    dogImage.style.height = "20em";

    const listItem = document.createElement("li");
    photoGallery.appendChild(listItem);
    listItem.style.listStyle = "none";

    listItem.appendChild(dogImage);
  } catch (error) {
    console.log(error);
  }
}

buttonEl.addEventListener("click", getDogImage);

// async function showDogImage() {
//   const dogImage = document.createElement("img");
//   const imageObject = await getDogImage();
//   dogImage.src = imageObject.message;
//   dogImage.style.width = "20em";
//   dogImage.style.height = "20em";
//   // console.log(dogImage);

//   const listItem = document.createElement("li");
//   photoGallery.appendChild(listItem);
//   listItem.style.listStyle = "none";

//   listItem.appendChild(dogImage);
// }
