import app from "./app.js";
import "./database.js";
import { PORT } from "./config.js";
import "./libs/initialEnumsData.js";
import "./libs/initialUserData.js";
import "./libs/initialTaskData.js";
//import "./libs/initialNotificationData.js";

app.listen(PORT);
console.log("Server on port", app.get("port"));
