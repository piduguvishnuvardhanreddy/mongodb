import { Budget } from "../models/Budget.js";

// @desc Get budgets
export const getBudgets = async (req, res) => {
  const budgets = await Budget.find();
  res.json(budgets);
};

// @desc Set budget
export const setBudget = async (req, res) => {
  const { category, month, amount } = req.body;
  const budget = new Budget({ category, month, amount });
  const created = await budget.save();
  res.status(201).json(created);
};
