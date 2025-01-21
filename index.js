const express = require("express");
require("dotenv").config()
const app = express();
const PORT = process.env.port || 8080;
const { dbConnection } = require("./config/config")

const cors = require("cors")

app.use(express.json())
app.use(cors());

app.use("/lote",require("./routes/lote"))
app.use("/dniVerificado",require("./routes/dniVerificado"))
app.use("/fase",require("./routes/fase"))
app.use("/foto",require("./routes/foto"))
app.use("/historial",require("./routes/historial"))
app.use("/padre",require("./routes/padre"))
app.use("/tipo",require("./routes/tipo"))

dbConnection()

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));