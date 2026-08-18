// ALIYAN WEAR Constructor

let selectedColor = "white";
let selectedStyle = "Oversize";
let selectedSize = "M";

const priceRussia = 2490;
const priceTajikistan = 259;


// выбор цвета футболки
function changeStyle(style,event){

    selectedStyle = style;

    document.querySelectorAll("button").forEach(btn=>{
        btn.classList.remove("selected");
    });

    event.target.classList.add("selected");

    console.log(
        "Стиль:",
        selectedStyle
    );
}
    
    


    if (color === "black") {
        tshirt.src = "tshirt-black.PNG";
}

document.querySelectorAll("button").forEach(btn=>{
    btn.classList.remove("selected");
});

event.target.classList.add("selected");
}

// выбор стиля
function changeStyle(style,event){

    selectedStyle = style;
    
    document.querySelectorAll(".style button").forEach(btn=>{
    btn.classList.remove("selected");
});

event.target.classList.add("selected");

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

        const design = document.getElementById("designPreview");

design.src = e.target.result;
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

function changeColor(color) {
  const tshirt = document.getElementById("tshirtImage");

  if (color === "white") {
    tshirt.src = "tshirt-white.PNG";
  }

  if (color === "black") {
    tshirt.src = "tshirt-black.PNG";
  }
}
