const { Router } = require("express")
const {createPrinter, getPrinters,search, deletePrinter, updatePrinter} = require('../controller/printer_ctr')
const { verifyAdmin } = require("../middleware/auth_middleware")

const printerRouter = Router()

printerRouter.post("/create_printer", verifyAdmin, createPrinter)
printerRouter.get('/get_printers', getPrinters)
printerRouter.get("/search_printer", search)
printerRouter.delete("/delete_printer/:id", verifyAdmin, deletePrinter)
printerRouter.put("/update_printer/:id", verifyAdmin, updatePrinter)

module.exports = printerRouter