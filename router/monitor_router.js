const { Router } = require("express")
const {createMonitor, getMonitors, deleteMonitor, search, updateMonitor} = require('../controller/monitor_ctr')

const monitorRouter = Router()

monitorRouter.post("/create_monitor", createMonitor)
monitorRouter.get('/get_monitors', getMonitors)
monitorRouter.get("/search_monitor", search)
monitorRouter.delete("/delete_monitor/:id", deleteMonitor)
monitorRouter.put("/update_monitor/:id", updateMonitor)

module.exports = monitorRouter