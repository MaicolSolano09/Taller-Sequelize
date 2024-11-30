//para establecer lo que tienen las tabla de la base de datos
let DataTypes = require("sequelize");
let sequelize = require("../config/db");

let usuarios = sequelize.define(
  "usuarios",
  {
    NOMBRE: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CORREO: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    TIPO_USUARIO: {
      type: DataTypes.INTEGER,
      defaultValue: 'usuario', // usuario o administrador
    },
  },
  {
    tableName: "usuarios",
    timestamps: false,
  }
);

module.exports = usuarios;
