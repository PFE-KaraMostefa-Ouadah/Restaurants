const express = require("express")
const router = express.Router()
const user = require("../models/user")


router.get("/villeDetails", (req, res) => {
    res.render("html/villeDetails",{title : "N/A", css : "villeDetails",user : new user()})
})
module.exports = router