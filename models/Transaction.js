import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    default: "Others", // initially default
  },
}, {
  timestamps: true,
});

export const Transaction = mongoose.model("Transaction", transactionSchema);
