const express = require("express");
const database = require("./database.js")
const routerUser = require("./routes/userRouter")
const routerProduct = require('./routes/productoRouter')
const cors = require("cors")

const app = express();

app.use(express.json());

app.use(cors());
app.use('/api',routerUser);
app.use('/api',routerProduct)

app.listen(3000, () =>console.log("Server Up Port: " + 3000))