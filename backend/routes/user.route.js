import express from "express"
import { signup } from "../Controllers/User.Controllers.js"
import { validateUser } from "../Controllers/User.Controllers.js"
import { login } from "../Controllers/User.Controllers.js"
const router = express.Router()


router.post("/signup",validateUser,signup)
router.post("/login",login)
export default router