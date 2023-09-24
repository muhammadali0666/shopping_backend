const { Router } = require("express")
const {createPrinter, getPrinters,search, deletePrinter, updatePrinter} = require('../controller/printer_ctr')

const printerRouter = Router()

printerRouter.post("/create_printer", createPrinter)
printerRouter.get('/get_printers', getPrinters)
printerRouter.get("/search_printer", search)
printerRouter.delete("/delete_printer/:id", deletePrinter)
printerRouter.put("/update_printer/:id", updatePrinter)

module.exports = printerRouter