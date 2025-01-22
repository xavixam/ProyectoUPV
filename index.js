const express = require("express");
require("dotenv").config()
const app = express();
const PORT = process.env.port || 8080;
const { dbConnection } = require("./config/config")

const cors = require("cors")

app.use(express.json())
app.use(cors());

app.use("/lotes",require("./routes/lote"))
app.use("/dniVerificados",require("./routes/dniVerificado"))
app.use("/fases",require("./routes/fase"))
app.use("/fotos",require("./routes/foto"))
app.use("/historiales",require("./routes/historial"))
app.use("/padres",require("./routes/padre"))
app.use("/tipos",require("./routes/tipo"))

dbConnection()

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));