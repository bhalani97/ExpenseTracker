const { getTranscation } = require("../controllers/TranscationController");

module.exports = {
  async create(data) {
    const ans = await Transcation.create(data).fetch();
    if (ans) {
      return true;
    }
    return false;
  },
  async update(data) {
    const { id } = data;
    delete data.id;
    const ans = await Transcation.updateOne(id).set(data);
    if (ans) {
      return true;
    }
    return false;
  },
  async getTranscation(da) {
    try {
      const { userId, pageNo, filter } = da;
      // console.log(userId);
      const transcationFilter = {}
      transcationFilter.skip = (pageNo-1)*10
      transcationFilter.limit = 10
      transcationFilter.where = {owner :userId}
      console.log(pageNo)
      const d = await Transcation.find(transcationFilter).populate(
        "fromaccount"
      ).sort("date DESC");
      return d;
    } catch (error) {
      console.log(error);
    }
  },
  async delete(id) {
    try {
      console.log(id);
      const data = await Transcation.destroyOne({ id });
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
