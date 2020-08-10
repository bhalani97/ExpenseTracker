/**
 * Account.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const { userWiseSocketIds } = require("../services/common");
const Account = require("../services/Account");

module.exports = {

  attributes: {

  name: {
      type: "string",
    },
    balance: {
      type: "number",
    },
    type: {
      type: "string",
    },
    owner: {
      model: "user",
      required:true
    },
  },
  async afterCreate(entry, cb) {
    console.log(JSON.stringify(entry))
    const socketIds = userWiseSocketIds(entry.owner)
    const data =await Account.getAccount(entry.owner)
    console.log(JSON.stringify(data))
    console.log(entry.owner)
    console.log("Connected"+JSON.stringify(socketIds))
      _.each(socketIds, function (socketId) {
        console.log('Emitted TO'+socketId)
              sails.io.to(socketId).emit("account", {
                data 
              }); //broadcast to all listeners
              
            });
    cb();
    },

};

