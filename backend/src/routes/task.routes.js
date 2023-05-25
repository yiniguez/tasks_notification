import { Router } from "express";
import {
  getTasks,getTaskById,createTasks,updateTask,deleteTaskById
} from "../controllers/task.controller.js";

const router = Router();

router.get("/", getTasks);
router.get("/:taskId", getTaskById);
router.post("/", [], createTasks);
router.put("/:taskId", [],  updateTask);
router.delete("/:taskId",[], deleteTaskById);

export default router;
