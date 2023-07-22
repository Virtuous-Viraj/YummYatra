const express = require("express");

const db = require("./db")
require('dotenv').config()
const app = express();
let cors = require("cors");
app.use(express.json());
app.use(cors());


const pizzaRoute = require("./routes/pizzasRoute")
const userRoute = require("./routes/userRoute")
const orderRoute = require("./routes/orderRoute")

app.use("/api/pizzas/", pizzaRoute)
app.use('/api/users/' , userRoute)
app.use('/api/orders/' , orderRoute)

app.get("/", (req, res) =>{
    res.send("Server is ready on port : "+ port);
})

const port = process.env.PORT || 5000;

app.listen(port, () => "server is running on port ")