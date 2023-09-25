const { Router } = require("express");
const {
  createMonitor,
  getMonitors,
  deleteMonitor,
  search,
  updateMonitor,
} = require("../controller/monitor_ctr");
const { verifyAdmin } = require("../middleware/auth_middleware");
const monitorRouter = Router();

monitorRouter.post("/create_monitor", verifyAdmin, createMonitor);
monitorRouter.get("/get_monitors", getMonitors);
monitorRouter.get("/search_monitor", search);
monitorRouter.delete("/delete_monitor/:id", verifyAdmin, deleteMonitor);
monitorRouter.put("/update_monitor/:id", verifyAdmin, updateMonitor);

module.exports = monitorRouter;
