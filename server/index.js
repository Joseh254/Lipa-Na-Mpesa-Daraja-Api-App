
import express from "express"
import pay from "./Routes/PayentRoute.js"
import { config } from "dotenv";
config()
const app = express()
app.use("/api/mpesa",pay)
app.listen(process.env.PORT, () => {
console.log("server running");


  });