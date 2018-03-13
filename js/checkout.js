let arrayProducts = [];
function getCart(eventT) {
    // console.log(eventT.dataset);
    let price = eventT.dataset.price;
    let name = eventT.dataset.name;
    let image = eventT.dataset.img;
    let obj = {"name": name, "price": price, "imagen": image};
    arrayProducts.push(obj);
    // console.log(array);
    
    
    let counter = document.getElementById("counter");
    counter.innerHTML++;
    // removeFromCart(arrayProducts);
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
// function removeFromCart(arrayProducts) {
//     console.log(arrayProducts);
    
//     arrayProducts = arrayProducts.filter(function(element){
//     return  element.id !== productId
//     console.log(newArray);
//   });
// }
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

