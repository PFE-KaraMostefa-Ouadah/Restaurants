
let restaurant = document.querySelectorAll(".box");

restaurant.forEach(el => {  
    el.onclick = function() {
        window.location.href = ("/villeDetails");
    }
});
    // restaurateur 
    document.querySelector(".restaurateur button").onclick = function() {
        window.location.href = ("/Inscription")
    }
// restaurateur 
