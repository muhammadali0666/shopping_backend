const { Router } = require("express")
const {createRouter, getRouters, search, deleteRouter, updateRouter} = require('../controller/router_ctr')

const routerRouter = Router()

routerRouter.post("/create_router", createRouter)
routerRouter.get('/get_routers', getRouters)
routerRouter.get("/search_router", search)
routerRouter.delete("/delete_router/:id", deleteRouter)
routerRouter.put("/update_router/:id", updateRouter)

module.exports = routerRouter