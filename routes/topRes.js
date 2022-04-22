const express = require("express")
const router = express.Router()
const user = require("../models/user")
const bcrypt = require("bcryptjs") 
const jwt = require("jsonwebtoken")


//all restaurants
router.get("/TopRestaurants", (req, res) => {
    res.render("html/TopRestaurants",{user : new user(), title : "Top Restaurants", css : "TopRestaurant"})
})






module.exports = router