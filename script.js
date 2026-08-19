// ALIYAN WEAR

let currentLanguage = "ru";


const translations = {

ru:{

title:"ALIYAN WEAR",

subtitle:"Создай свою уникальную футболку",

catalog:"Каталог футболок",

catalogBtn:"Каталог",

designBtn:"Создать свой дизайн",

buy:"Купить",

product:"Oversize T-shirt"

},


tj:{

title:"ALIYAN WEAR",

subtitle:"Футболкаи беназири худро созед",

catalog:"Каталоги футболкаҳо",

catalogBtn:"Каталог",

designBtn:"Дизайни худро созед",

buy:"Харидан",

product:"Футболкаи Oversize"

}

};




function setLanguage(lang){

    currentLanguage = lang;


    document.getElementById("title").innerText =
    translations[lang].title;


    document.getElementById("subtitle").innerText =
    translations[lang].subtitle;


    document.getElementById("catalogTitle").innerText =
    translations[lang].catalog;


    document.getElementById("catalogBtn").innerText =
    translations[lang].catalogBtn;


    document.getElementById("designBtn").innerText =
    translations[lang].designBtn;


    document.querySelector(".product button").innerText =
    translations[lang].buy;


    document.querySelector(".product h3").innerText =
    translations[lang].product;

}