import express from "express"
import {getBook} from "../Controllers/book.Controllers.js"
import { addBooks } from "../Controllers/book.Controllers.js"
const router = express.Router()

router.get("/getbooks",getBook)
router.post("/addbooks",addBooks)
export default router


