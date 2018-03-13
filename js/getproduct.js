function getProduct(eventTrigger) {
  console.log(eventTrigger);
  let img1 = eventTrigger.src
  let img2 = eventTrigger.dataset.img2;
  let img3 = eventTrigger.dataset.img3;
  let name = eventTrigger.dataset.name;
  let description= eventTrigger.dataset.description;
  let price= eventTrigger.dataset.price;
    container.classList.add('d-none');
    homePage.classList.add('d-none');
    productPage.classList.remove('d-none');
    let template = `
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h2 class="">${name}</h2>
    <div class="row"> 
    <div  class="col-2">
      <img class="img-fluid" src=${img2} alt="cajon">
      <img class="img-fluid" src=${img3} alt="cajon">
    </div>
    <div class="col">
        <img class="img-fluid" src=${img1} alt="cajon">
    </div>
    <div class="col">
        <h5> Descripción </h5>
        <p> ${description} </p>
        <span><strong> Precio: $</strong> ${price}</span>
        <p><button class="btn btn-primary" type="button" id="addCart " data-img=${img1} data-name= ${name}  data-price= ${price} onclick="getCart(this)"> Agregar al carrito </button></p>
    </div>
  </div>
  <!-- Termina producto de interés -->>`;
    productPage.innerHTML = template;


}