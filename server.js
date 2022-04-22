if(process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}

const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");
const passport = require("passport");
const flash = require("express-flash")
const session = require("express-session")



const initializepassport = require("./passport-config");
initializepassport(passport, email => users.find( user.email === email));


//connect to mongodb
const dbURI = "mongodb+srv://ouadah:eML3Z6vJIdauiWWH@restaurantspfe.g8xwm.mongodb.net/pfe?retryWrites=true&w=majority";

const user = require("./models/user")


const indexRouter = require("./routes/index")
const restaurantRouter = require("./routes/topRes")
const destinationtRouter = require("./routes/topdes")
const insctRouter = require("./routes/insc")
const mapRouter = require("./routes/map")
const nouvRouter = require("./routes/nouv")
const resdetRouter = require("./routes/resdet")
const toutcomRouter = require("./routes/toutcom")
const vildetRouter = require("./routes/vildet")
// const authRouter = require("./routes/auth")

app.set("view engine" , "ejs")
app.set("views" , __dirname +"/views")
app.set("layout" , "layouts/layout")
app.use(expressLayouts)
app.use(express.static("public"))
app.use(flash())
app.use(session( {
    secret : process.env.SESSION_SECRET,
    resave : false,
    saveUninitialized : false
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(bodyParser.urlencoded({limit : '10mb', extended : false}))





const mongoose = require("mongoose")
mongoose.connect(dbURI ,{useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(process.env.PORT || 3000))
    .catch((err) => console.log(err));


// app.use("/" , authRouter)
app.use("/" , indexRouter)
app.use("/" , restaurantRouter)
app.use("/" , destinationtRouter)
app.use("/" , insctRouter)
app.use("/" , mapRouter)
app.use("/" , nouvRouter)
app.use("/" , resdetRouter)
app.use("/" , toutcomRouter)
app.use("/" , vildetRouter)


app.post("/",passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect : "/",
    failureFlash : true
}))


// app.get("/html/topRestaurants",(res,req) => {
//     res.render("/topRestaurants")
// })


