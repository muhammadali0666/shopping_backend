const { Router } = require("express")
const {createKalonka, getKalonka} = require('../controller/kalonka_ctr')

const kalonkaRouter = Router()

kalonkaRouter.post("/create_kalonka", createKalonka)
kalonkaRouter.get('/get_kalonka', getKalonka)

module.exports = kalonkaRouter