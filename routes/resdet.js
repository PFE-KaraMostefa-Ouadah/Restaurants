const express = require("express")
const router = express.Router()
const user = require("../models/user")


router.get("/restaurantDetails", (req, res) => {
    res.render("html/restaurantDetails", {title : "Nouveauté",css : "restaurantDetails",user : new user()})
})
module.exports = router