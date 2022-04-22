const localStrategy = require("passport-local").Strategy
const bycrypt = require("bcryptjs")


function initialize(passport ,getUserByEmail) {
    const authenticateUser =async (logemail, logpwd, done) => {
        const user = getUserByEmail(logemail);
        if(user == null) {
            return done(null, {message : " no User with that email ! "})
        }
        try {
            if(await bycrypt.compare(logpwd, user.mdp)) {
                return done(null, user)
            } else {
                return done(null, false ,{message : " password does not matched"})
            }
        } catch (e) {
            return done(e)
        }
    }
    passport.use(new localStrategy( {
        usernameField : "logemail" , 
        passwordField : "logpwd"
    }, authenticateUser))
    passport.serializeUser((user , done) => {})
    passport.deserializeUser((id , done) => {})
}


module.exports = initialize;