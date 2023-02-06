const buttonEl = document.querySelector("#submit");
const photoGallery = document.querySelector("#photogallery");

async function getDogImage() {
  try {
    const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
    const objectResponse = await response.json();
    // const objectURL = URL.createObjectURL(blob);
    return objectResponse;
  } catch (error) {
    console.log(error);
  }
}

buttonEl.addEventListener("click", showDogImage);

async function showDogImage() {
  const dogImage = document.createElement("img");
  imageObject = await getDogImage();
  dogImage.src = imageObject.message;
  dogImage.style.width = "20em";
  dogImage.style.height = "20em";
  // console.log(dogImage);

  const listItem = document.createElement("li");
  photoGallery.appendChild(listItem);
  listItem.style.listStyle = "none";
  listItem.innerHTML = "";

  listItem.appendChild(dogImage);
}
