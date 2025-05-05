import mongoose from "mongoose";

const budgetSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  month: {
    type: String, // e.g., "2025-04"
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
});

export const Budget = mongoose.model("Budget", budgetSchema);
