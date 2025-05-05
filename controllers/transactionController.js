import { Transaction } from "../models/Transaction.js";

// @desc Get all transactions
export const getTransactions = async (req, res) => {
  const transactions = await Transaction.find().sort({ date: -1 });
  res.json(transactions);
};

// @desc Create new transaction
export const createTransaction = async (req, res) => {
  const { amount, date, description, category } = req.body;
  const transaction = new Transaction({ amount, date, description, category });
  const created = await transaction.save();
  res.status(201).json(created);
};

// @desc Update transaction
export const updateTransaction = async (req, res) => {
  const { id } = req.params;
  const updated = await Transaction.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
};

// @desc Delete transaction
export const deleteTransaction = async (req, res) => {
  const { id } = req.params;
  await Transaction.findByIdAndDelete(id);
  res.json({ message: "Transaction deleted" });
};
