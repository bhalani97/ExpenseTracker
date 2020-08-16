const { getTranscation } = require("../controllers/TranscationController")


module.exports={
    async create(data){
        const ans = await Transcation.create(data).fetch()
        if(ans){
            return true
        }
    return false
    }, 
    async update(data){
      const {id} = data
      delete data.id
      const ans = await Transcation.updateOne(id).set(data)
      if(ans){
          return true
      }
  return false
  }, 
    async getTranscation(userId){
        try{
    
    console.log(userId)      
    const data  = await Transcation.find({owner:userId}).populate('fromaccount')
          return data
        }
        catch(error){
          console.log(error)
        }
      }
      , 
    async delete(id){
        try{
    console.log(id)      
    const data  = await Transcation.destroyOne({id})
          return data
        }
        catch(error){
          console.log(error)
        }
      }
}