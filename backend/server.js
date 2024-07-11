
import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/authroutes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8000
app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.use("/api/auth", authRoutes)

app.get("/api/auth/signup", (req, res) => {
    console.log("signup route")
})

app.get("/api/auth/login", (req, res) => {
    console.log("login route")
})

app.get("/api/auth/logout", (req, res) => {
    console.log("logout route")
})

app.listen(PORT, () => {
    connectToMongoDB()
});