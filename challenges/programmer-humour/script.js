const imageContainer = document.querySelector("#imagecontainer");
const buttonEl = document.querySelector("#submit");
const myImages = document.querySelector("#myImage");

async function fetchImage() {
  try {
    const response = await fetch("https://xkcd.now.sh/?comic=latest");
    const objectResponse = await response.json();
    console.log(objectResponse);
    myImages.src = objectResponse.img;
    myImages.alt = objectResponse.alt;
    console.log(myImages);
  } catch (error) {
    console.log(error);
  }
}

// buttonEl.addEventListener("click", showImages);

// async function showImages() {
//   const imageObject = await fetchImage();
//   console.log(imageObject);
//   myImages.src = imageObject.img;
//   myImages.alt = imageObject.alt;
//   console.log(myImages);
// }

fetchImage();
