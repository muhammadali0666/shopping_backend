const { Router } = require("express")
const {createKalonka, getKalonka, search, deleteKalonka, updateKalonka} = require('../controller/kalonka_ctr')
const {verifyAdmin} = require("../middleware/auth_middleware")
const kalonkaRouter = Router()

kalonkaRouter.post("/create_kalonka", verifyAdmin, createKalonka)
kalonkaRouter.get('/get_kalonka', getKalonka)
kalonkaRouter.delete("/kalonka_delete/:id", verifyAdmin, deleteKalonka)
kalonkaRouter.get("/search_kalonka", search)
kalonkaRouter.put("/update_kalonka/:id", verifyAdmin, updateKalonka)

module.exports = kalonkaRouter