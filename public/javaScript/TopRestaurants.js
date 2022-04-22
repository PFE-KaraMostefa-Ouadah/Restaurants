//rank 
let restaurant = document.querySelectorAll(".rank .bx");

restaurant.forEach(el => {  
    el.onclick = function() {
        window.location.href = ("/restaurantDetails");
    }
});
//rank 
    // restaurateur 
    document.querySelector(".restaurateur button").onclick = function() {
        window.location.href = ("/Inscription")
    }
// restaurateur 