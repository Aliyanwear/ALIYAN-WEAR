// ALIYAN WEAR SYSTEM


let language = "ru";


let selectedColor = "white";
let selectedStyle = "Oversize";
let selectedSize = "M";





const text = {


ru:{

hero:
"Премиальные футболки со своим дизайном",

catalog:
"Каталог футболок",

design:
"Создать свой дизайн"

},



tj:{

hero:
"Футболкаҳои премиум бо дизайни худатон",

catalog:
"Каталоги футболкаҳо",

design:
"Дизайни худро созед"

}

};






// ЯЗЫК


function setLanguage(lang){


language = lang;



document.getElementById("heroText").innerText =
text[lang].hero;



document.getElementById("catalogTitle").innerText =
text[lang].catalog;



document.getElementById("designButton").innerText =
text[lang].design;



}







// ЦВЕТ ФУТБОЛКИ


document.querySelectorAll(".color-button")
.forEach(button=>{


button.onclick=function(){


document.querySelectorAll(".color-button")
.forEach(btn=>{
btn.classList.remove("selected");
});



this.classList.add("selected");



if(this.innerText.includes("Белая")){


selectedColor="white";


document.getElementById("tshirtImage").src =
"tshirt-white.PNG";


}



else{


selectedColor="black";


document.getElementById("tshirtImage").src =
"tshirt-black.PNG";


}



};



});







// СТИЛЬ


document.querySelectorAll(".style-button")
.forEach(button=>{


button.onclick=function(){


document.querySelectorAll(".style-button")
.forEach(btn=>{
btn.classList.remove("selected");
});


this.classList.add("selected");


selectedStyle=this.innerText;


};


});








// РАЗМЕР


document.querySelectorAll(".size-button")
.forEach(button=>{


button.onclick=function(){


document.querySelectorAll(".size-button")
.forEach(btn=>{
btn.classList.remove("selected");
});


this.classList.add("selected");


selectedSize=this.innerText;


};


});








// ЗАГРУЗКА ДИЗАЙНА



document.querySelector("input[type=file]")
.addEventListener("change",function(event){


let file =
event.target.files[0];


if(!file)return;



let reader =
new FileReader();



reader.onload=function(e){


document.getElementById("designPreview")
.src=e.target.result;


};



reader.readAsDataURL(file);



});







// СТАРТ


document.querySelector(".style-button")
.classList.add("selected");


document.querySelector(".size-button")
.classList.add("selected");