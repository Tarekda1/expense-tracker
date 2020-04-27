//@desc Get all transactions
//@route GET /api/v1/transactions
//@access Public
exports.getTransactions = (req, res, next) => {
  res.send("Get Transactions");
};

//@desc Add A transactions
//@route POST /api/v1/transactions
//@access Public
exports.addTransaction = (req, res, next) => {
  res.post("Add Transaction");
};

//@desc Add A transactions
//@route DELETE /api/v1/transactions/:id
//@access Public
exports.deleteTransaction = (req, res, next) => {
  res.send("Delete Transaction");
};
