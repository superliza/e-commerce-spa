let arrayProducts = [];
function getCart(eventT) {
    // console.log(eventT.dataset);
    // let myId = new Date().getTime();
    
    let price = eventT.dataset.price;
    let name = eventT.dataset.name;
    let image = eventT.dataset.img;
    let obj = {
        "name": name, 
        "price": price, 
        "imagen": image
    };
    // console.log(price);
    
    arrayProducts.push(obj);
    // console.log(arrayProducts.indexOf(myId));
    // let hola = arrayProducts.indexOf(myId);
    // console.log(arrayProducts.splice(hola, 2));
    addElements(arrayProducts);
    // console.log(arrayProducts);
    
    // let theClick = eventT.classList.toggle("click");
    // console.log(hol);
    addClass(eventT, arrayProducts, obj);
    
}

function addElements(arrayProducts) {
    // console.log(arrayProducts);
    
}

function increaseCounter() {
    let counter = document.getElementById("counter");
    counter.innerHTML++;
}

function addClass(eventT, arrayProducts, obj) {
    // console.log(arrayProducts);
    
    let theClick = eventT.classList.contains("click");
    // console.log(theClick);
    
    if (theClick === false) {  
        eventT.innerHTML = "Quitar del carrito"
        eventT.classList.toggle("click");
        increaseCounter();
        // removeFromCart(eventT, arrayProducts, myId);
    } else {
        // console.log(theClick);
        
        eventT.innerHTML = "Agregar al carrito"
        eventT.classList.toggle("click");
        decreaseCounter();
        removeFromCart(eventT, arrayProducts, obj);
               
    }
}

function decreaseCounter() {
    let counter = document.getElementById("counter");
    counter.innerHTML--;
}


// let cartProducts = [];
// function getCart(eventT) {
//   if (btnEvent.classList.contains('clicked') == false ) {
//     increaseCounter();
//     changeButtonStatus(btnEvent,false);
//     let newArray = data.products.filter(function(element){
//       if (productId == element.id) {
//           cartProducts.push(element);
//       }
//     })
//    console.log(cartProducts);
//    localStorage.setItem("newProducts",JSON.stringify(cartProducts));
//   }else if (btnEvent.classList.contains('clicked') == true ){
//     decreaseCounter()
//     changeButtonStatus(btnEvent,true);
//     removeFromCart(productId)
//     console.log(cartProducts);
//   }
// }
function removeFromCart(eventT, arrayProducts, obj) {
    let buscandoIndex = arrayProducts.indexOf(obj);
    let deleteCar = arrayProducts.splice(buscandoIndex, 1);
    console.log(deleteCar);
    return deleteCar;
    // let hola = arrayProducts.splice(buscandoIndex, 2);
    // // console.log(hola);
    
    // return hola;
    
//     arrayProducts = arrayProducts.filter(function(element){
//     return  element.id !== productId
//     console.log(newArray);
//   });
}
// function increaseCounter() {
//   let counter = parseInt(document.getElementById("counterItems").textContent);
//   let counter2 = document.getElementById("counterItems");
//   counter += 1
//   counter2.innerHTML = counter;
//   saveItemsContent(counter)
// }
// function decreaseCounter() {
//   let counter = parseInt(document.getElementById("counterItems").textContent);
//   let counter2 = document.getElementById("counterItems");
//   counter -= 1
//   counter2.innerHTML = counter;
//   saveItemsContent(counter)
// }
// function changeButtonStatus(button,boolean) {
//   if (boolean == false) {
//     button.innerText = ("Quitar del carrito");
//     button.classList.toggle("clicked");
//   }else if (boolean == true) {
//     button.innerText = ("Agregar al carrito");
//     button.classList.toggle("clicked");
//   }
// }
// function saveItemsContent (counter){
//   localStorage.setItem("saveProducts",counter);
// }

