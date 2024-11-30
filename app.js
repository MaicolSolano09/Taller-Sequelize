const librosRoutes=require("./routes/libroRoutes");
const usuariosRoutes=require("./routes/usuarioRoutes");
const prestamosRoutes=require("./routes/prestamoRoutes")
const express = require("express");
const dotenv = require("dotenv");
let sequelize = require("./config/db");

require("dotenv").config();
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/api",librosRoutes);
app.use("/api",usuariosRoutes);
app.use("/api",prestamosRoutes)



//solamente para ver si la base de datos anda bien
let startDB = async () => {
  try {
    await sequelize.sync();
    console.log(`Base de Datos Sincronizada`)
    app.listen(port, () => {
      console.log(`El sevidor esta corriendo en el http://localhost: ${port}`);
    });
  } catch (e) {
    console.log(`Error al conectar con la Base de Datos`);
  }
};
startDB();