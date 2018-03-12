//function for the SPA

// Varriebles que se cambiaran
const container = document.getElementById('spacetemplate');
let title = document.getElementById('title');
let description = document.getElementById('description');
//let firstCarrousel = document.getElementById('title');

const getData = (this, data) =>{
  //event.preventDefault();
  //const section = event.target;
  console.log(this);
  //
  // let dataSection = data[section]
  // title.innerText = dtaSection.title;
  // description.innerText = dataSection.description;

}

// Eventos
const living = document.getElementById('living');
living.addEventListener('click', getData(this, dataPictures))
