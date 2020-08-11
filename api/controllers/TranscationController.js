/**
 * TranscationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


const TranscationService = require('../services/transcation')
module.exports = {
  async create(req,resp){
      try{
        const data = req.allParams()
        if(await TranscationService.create(data)){
            return resp.ok({message:"Created"})
        }
        return resp.badRequest()
      }
      catch(error){
          resp.serverError(error)
      }
    
  },
  async getTranscation(req,resp){
    try{
      const {userid} = req.allParams()

      const data = await TranscationService.getTranscation(userid)
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

