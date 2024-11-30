let DataTypes = require("sequelize");
let sequelize = require("../config/db");
let Libro = require("./LibroModel");
let Usuario = require("./UsuarioModel");

let prestamos = sequelize.define(
  "prestamos",
  {
    FECHA_PRESTAMO: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, // asigna la fecha y hora actuales por defecto
    },
    FECHA_DEVOLUCION: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    ID_LIBRO: {
      type: DataTypes.INTEGER,
      references: {
        model: Libro,
        key: "id",
      },
    },
    ID_USUARIO: {
      type: DataTypes.INTEGER,
      references: {
        model: Usuario,
        key: "id",
      },
    },
    ESTADO:{
      type:DataTypes.ENUM("Disponible", "Prestado", "Reservado"),
      allowNull: false,
      defaultValue: "Disponible",
    },
  },
  {
    tableName: "prestamos",
    timestamps: false,
  }
);

// Definir relaciones (si se desea)
prestamos.belongsTo(Libro, { foreignKey: "ID_LIBRO" });
prestamos.belongsTo(Usuario, { foreignKey: "ID_USUARIO" });

module.exports = prestamos;
