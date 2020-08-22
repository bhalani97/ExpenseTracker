/**
 * HomeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const HomeService = require("./../services/home");
const _ = require('lodash');
const transcation = require("../services/transcation");
module.exports = {
 async getData(req, resp) {
    try {
      const { userid } = req.allParams();
      let data =await HomeService.getData(userid);
      return resp.ok(data);
    } catch (error) {
      resp.serverError(error);
    }
  },
};
