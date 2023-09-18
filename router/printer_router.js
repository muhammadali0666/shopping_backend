const { Router } = require("express")
const {createPrinter, getPrinters} = require('../controller/printer_ctr')

const printerRouter = Router()

printerRouter.post("/create_printer", createPrinter)
printerRouter.get('/get_printers', getPrinters)

module.exports = printerRouter