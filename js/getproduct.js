function getProduct(eventTrigger) {
    event.preventDefault();
    container.classList.add('d-none');
    homePage.classList.add('d-none');
    productPage.classList.remove('d-none');
    let template = `
    <div class="row"> 
    <div  class="col-2">
      <img class="img-fluid" src="../assets/images/e-commerce/cajon1a.jpg" alt="cajon">
      <img class="img-fluid" src="../assets/images/e-commerce/cajon1a.jpg" alt="cajon">
      <img class="img-fluid" src="../assets/images/e-commerce/cajon1a.jpg" alt="cajon">
      <img class="img-fluid" src="../assets/images/e-commerce/cajon1a.jpg" alt="cajon">
    </div>
    <div class="col">
        <img class="img-fluid" src="../assets/images/e-commerce/cajon1a.jpg" alt="cajon">
    </div>
    <div class="col">
        <h2> Cajones </h2>
        <h5> Descripción </h5>
        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ducimus accusantium in eius, iste quae quos deleniti quasi explicabo quis id recusandae praesentium, unde, quisquam ab perspiciatis a porro suscipit! </p>
        <span><strong> Precio: </strong> $7,000 MXN </span>
        <h6><strong>  Opiniones: </strong></h6>
        <i class="fa fa-star fa-2x"></i><i class="fa fa-star fa-2x"></i><i class="fa fa-star fa-2x"></i><i class="fa fa-star fa-2x"></i><i class="fa fa-star fa-2x"></i>
        <p><button class="btn btn-primary" type="button" id="addCart"> Agregar al carrito </button></p>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <h2> Productos que quizá te interesen </h2>
    </div>
    <div class="row">
      <div class="col">
        <img class="img-fluid" src="../assets/images/e-commerce/cama1a.jpg" alt="cama">
      </div>
      <div class="col">
        <img class="img-fluid" src="../assets/images/e-commerce/cama1a.jpg" alt="cama">
      </div>
      <div class="col">
        <img class="img-fluid" src="../assets/images/e-commerce/cama1a.jpg" alt="cama">
      </div>
      <div class="col">
        <img class="img-fluid" src="../assets/images/e-commerce/cama1a.jpg" alt="cama">
      </div>
    </div>
  </div>
  <!-- Termina producto de interés -->>`;
    productPage.innerHTML = template;


}