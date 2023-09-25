const { Router } = require("express")
const {createMouse, getMouses, deleteMouse, search, updateMouse} = require('../controller/mouse_ctr')
const {verifyAdmin} = require("../middleware/auth_middleware")
const mouseRouter = Router()

mouseRouter.post("/create_mouse", verifyAdmin, createMouse)
mouseRouter.get('/get_mouses', getMouses)
mouseRouter.get("/search_mouse", search)
mouseRouter.delete("/delete_mouse/:id", verifyAdmin, deleteMouse)
mouseRouter.put("/update_mouse/:id", verifyAdmin, updateMouse)

module.exports = mouseRouter