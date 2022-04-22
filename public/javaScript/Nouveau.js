
// nouveau
let restaurant = document.querySelectorAll(".container .nouvContent .box");

restaurant.forEach(el => {  
    el.onclick = function() {
        window.location.href = ("/restaurantDetails");
    }
});
// nouveau

    // restaurateur 
    document.querySelector(".restaurateur button").onclick = function() {
        window.location.href = ("/Inscription")
    }
// restaurateur 