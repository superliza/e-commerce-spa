//function for the SPA

// Varriebles que se cambiaran
const container = document.getElementById('spacetemplate');
let title = document.getElementById('title');
let description = document.getElementById('description');
let homePage = document.getElementById('homepage');
//let firstCarrousel = document.getElementById('title');


function getData(eventTrigger) {
  homePage.classList.toggle('d-none');
  container.classList.toggle('d-none');
  let sectionSearch = eventTrigger.id;
  let section = dataFourniture[sectionSearch];
  let sectionTitle = section.title;
  console.log(sectionTitle);
  title.textContent = sectionTitle;
  let sectionDescription= section.description;
  description.textContent= sectionDescription;
  let sectionCarrouselImg = section.firstCarrousel;
  let firstSectionCarrouselImg = sectionCarrouselImg[0];
  console.log(firstSectionCarrouselImg);
  $('#firstCarImg').attr('src', firstSectionCarrouselImg);
  let secondSectionCarrouselImg = sectionCarrouselImg[1]
  $('#secondCarImg').attr('src', secondSectionCarrouselImg);
  let thirdSectionCarrouselImg = sectionCarrouselImg[2]
  $('#thirdCarImg').attr('src', thirdSectionCarrouselImg);
  let sectionColorPallete = section.suggestedColorPalletes;
  let firstSectionColorPallete = sectionColorPallete[0];
  $('#firstPallete').attr('src', firstSectionColorPallete);
  let secondSectionColorPallete =  sectionColorPallete[1];
  $('#secondPallete').attr('src', secondSectionColorPallete);
  let thirdSectionColorPallete = sectionColorPallete[2];
  $('#thirdPallete').attr('src', thirdSectionColorPallete);
  let firstTipTitle = section.tips.firstTip.title;
  document.getElementById('firstTipTitle').textContent= firstTipTitle;
  let firstTipContent = section.tips.firstTip.content;
  document.getElementById('firstTipDescription').textContent= firstTipContent;
  let firstTipImg= section.tips.firstTip.image;
  $('#firstTipImg').attr('src', firstTipImg);
  let secondTipTitle = section.tips.secondTip.title;
  document.getElementById('secondTipTitle').textContent= secondTipTitle;
  let secondTipContent = section.tips.secondTip.content;
  document.getElementById('secondDescription').textContent= secondTipContent;
  let secondTipImg= section.tips.secondTip.image;
  $('#secondTipImg').attr('src', secondTipImg);
  let thirdTipTitle = section.tips.thirdTip.title;
  document.getElementById('thirdTipTitle').textContent= thirdTipTitle;
  let thirdTipContent = section.tips.thirdTip.content;
  document.getElementById('thirdTipDescription').textContent= thirdTipContent;
  let thirdTipImg= section.tips.thirdTip.image;
  $('#thirdTipImg').attr('src', thirdTipImg);
  createFurnitureSection(selectObject(sectionSearch));
}

//Saca el objeto que manda a la función de createFurnitureSection
function selectObject(sectionSearch) {
  if(sectionSearch === 'living') {
    const living = {
      'sofa': "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=sofa&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x",
         'lamp':  "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=lamp&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x",
         'coffetable':  "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=coffe%20table&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x",
         'rugs':  "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=rugs&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x",
         'ottoman':  "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=ottoman&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x",
      //    'consoletable':  "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=console+table&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x"
  };
    createFurnitureSection(living)
  }
}

//Función que itera en muebles para hacer fetch por cada endpoint
function createFurnitureSection(spaceObject) {
  console.log(spaceObject);
  
  $.each(spaceObject, function (objectKey) {
    let url = spaceObject[objectKey];
    let spaceName = objectKey;
    console.log(url);
    console.log(spaceName);
    let furnitureTitle = $("<h3></h3>").text(spaceName);
    let furniturecontainer =  $("<div></div>");
    furniturecontainer.attr({
      id: spaceName,
  });
    $('#furniturecontainer').append(furnitureTitle);
    $('#furniturecontainer').append(furniturecontainer);
    // getDataFetch(url, spaceName);
})

function getDataFetch(url, spaceName) {
  fetch(url)
      .then(function (response) {
          response.json().then(function (data) {
              console.log(data);
              let newObject = {};
              data.items.forEach(function (value, i) {
                  const route = dataPictures.livingroom[spaceName];
                  // console.log(value, i)
                  let productName = value.name;
                  let productPrice = value.salePrice;
                  let productDescription = value.shortDescription;
                  let finalIndex = [i + 1]
                  let setImages = (route[finalIndex]);
                  let setImages2 = setImages[0];
                  let setImages3 = setImages[1];
                  let setImages4 = setImages[2];
                  
                  printProduct(productName, productPrice, productDescription, setImages2, setImages3, setImages4)
              });
          })
      })
}



function printProduct(productName, productPrice, productDescription, setImages2, setImages3, setImages4) {
  const sofaContainer = $('#sofaContainer');
  let furnitureContainer = $("<div></div>");
  furnitureContainer.attr({
      class: 'furniturecontainer col'
  });
  sofaContainer.append(furnitureContainer);
  let imageFurniture = $("<img></img>");
  imageFurniture.attr({
      class: 'furniture',
      src: setImages2,
      'data-img2': setImages3, 
      'data-img3': setImages4
  });
  furnitureContainer.append(imageFurniture);
  let titleFurniture = $("<h3></h3>").text(productName);
  furnitureContainer.append(titleFurniture);
  let priceFurniture = $("<span></span>").text(`$ ${productPrice}`);
  furnitureContainer.append(priceFurniture);

}
}

