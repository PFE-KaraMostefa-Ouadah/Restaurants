const express = require("express")
const router = express.Router()
const user = require("../models/user")
const bcrypt = require("bcryptjs") 
const jwt = require("jsonwebtoken")

router.get("/", (req, res) => {
    res.render("index",{user : new user(), title : "Home", css: "main"})
})

// router.get("/", (res, req) => {
//     user.find()
//         .then((result) => {
//             req.render("index", {user : new user(), title : "Accueil", users : result, css: "main"})
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// })



// router.post("/" , (res , req) => {
//     const useer =  new user({
//         nom : res.body.name,
//         prenom : res.body.prenom,
//         email : res.body.email,
//         mdp : res.body.mdp
//     })
//     useer.save()
//         .then((result) => {
//             req.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         });
    
// })

// router.get("/", (res, req) => {
//     user.find()
//         .then((result) => {
//             res.render("/", { users : result})
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// })


module.exports = router
