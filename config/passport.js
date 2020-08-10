const passport = require("passport");
const cipher = require("../api/services/cipher");
const LocalStrategy = require("passport-local").Strategy;

const _onLocalStrategyAuth = async (username, password, next) => {

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
        return res.ok({token,userid:user.id})
    },
  },
};
passport.use(new LocalStrategy(_onLocalStrategyAuth));
