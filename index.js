const express = require("express");
require("dotenv").config()
const app = express();
const PORT = process.env.port || 8080;
const { dbConnection } = require("./config/config")

const cors = require("cors")

app.use(express.json())
app.use(cors());

dbConnection()

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));