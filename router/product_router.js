const { Router } = require("express")
const {createNoubook, getNoutbooks} = require('../controller/product_ctr')

const productRouter = Router()

productRouter.post("/create_noutbook", createNoubook)
productRouter.get('/get_noutbooks', getNoutbooks)

module.exports = productRouter