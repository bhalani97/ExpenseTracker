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
      const { username, password } = req.allParams();
      const user = await User.create({
        username: username,
        password: password,
      }).fetch();
      if (user) {
        resp.ok({ msg: "created" });
      }
    } catch (err) {
      resp.serverError(err);
    }
  },
  async login(req, resp) {
    try {
        console.log(req.allParams())
        passport.authenticate('local', _.partial(sails.config.passport.onPassportAuth, req, resp))(req, resp);

    } catch (error) {
      resp.serverError(error);
    }
  },
};
