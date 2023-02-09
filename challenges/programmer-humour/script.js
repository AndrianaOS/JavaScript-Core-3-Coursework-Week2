async function fetchImage() {
  try {
    const response = await fetch("https://xkcd.now.sh/?comic=latest");
    const objectResponse = await response.json();
    console.log(objectResponse);
    return objectResponse;
  } catch (error) {
    console.log(error);
  }
}

const imageContainer = document.querySelector("#imagecontainer");
const buttonEl = document.querySelector("#submit");
const myImages = document.querySelector("#myImage");

buttonEl.addEventListener("click", showImages);

async function showImages() {
  const imageObject = await fetchImage();
  console.log(imageObject);
  myImages.src = imageObject.img;
  myImages.alt = imageObject.alt;
  console.log(myImages);
}
