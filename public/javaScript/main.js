
// start landing
let active = document.querySelectorAll(".landing .bullet li");
let pics = document.querySelector(".landing .pics");
let clicked = false;

let i = 1;
active.forEach(el => {
    el.addEventListener("click",(e) => {
        active.forEach(el => {
            el.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        i = parseInt(el.getAttribute("id"))-1;
        pics.style.marginLeft = "-"+(i)+"00%";

        clearInterval(interval);
        setTimeout(function(){
            setInterval(slider,5000);
            console.log("waited")
        },5000);
        clicked = true;        
        i++;
    });
    
});

function slider() {
    active.forEach(el => {
        el.classList.remove("active");
    });
    
    if(i <= 4 ) {
        pics.style.marginLeft = "-"+(i)+"00%";
        active[i].classList.add("active");
        i++;
    }else {
        pics.style.marginLeft = "0%";        
        active[0].classList.add("active");
        i = 1;
    }


}
let interval = setInterval(slider,5000);
// end landing

// start top 
let resnext = document.querySelector(".next.res");
let resprevious = document.querySelector(".previous.res");
let vilnext = document.querySelector(".next.vil");
let vilprevious = document.querySelector(".previous.vil");
let reslist = document.querySelector(".resList");
let villist = document.querySelector(".vilList");
let restaurant = document.querySelectorAll(".topRes .container .resList .box");
let ville = document.querySelectorAll(".topVil .container .vilList .box");

let j = 0;

resnext.onclick = function() {
        
        if(j >= 0) {
            resprevious.style.display = "flex";
        }
        if(j < 4){        
            j++;   
        reslist.style.marginLeft = "-" + (j*50) + "%";         
    }
}
resprevious.onclick = function() {

    if(j >= 1){
        j--;
        reslist.style.marginLeft = "-" +((j)*50) + "%";
}    
    if(j < 1) {
        resprevious.style.display = "none";


    }
}
let k = 0;

vilnext.onclick = function() {    
   
    if(k >= 0) {
        vilprevious.style.display = "flex"
    }
    if(k < 4){
        k++;
        villist.style.marginLeft = "-" + (k*50) + "%";
}
}
vilprevious.onclick = function() {

    if(k >= 1){
        k--;
        villist.style.marginLeft = "-" +((k)*50) + "%";
}    
    if(k < 1) {
        vilprevious.style.display = "none";
    }
}

restaurant.forEach(el => {  
    el.onclick = function() {
        window.location.href = ("../html/restaurantDetails.html");
    }
});
ville.forEach(el => {  
    el.onclick = function() {
        window.location.href = ("../html/villeDetails.html");
    }
});
// end top 

    // restaurateur 
        document.querySelector(".restaurateur button").onclick = function() {
            window.location.href = ("/Inscription");
        }
    // restaurateur 