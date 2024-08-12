import { Router } from "express";
const router = Router()

router.get("/pay",(requst, response)=>{
    response.send("paying alot of money")
})
export default router;