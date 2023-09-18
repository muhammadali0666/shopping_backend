const { Router } = require("express")
const {createMonitor, getMonitors} = require('../controller/monitor_ctr')

const monitorRouter = Router()

monitorRouter.post("/create_monitor", createMonitor)
monitorRouter.get('/get_monitors', getMonitors)

module.exports = monitorRouter