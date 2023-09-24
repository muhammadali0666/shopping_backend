const { Router } = require("express")
const {createComponent, getComponents, deleteComponent, search, updateComponent} = require('../controller/computerComponents_ctr')

const componentRouter = Router()

componentRouter.post("/create_component", createComponent)
componentRouter.get('/get_components', getComponents)
componentRouter.delete("/delete_component/:id", deleteComponent)
componentRouter.get("/search_component", search)
componentRouter.put("/update_component/:id", updateComponent)

module.exports = componentRouter