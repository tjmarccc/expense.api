import express from "express";
import {
  createExpense,
  getExpenses,
  getExpense,
  updateExpense,
  deleteExpense
} from "../contollers/expense_Controllers.js";

const router = express.Router();

router.post("/", createExpense);
router.get("/", getExpenses);
router.get("/:id", getExpense);
router.put("/:id", updateExpense);
router.delete("/:id", deleteExpense);

export default router;
