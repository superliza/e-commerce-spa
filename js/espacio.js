function getLivingRoomItems(params) {

    var livingRoomURL = ["https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=sofa&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x",
        "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=bookcase&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x",
        "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=lamp&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x",
        "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=bar+stool&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x",
        "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=bar%20cart&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x",
        "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=ottoman&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x"
    ]

livingRoomURL.forEach(url => {
    fetch(url)
    .then(function (response) {
        response.json().then(function (data) {
            data.items.forEach(element => {
                console.log(element);
                
            });
        })
    })
});
}


getLivingRoomItems();
$(document).ready(function () {


    fetch("https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=storages&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x")
        .then(function (response) {
            response.json().then(function (data) {
                data.items.forEach(element => {
                    console.log(element);
                });
            })
        })




    var array2 = dataPictures.livingroom.sofa
    var imgsrc = "";
    console.log(array2);
    var template = `<img src="${imgsrc}"></img>`
    console.log(array2[1][1])
    $.each(array2, function (index, value) {
        value.forEach(element => {
            var DOM_img = document.createElement("img");
            DOM_img.src = element
            document.body.appendChild(DOM_img);
        });
    });

}); //End function ready

``