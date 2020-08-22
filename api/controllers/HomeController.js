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
data = _.groupBy(data,'fromaccount.name')
let balance = []
_.map(data,(d,name)=>{

    let credit = 0
    let debit = 0
    _.map(d,trans=>{

        if(trans.type==='credit'){
credit=credit+trans.amount
        }
        else if(trans.type==='debit'){
debit=debit+trans.amount

        }
    })
    balance.push({name,balance:credit-debit})

})
      return resp.ok(balance);
    } catch (error) {
      resp.serverError(error);
    }
  },
};
