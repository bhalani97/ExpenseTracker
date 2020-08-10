/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const passport = require("passport");
const _ = require('lodash')
module.exports = {
  async register(req, resp) {
    try {

     const user = req.allParams()
     delete user.confirm
      const u = await User.create(user).fetch();
      if (u) {
        resp.ok({ msg: "created" });
      }
    } catch (err) {
      resp.serverError(err);
    }
  },
  async login(req, resp) {
    try {
        passport.authenticate('local', _.partial(sails.config.passport.onPassportAuth, req, resp))(req, resp);

    } catch (error) {
      resp.serverError(error);
    }
  },
};
