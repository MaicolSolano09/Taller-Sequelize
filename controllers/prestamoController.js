let prestamoService = require("../services/PrestamoService");

class PrestamoController {
  static async obtenerTodosPrestamos(req, res) {
    try {
      let obtener = await prestamoService.obtenerTodosPrestamos();
      res.json(obtener);
    } catch (e) {
      console.log("Error al obtener el Prestamo:", e);
      res.json({ mensaje: "No se pudieron obtener los Prestamo." });
    }
  }
      static async obtenerPrestamoId(req, res) {
        try {
          let resultado = await prestamoService.obtenerPrestamosId(req.params.id);
          if (!resultado) {
            return res.json({ mensaje: "Prestamo no encontrado" });
          }
          res.json(resultado);
        } catch (e) {
          console.log("Error al obtener el Prestamo por ID:", e);
          res.json({ mensaje: "Error al obtener el Prestamo." });
        }
      }
      static async registrarPrestamos(req, res) {
        try {
          let register = await prestamoService.registrarPrestamos(req.body);
          res.json(register);
        } catch (e) {
          console.log("Error al registrar el prestamo:", e);
          res.json({ mensaje: "Error al registrar el prestamo." });
        }
      }
    
      static async actualizarPrestamos(req, res) {
        try {
          let actualizar = await prestamoService.actualizarPrestamos(
            req.params.id,
            req.body
          );
          if (actualizar == 0) {
            return res.json({ mensaje: "Prestamo no encontrado u no actualizado" });
          } else {
            return res.json({ mensaje: "Prestamo actualizado correctamente" });
          }
        } catch (e) {
          console.log("Error al actualizar el prestamo:", e);
          res.json({ mensaje: "Error al actualizar el prestamo." });
        }
      }
    
      static async eliminarPrestamos(req, res) {
        try {
          let eliminar = await prestamoService.eliminarPrestamos(req.params.id);
          if (eliminar == 0) {
            return res.json({ mensaje: "Prestamo no encontrado o no eliminado" });
          } else {
            return res.json({ mensaje: "Prestamo eliminado correctamente" });
          }
        } catch (e) {
          console.log("Error al eliminar el Prestamo:", e);
          res.json({ mensaje: "Error al eliminar el Prestamo." });
        }
      }
      static async consultarCatalogo(req, res){
        try{
          let result = await prestamoService.consultarCatalogo();
          res.json(result);
        } catch(error) {
          res.json({err: error})
        }
      }
      static async informeLibrosSolicitados(req, res){
        try{
          let result = await prestamoService.informeLibrosSolicitados();
          const contador = result.reduce((acc, prestamo) => {
            acc[prestamo.idLibro] = (acc[prestamo.idLibro] || 0) + 1;
            return acc;
          }, {});
    
          const repetidos = result.filter((prestamo) => contador[prestamo.idLibro] > 1);
    
          res.json(repetidos)
        } catch(error) {
          res.json({err: error})
        }
      }
      static async prestamosRecientes(req, res){
        try{
          let result = await prestamoService.prestamosRecientes();
          res.json(result)
        } catch(error) {
          res.json({err: error})
        }
      }
    }

module.exports = PrestamoController;
