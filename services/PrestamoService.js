let prestamo = require("../models/PrestamoModel");
let Libros=require("../models/LibroModel");
let Usuarios=require("../models/UsuarioModel");
const prestamos = require("../models/PrestamoModel");
const libros = require("../models/LibroModel");

class PrestamoService {
  static async obtenerTodosPrestamos() {
    try{
      let presta = await prestamo.findAll({
        include: [
          {
            model: libros,
            attributes: ["TITULO_LIBRO", "AUTOR"]
          },
          {
            model: Usuarios,
            attributes: ["NOMBRE", "CORREO"]
          }
        ]
      });
      return presta;
    } catch(error) {
      console.log(error);
    }
  }
   static async obtenerPrestamosId(id) {
    try {
      let prest = await prestamo.findByPk(id);
      if (!prest) {
        console.log("prestamo no encontrado");
      } else {
        return prest;
      }
    } catch (e) {
      console.log("error al obtener el prestamo");
    }
  }
  static async registrarPrestamos(datos) {
    try {
      let registrarPrestamo = await prestamo.create(datos);
      return registrarPrestamo;
    } catch (err) {
      console.log(err);
    }
  }
  static async actualizarPrestamos(id, datos) {
    try {
      let actualizar = await prestamo.update(datos, { where: { id } });
      if (actualizar == 0) {
        console.log("no se encontro el prestamo a actualizar");
      } else {
        return actualizar;
      }
    } catch (e) {
      console.log("Error al actualizar");
    }
  }
  static async eliminarPrestamos(id) {
      let eliminar = await prestamo.destroy({ where: { id } });
      if (eliminar == 0) {
        console.log("No se encontro el prestamo a eliminar");
      } else {
        return eliminar;
      }
  }
  static async consultarCatalogo(){
    try{
      let result = await prestamo.findAll({
        include: [
          {
            model: Libros,
            attributes: ["TITULO_LIBRO", "AUTOR", "DISPONIBILIDAD_LIBRO"]
          }
        ],
        attributes: ["ESTADO", "FECHA_DEVOLUCION"]
      })
      return result;
    } catch(error) {
      console.log(error)
    }
  }
  static async informeLibrosSolicitados(req, res){
    try {
        const result = await prestamos.findAll();
        return result;
    } catch (error) {
      console.error(error);
    }
  }
  static async prestamosRecientes(req, res){
    try {
        const result = await prestamos.findAll({
          order: [
            ['FECHA_PRESTAMO', 'DESC']
          ],
        });
        return result;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = PrestamoService;
