import express from "express";
import { getBudgets, setBudget } from "../controllers/budgetController.js";

const router = express.Router();

router.route("/")
  .get(getBudgets)
  .post(setBudget);

export default router;
