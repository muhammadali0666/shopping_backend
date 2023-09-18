const { Router } = require("express")
const {createPult, getPults} = require('../controller/pult_ctr')

const pultRouter = Router()

pultRouter.post("/create_pult", createPult)
pultRouter.get('/get_Pults', getPults)

module.exports = pultRouter