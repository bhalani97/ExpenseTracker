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
  async update(req,resp){
    try{
      const data = req.allParams()
      console.log(data)
      if(await TranscationService.update(data)){
          return resp.ok({message:"Updated"})
      }
      return resp.badRequest()
    }
    catch(error){
        resp.serverError(error)
    }
  
},

  async delete(req,resp){
    try{
      const {id} = req.allParams()
      console.log(id)
      if(await TranscationService.delete(id)){
          return resp.ok({message:"Deleted"})
      }
      return resp.badRequest()
    }
    catch(error){
        resp.serverError(error)
    }
},
  async getTranscation(req,resp){
    try{
     const data = req.allParams()
      const d = await TranscationService.getTranscation(data)
      if(d){
          resp.ok(d)
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

