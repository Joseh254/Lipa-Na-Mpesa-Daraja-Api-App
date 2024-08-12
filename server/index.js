
import express from "express"
import pay from "./Routes/PayentRoute.js"

const app = express()

app.use("/api/mpesa",pay)
app.listen(3000, () => {
console.log("server running");
  });