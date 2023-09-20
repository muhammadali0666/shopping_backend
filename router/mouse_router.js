const { Router } = require("express")
const {createMouse, getMouses} = require('../controller/mouse_ctr')

const mouseRouter = Router()

mouseRouter.post("/create_mouse", createMouse)
mouseRouter.get('/get_mouses', getMouses)

module.exports = mouseRouter