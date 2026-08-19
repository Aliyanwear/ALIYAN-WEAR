// ALIYAN WEAR Constructor

let selectedColor = "white";
let selectedStyle = "Oversize";
let selectedSize = "M";
let currentSide = "front";

let frontDesign = "";
let backDesign = "";

const priceRussia = 2490;
const priceTajikistan = 259;

function updateTshirtImage() {
    const tshirt = document.getElementById("tshirtImage");

    if (selectedSide === "front") {
        if (selectedColor === "white") {
            tshirt.src = "tshirt-white.PNG";
        } else {
            tshirt.src = "tshirt-black.PNG";
        }
    }

    if (selectedSide === "back") {
        if (selectedColor === "white") {
            tshirt.src = "tshirt-white-back.PNG";
        } else {
            tshirt.src = "tshirt-black-back.PNG";
        }
    }
}


// выбор цвета футболки
function changeColor(color, button){

    selectedColor = color;

    document.querySelectorAll(".color-button").forEach(btn=>{
        btn.classList.remove("selected");
    });

    button.classList.add("selected");

    updateTshirtImage();
}

function changeSide(side, button){

    selectedSide = side;

    document.querySelectorAll(".side-button").forEach(btn=>{
        btn.classList.remove("selected");
    });

    button.classList.add("selected");

    updateTshirtImage();
}


    
    
    

// выбор стиля
function changeStyle(style,event){

    selectedStyle = style;

    document.querySelectorAll(".style-button").forEach(btn=>{
        btn.classList.remove("selected");
    });

        event.classList.add("selected");

    console.log(
        "Стиль:",
        selectedStyle
    );
}




// выбор размера
function changeSize(size, button){

    selectedSize = size;

    document.querySelectorAll(".size-button").forEach(btn=>{
        btn.classList.remove("selected");
    });

    button.classList.add("selected");

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

const design = document.getElementById("designPreview");

let isMoving = false;
let startX;
let startY;
let startLeft = 0;
let startTop = 0;

design.addEventListener("pointerdown", function(e){

    isMoving = true;

    startX = e.clientX;
    startY = e.clientY;

    startLeft = design.offsetLeft;
    startTop = design.offsetTop;

    design.setPointerCapture(e.pointerId);

});


design.addEventListener("pointermove", function(e){

    if(!isMoving) return;

    let x = startLeft + (e.clientX - startX);
    let y = startTop + (e.clientY - startY);

    design.style.left = x + "px";
    design.style.top = y + "px";

});


design.addEventListener("pointerup", function(){

    isMoving = false;

});



let scale = 1;
let startDistance = 0;


design.addEventListener("touchstart", function(e){

    if(e.touches.length === 2){

        startDistance = getDistance(
            e.touches[0],
            e.touches[1]
        );

    }

});


design.addEventListener("touchmove", function(e){

    if(e.touches.length === 2){

        let distance = getDistance(
            e.touches[0],
            e.touches[1]
        );


        let zoom = distance / startDistance;


        scale = scale * zoom;


        if(scale < 0.5){
            scale = 0.5;
        }


        if(scale > 3){
            scale = 3;
        }


        design.style.width = 
        (120 * scale) + "px";


        startDistance = distance;

    }

});


function getDistance(a,b){

    let x = a.clientX - b.clientX;
    let y = a.clientY - b.clientY;

    return Math.sqrt(x*x+y*y);

}

function switchSide(side, button){

    currentSide = side;

    document.querySelectorAll(".side-button").forEach(btn=>{
        btn.classList.remove("selected");
    });

    button.classList.add("selected");

    console.log("Тараф:", currentSide);
}






