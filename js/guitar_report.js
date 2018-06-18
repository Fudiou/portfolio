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
    <h3>${guitar.style}</h3>
    <img src="${guitar.image}">
    <p>${guitar.description}</p>`;
}

//Obtain the search button
let searchButton = document.getElementById("searchButton");
//When the button is clicked, query the 2 select values
searchButton.addEventListener("click", function() {
  let brand = document.getElementById("guitarBrand").value.toLowerCase();
  let style = document.getElementById("guitarStyle").value.toLowerCase();
  //Filter through the guitar array for the ones that have the same brand and style as the select values
  let guitarsArray = guitars.filter(
    guitar =>
      guitar.brand.toLowerCase() === brand &&
      guitar.style.toLowerCase() === style
  );

  if (guitarsArray.length === 0) {
    alert("No guitar found. Please select a different brand or style.");
  }
  //Loop through the array to create the html for each guitar
  let guitarHtml = "";
  guitarsArray.forEach(guitar => {
    guitarHtml += getGuitarHTML(guitar);
  });
  //Print the final string
  printGuitarInfo(guitarHtml);
});
  