// ALIYAN WEAR Constructor

let selectedColor = "white";
let selectedStyle = "Oversize";
let selectedSize = "M";

const priceRussia = 2490;
const priceTajikistan = 259;


// выбор цвета футболки
function changeColor(color){

    selectedColor = color;

    const tshirt = document.querySelector(".tshirt");

    if(color === "black"){
        tshirt.style.background =
        "linear-gradient(145deg,#111,#333)";
    }
    else{
        tshirt.style.background =
        "linear-gradient(145deg,#ffffff,#dddddd)";
    }

}


// выбор стиля
function changeStyle(style){

    selectedStyle = style;

    console.log(
        "Стиль:",
        selectedStyle
    );

}


// выбор размера
function changeSize(size){

    selectedSize = size;

    console.log(
        "Размер:",
        selectedSize
    );

}


// загрузка дизайна

function uploadDesign(event){

    const file = event.target.files[0];

    if(!file) return;


    const reader = new FileReader();


    reader.onload = function(e){

        const tshirt =
        document.querySelector(".tshirt");


        tshirt.style.backgroundImage =
        `url(${e.target.result})`;

        tshirt.style.backgroundSize =
        "cover";

    }


    reader.readAsDataURL(file);

}


// создание заказа

function createOrder(){

    let orderNumber =
    Math.floor(10000 + Math.random()*90000);


    alert(
    "Ваш заказ создан!\n\nALIYAN #" 
    + orderNumber
    );


    localStorage.setItem(
        "order",
        "ALIYAN #" + orderNumber
    );

}
