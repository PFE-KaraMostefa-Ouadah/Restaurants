const express = require("express")
const router = express.Router()
const user = require("../models/user")

router.get("/Nouveau", (req, res) => {
    res.render("html/Nouveau",{title : "Nouveauté", css : "nouveaux",user : new user()})
})
module.exports = router