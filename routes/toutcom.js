const express = require("express")
const router = express.Router()
const user = require("../models/user")


router.get("/tousComment", (req, res) => {
    res.render("html/tousComment",{title : "N/A", css : "restaurantDetails",user : new user()})
})
module.exports = router