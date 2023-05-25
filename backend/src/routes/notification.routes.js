import { Router } from "express";
import {
  createNotification,
  getNotifications,
} from "../controllers/notification.controller.js";

const router = Router();

router.get("/get", getNotifications);

router.post("/add", createNotification);

export default router;
