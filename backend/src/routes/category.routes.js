import { Router } from "express";
import {
  getCategories,
} from "../controllers/category.controller.js";

const router = Router();

router.get("/get", getCategories);

export default router;
