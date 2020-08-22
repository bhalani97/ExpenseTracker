module.exports = {
  async getData(userId) {
    console.log(userId);
    let data = await Transcation.find({
      owner: userId,
    }).populate("fromaccount");

    data = _.groupBy(data, "fromaccount.id");
    let balance = [];
    _.map(data, (d, id) => {
      let credit = 0;
      let debit = 0;
      _.map(d, (trans) => {
        if (trans.type === "credit") {
          credit = credit + trans.amount;
        } else if (trans.type === "debit") {
          debit = debit + trans.amount;
        }
      });
      balance.push({ id, balance: credit - debit });
    });
    // console.log(balance);
    let bal = [];
    let account = await Account.find({ owner: userId });

    _.map(account, (data) => {
      let match = false;
      _.map(balance, (b) => {
        if (b.id === data.id) {
          bal.push({ name: data.name, balance: b.balance + data.balance });
          match = true;
          return;
        }
      });
      if (!match) {
        bal.push({ name: data.name, balance: data.balance });
      }
    });

    return bal;
  },
};
