const { Router } = require("express")
const {createKalonka, getKalonka, search, deleteKalonka, updateKalonka} = require('../controller/kalonka_ctr')

const kalonkaRouter = Router()

kalonkaRouter.post("/create_kalonka", createKalonka)
kalonkaRouter.get('/get_kalonka', getKalonka)
kalonkaRouter.delete("/kalonka_delete/:id", deleteKalonka)
kalonkaRouter.get("/search_kalonka", search)
kalonkaRouter.put("/update_kalonka/:id", updateKalonka)

module.exports = kalonkaRouter