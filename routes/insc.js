const express = require("express")
const router = express.Router()
const user = require("../models/user")

router.get("/Inscription", (req, res) => {
    res.render("html/Inscription",{user : new user(), title : "Inscription à _____", css : "inscription"})
})
module.exports = router