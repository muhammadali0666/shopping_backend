const { Router } = require("express")
const {createMouse, getMouses, deleteMouse, search, updateMouse} = require('../controller/mouse_ctr')

const mouseRouter = Router()

mouseRouter.post("/create_mouse", createMouse)
mouseRouter.get('/get_mouses', getMouses)
mouseRouter.get("/search_mouse", search)
mouseRouter.delete("/delete_mouse/:id", deleteMouse)
mouseRouter.put("/update_mouse/:id", updateMouse)

module.exports = mouseRouter