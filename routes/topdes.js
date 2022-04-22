const express = require("express")
const router = express.Router()
const user = require("../models/user")

router.get("/topDestination", (req, res) => {
    res.render("html/topDestination",{title : "Villes", css : "Destinations",user : new user()})
})
module.exports = router