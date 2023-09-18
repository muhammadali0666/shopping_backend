const { Router } = require("express")
const {createComponent, getComponents} = require('../controller/computerComponents_ctr')

const componentRouter = Router()

componentRouter.post("/create_component", createComponent)
componentRouter.get('/get_components', getComponents)

module.exports = componentRouter