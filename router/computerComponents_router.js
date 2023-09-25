const { Router } = require("express")
const {verifyAdmin} = require("../middleware/auth_middleware")
const {createComponent, getComponents, deleteComponent, search, updateComponent} = require('../controller/computerComponents_ctr')

const componentRouter = Router()

componentRouter.post("/create_component", verifyAdmin, createComponent)
componentRouter.get('/get_components', getComponents)
componentRouter.delete("/delete_component/:id", verifyAdmin,  deleteComponent)
componentRouter.get("/search_component", search)
componentRouter.put("/update_component/:id", verifyAdmin, updateComponent)

module.exports = componentRouter