const { Router } = require("express")
const {createRouter, getRouters} = require('../controller/router_ctr')

const routerRouter = Router()

routerRouter.post("/create_router", createRouter)
routerRouter.get('/get_routers', getRouters)

module.exports = routerRouter