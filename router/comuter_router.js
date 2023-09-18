const { Router } = require("express")
const {createComputer, getComuters} = require('../controller/computer_ctr')

const computerRouter = Router()

computerRouter.post("/create_computer", createComputer)
computerRouter.get('/get_computers', getComuters)

module.exports = computerRouter