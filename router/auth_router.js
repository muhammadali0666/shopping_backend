const { Router } = require("express")
const { authRegister, authLogin } = require("../controller/auth_ctr")
const {userValidate} = require("../middleware/auth_validate")

const authRouter = Router()

authRouter.post("/register", userValidate, authRegister)
authRouter.post("/login", authLogin)


module.exports = authRouter