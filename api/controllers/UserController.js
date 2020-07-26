/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    async register(req,resp){
        try{
            const {username,password} = req.allParams()
            const user =await  User.create({username:username,password:password}).fetch()
            if(user){
                resp.ok({msg:"created"})
            }
        }
        catch(err){
            resp.serverError(err)
        }
    }

};

