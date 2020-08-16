/**
 * Transcation.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const transcation = require("../services/transcation");
const { userWiseSocketIds } = require("../services/common");

module.exports = {

  attributes: {

     owner:{
       model:"user",
       required:true
     },
     fromaccount:{
       model:"account",
       required:true
     },
     amount:{
       type:"number"
     },
     date:{
       type:"string",
       columnType:'datetime'
     },
     fortype:{
       type:'string',
     },
     detail:{
       type:'string'
     }

   
  },
  async afterCreate(entry, cb) {
    console.log(JSON.stringify(entry))
    const socketIds = userWiseSocketIds(entry.owner)
    const data = await Transcation.findOne({id:entry.id}).populate(
      "fromaccount"
    )
    // console.log(JSON.stringify(data))
    // console.log(entry.owner)
    // console.log("Connected"+JSON.stringify(socketIds))
      _.each(socketIds, function (socketId) {
        console.log('Emitted TO'+socketId)
              sails.io.to(socketId).emit("transcation", {
                data ,
                name:'ADD'
              }); //broadcast to all listeners
              
            });
    cb();
    },
    async afterUpdate(entry,cb){
      console.log(JSON.stringify(entry))
      const socketIds = userWiseSocketIds(entry.owner)
      // const data =await transcation.getTranscation(entry.owner)
      const data = await Transcation.findOne(entry.id).populate(
        "fromaccount"
      )
      // console.log(JSON.stringify(data))
      // console.log(entry.owner)
      console.log("Connected"+JSON.stringify(socketIds))
        _.each(socketIds, function (socketId) {
          console.log('Emitted TO'+socketId)
                sails.io.to(socketId).emit("transcation", {
                  data,
                  name:'UPDATE'
                }); //broadcast to all listeners
                
              });
      cb();
    },
    async afterDestroy(entry,cb){
      console.log(JSON.stringify(entry))
      const socketIds = userWiseSocketIds(entry.owner)
      // const data =await transcation.getTranscation(entry.owner)
      // console.log(JSON.stringify(data))
      // console.log(entry.owner)
      // console.log("Connected"+JSON.stringify(socketIds))
        _.each(socketIds, function (socketId) {
          console.log('Emitted TO'+socketId)
                sails.io.to(socketId).emit("transcation", {
                  data:entry ,
                  name:'DELETE'
                }); //broadcast to all listeners
                
              });
      cb();
    }

};

