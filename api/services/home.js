

module.exports = {
 async getData(userId) {
     console.log(userId)
    const transcation = await Transcation.find({
      owner: userId,
    }).populate("fromaccount");
    console.log(transcation);
    return transcation;
  },
};
