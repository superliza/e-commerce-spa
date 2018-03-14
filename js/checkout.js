function getCart(eventTrigger) {
    if (eventTrigger.classList.contains('clicked') === false) {
        console.log("no tiene clicked")
        increaseCounter(eventTrigger);
        changeButtonStatus(false, eventTrigger);
        addProduct(eventTrigger)
    } else if (eventTrigger.classList.contains('clicked') === true) {
        console.log(eventTrigger);
        console.log("sí tiene clickled")
        decreaseCounter(eventTrigger);
        changeButtonStatus(true, eventTrigger);
        deleteProduct(eventTrigger)
    }
}


function increaseCounter(eventTrigger) {
    eventTrigger.classList.toggle('clicked');
    console.log(eventTrigger);
    const counter = document.getElementById('counterItems');
    let counterNumber = parseInt(document.getElementById('counterItems').textContent);
    counterNumber += 1
    saveCounter(counterNumber);
    counter.innerHTML = counterNumber;
}

function decreaseCounter(eventTrigger) {
    eventTrigger.classList.toggle('clicked')
    const counter = document.getElementById('counterItems');
    let counterNumber = parseInt(document.getElementById('counterItems').textContent);
    counterNumber -= 1
    saveCounter(counterNumber);
    counter.innerHTML = counterNumber;
}


function changeButtonStatus(condition, eventTrigger) {
    if (condition === true) {
        eventTrigger.textContent = 'Agregar al carrito';
    } else if (condition === false) {
        eventTrigger.textContent = 'Quitar del carrito';
    }
}


shoppingCart = [];



function addProduct(eventTrigger) {
    let myId = new Date().getTime();
    let price = eventTrigger.dataset.price;
    let name = eventTrigger.dataset.name;
    let image = eventTrigger.dataset.img;
    let obj = {
        "name": name,
        "price": price,
        "imagen": image,
        "id": myId
    };
    shoppingCart.push(obj);
    console.log(shoppingCart);
    saveShoppingCart();
}


function deleteProduct(eventTrigger) {
    shoppingCart = shoppingCart.filter(function (item) {
        return item.name !== eventTrigger.dataset.name
    })
    console.log(shoppingCart);
    saveShoppingCart();
}


function saveShoppingCart() {
    localStorage.setItem("shoppingCartLS", JSON.stringify(shoppingCart));

}

function saveCounter(counterNumber) {
    localStorage.setItem("firstCounter", counterNumber);
}