const { Router } = require("express")
const { authRegister, authLogin } = require("../controller/auth_ctr")

const authRouter = Router()

authRouter.post("/register", authRegister)
authRouter.post("/login", authLogin)
// authRouter.post("/adminLogin", authAdminLogin)


module.exports = authRouter