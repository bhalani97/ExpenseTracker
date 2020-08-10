
module.exports = {
  async create(userid, account) {
    try {
      account.owner = userid;
      console.log("reqcpming");
      console.log(account)
      const acc = await Account.create(account).fetch();
    
      if (acc) {
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async getAccount(userId){
    try{

console.log(userId)      
const data  = await Account.find({owner:userId}).sort("createdAt DESC")
      return data
    }
    catch(error){
      console.log(error)
    }
  }
};
