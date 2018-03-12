//function for the SPA

// Varriebles que se cambiaran
const container = document.getElementById('spacetemplate');
let title = document.getElementById('title');
let description = document.getElementById('description');
//let firstCarrousel = document.getElementById('title');


function getData(eventTrigger) {
  let sectionSearch = eventTrigger.id;
  let section = dataFourniture[sectionSearch];
  console.log(section);
  let sectionDescription= section.description;
  let sectionCarrouselImg = section.firstCarrousel;
  let firstSectionCarrouselImg = sectionCarrouselImg[0]
  let secondSectionCarrouselImg = sectionCarrouselImg[1]
  let thirdSectionCarrouselImg = sectionCarrouselImg[2]
  let sectionColorPallete = section.suggestedColorPalletes;
  let firstSectionColorPallete = sectionColorPallete[0];
  let secondSectionColorPallete =  sectionColorPallete[1];
  let thirdSectionColorPallete = sectionColorPallete[2];
  let firstTipTitle = section.tips.firstTip.title;
  let firstTipContent = section.tips.firstTip.content;
  let firstTipImg= section.tips.firstTip.image;
  let secondTipTitle = section.tips.secondTip.title;
  let secondTipContent = section.tips.secondTip.content;
  let secondTipImg= section.tips.secondTip.image;
  let thirdTipTitle = section.tips.thirdTip.title;
  let thirdTipContent = section.tips.thirdTip.content;
  let thirdTipImg= section.tips.thirdTip.image;
}


  //event.preventDefault();
  //const section = event.target;
  // console.log(this);
  //
  // let dataSection = data[section]
  // title.innerText = dtaSection.title;
  // description.innerText = dataSection.description;

// Eventos
