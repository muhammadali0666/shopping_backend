const { Router } = require("express")
const {createTablet, getTablets} = require('../controller/tablet_ctr')

const tabletRouter = Router()

tabletRouter.post("/create_tablet", createTablet)
tabletRouter.get('/get_tablets', getTablets)

module.exports = tabletRouter