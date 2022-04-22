let close = document.querySelector(".close");
let search = document.querySelector(".search");
let sr = document.querySelector(".sr");
let recherche = document.querySelectorAll(".recherche");
let notSearch =  document.querySelector(".search .close");
let ul = document.querySelector("ul");
let side = document.querySelector(".side");
let menu = document.querySelectorAll(".menu span")[0];
let inp = document.querySelector(".search input");
let act = document.querySelectorAll(".nrml li:not(:last-child)");
let actsid = document.querySelectorAll(".bt li");
let login = document.querySelectorAll(".login");
let accountForm = document.querySelector(".account form");
let account = document.querySelector(".account");
let closeForm = document.querySelectorAll(".account .close");


close.onclick = function() {
    side.style.cssText = " display : none;";
    document.querySelector(".overlay").style.cssText = "display: none;"

}
menu.onclick = function() {
    side.style.cssText = "display : flex; animation-name:side;animation-duration:.5s";
    document.querySelector(".overlay").style.cssText = "display: block;"
} 
notSearch.onclick = function(e) {
    search.style.cssText = " animation-name:";
}
recherche.forEach(rec => {
    rec.onclick = function() {
    search.style.cssText = "display : flex;";
    sr.style.cssText = "display : block; animation-name:popup;animation-duration:.5s";
    inp.focus();
} 
});
actsid.forEach(el => {
    el.addEventListener("click",(e) => {
        actsid.forEach(el => {
            el.classList.remove("active");
        });
        
        e.currentTarget.classList.add("active");
    });
    
});
login.forEach(el => {el.onclick = function() {
    account.style.cssText = "display : flex;";
    accountForm.style.cssText = "animation-name:popup;animation-duration:.5s";

}});
closeForm.forEach(el => {el.onclick = function() {
    account.style.cssText = " display : none;";
    document.querySelector(".account .n1").style.cssText = " display : none;";
    document.querySelector(".account .n2").style.cssText = " display : none;";
}});
document.querySelector(".n1 .cnct").onclick = function(e) {
    e.preventDefault();
    document.querySelector(".account .n1").style.cssText = " display : none;";
    document.querySelector(".account .n2").style.cssText = " display : flex;";
    document.querySelector(".account .n2 .quest ").style.cssText = " margin-bottom : 40px";
}
document.querySelector(".n2 .cnct").onclick = function(e) {
    e.preventDefault();
    document.querySelector(".account .n2").style.cssText = " display : none; ";
    document.querySelector(".account .n1").style.cssText = " display : flex;";
}
document.querySelectorAll(".closeMini").forEach(el => {el.onclick = function() {
    account.style.cssText = " display : none;";
    document.querySelector(".account .n1").style.cssText = " display : none;";
    document.querySelector(".account .n2").style.cssText = " display : none;";
}});

// end header 

const menuItems = document.querySelectorAll("li a");
const title = document.querySelector("title").innerHTML;



menuItems.forEach(el => {

    el.parentNode.classList.remove("active");
    if(("| "+el.innerHTML) === title) {
        el.parentNode.classList.add("active");
    }
})