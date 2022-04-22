const express = require("express")
const router = express.Router()
const user = require("../models/user")

router.get("/map", (req, res) => {
    res.render("html/map",{title : "Map", css : "map",user : new user()})
})
module.exports = router