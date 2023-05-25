import { Router } from "express";
import {
  getNotificationHistory,
  createNotificationHistory,
} from "../controllers/notificationHistory.controller.js";

const router = Router();

router.get("/get", getNotificationHistory);

router.post("/add", createNotificationHistory);

export default router;
