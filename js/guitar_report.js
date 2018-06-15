// Create Message function
function printGuitarInfo(guitarHTML) {
  let outputDiv = document.getElementById("output");
  outputDiv.innerHTML = guitarHTML;
}

// Create a function that finds a brand from the 2D array on guitars.js using a for loop
let findGuitar = brand => {
  for (let i = 0; i < guitars.length; i++) {
    if (guitars[i].brand === brand) {
      return guitars[i];
    }
  }
};

// Create Guitar HTML function which populates the data from the 2D array
function getGuitarHTML(guitar) {
  return `<h2>${guitar.brand}</h2>
    <p>${guitar.style}</p>
    <img src="${guitar.image}">
    <p>${guitar.description}</p>`;
}

function printGuitarBrand(guitarBrandHTML) {
  let brandSelect = document.getElementById("guitarBrand");
  brandSelect.innerHTML = printGuitarInfo();
  brandSelect.addEventListener("click", guitarBrandHTML);
}
