const passport = require("passport");
const cipher = require("../api/models/services/cipher");
const { use } = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const _onLocalStrategyAuth = async (username, password, next) => {
  console.log(username);
  console.log(password);
  const user = await User.findOne({ username: username });
  if(!user) return  next(null,null,{message:"Usernot Found"})
  if(user.password!==password){
    return  next(null,null,{message:"Invalid Password"})
  }
 next
 (null,user,{})
};

module.exports = {
  passport: {
    async onPassportAuth(req, res, error, user, info) {
        if(error || !user) {
            return res.forbidden(error||user,{ message: info && info.message ? info.message : "Login"})
        }
        const token = cipher.createToken(user)
        console.log(cipher.verifyToken(token))
        return res.ok({token})
    },
  },
};
passport.use(new LocalStrategy(_onLocalStrategyAuth));
