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
if (process.env.NODE_ENV === "production") {
    const path = require("path");
    app.use(express.static(path.resolve(__dirname, 'client', 'build')));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'),function (err) {
            if(err) {
                res.status(500).send(err)
            }
        });
    })
}
app.listen(port, () => "server is running on port ")