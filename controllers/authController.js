const user = require("../models/user")
const bcrypt = require("bcryptjs") 
const jwt = require("jsonwebtoken")




const register = (req, res, next ) => {
    bcrypt.hash(req.body.mdp , 10 , function(err , hashedPwd) {
        if(err) {
            res.json({
                error : err
            })
        }
        const useer =  new user({
            nom : req.body.name,
            prenom : req.body.prenom,
            email : req.body.email,
            mdp : hashedPwd
        })
        useer.save()
        .then(user => {
            res.json({
                message : "User Added successfully"
            })
        })
        .catch(error => {
            res.json({
                message : "An Error Occured !"
            })
        });
    })
    
}

// const login = (res, req, next) => {
//     var userName = req.body.logemail
//     var password = req.body.logpwd

//     user.findOne({$or : [{email : userName}]})
//         .then(usr => {
//             if(usr) {
//                 bcrypt.compare(password, usr.mdp, function(err , result) {
//                     if(err) {
//                         res.json({
//                             error : err
//                         })
//                     }
//                     if(result) {
//                         let token = jwt.sign({nom : usr.nom} , "verySecretValue")
//                         res.json({
//                             message : "Login Successful ! " ,
//                             token
//                         })
//                     } else {
//                         res.json({
//                             message : "password does not matched"
//                         })
//                     }
//                 })
//             } else {
//                 res.json({
//                     message : "No user found !"
//                 })
//             }
//         })
// }

module.exports = {
    register
}