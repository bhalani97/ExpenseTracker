/**
 * AccountController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Account = require("../services/Account");
const cipher = require("../services/cipher");


module.exports = {
  async create(req, resp) {
    try {
      const done = await Account.create(
        cipher.getUserId(req.headers["access-token"]),
        req.allParams()
      );
      if (done) {
        resp.ok({ message: "created" });
      } else {
        resp.badRequest();
      }
    } catch (error) {
      resp.serverError(error);
    }
  },
  async getAccount(req,resp){
      try{
        const {userid} = req.allParams()

        const data = await Account.getAccount(userid)
        if(data){
            resp.ok(data)
        }
        else{
            resp.badRequest()
        }
      }
      catch(error){
          resp.serverError(error)
      }
  }
};
