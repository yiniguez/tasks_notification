import express from "express";
import cors from "cors";
import { PORT } from "./config.js";

// Routes
import indexRoutes from "./routes/index.routes.js";
import notificationRoutes from "./routes/notification.routes.js";
import channelRoutes from "./routes/channel.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import userRoutes from "./routes/user.routes.js";
import taskRoutes from "./routes/task.routes.js";
import notificationHistoryRoutes from "./routes/notificationHistory.routes.js";

const app = express();

// Settings
app.set("port", PORT);
app.set("json spaces", 4);

// Middlewares
app.use(
  cors({
    // origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/", indexRoutes);
app.use("/api/channel/", channelRoutes);
app.use("/api/category/", categoryRoutes);
app.use("/api/notification/", notificationRoutes);
app.use("/api/user/", userRoutes);
app.use("/tasks", taskRoutes);
app.use("/api/notificationHistory/", notificationHistoryRoutes);

export default app;
