const { getTranscation } = require("../controllers/TranscationController")


module.exports={
    async create(data){
        const ans = await Transcation.create(data).fetch()
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
}