//para establecer lo que tienen las tabla de la base de datos
let DataTypes = require("sequelize");
let sequelize = require("../config/db");

let libros = sequelize.define(
  "libros",
  {
    TITULO_LIBRO: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    AUTOR: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    AÑO_PUBLICACION: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    DISPONIBILIDAD_LIBRO:{
        type:DataTypes.BOOLEAN,
        defaultValue: true,
    },
  },
  {
    tableName: "libros",
    timestamps: false,
    
  }
);

module.exports = libros;
