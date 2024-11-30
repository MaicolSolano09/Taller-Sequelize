let libroService = require("../services/LibroService");

class LibrosController {
  static async obtenerLibros(req, res) {
    try {
      let librito = await libroService.obtenerLibros();
      res.json(librito);
    } catch (e) {
      console.log("Error al obtener los libros:", e);
      res.json({ mensaje: "No se pudieron obtener los libros." });
    }
  }
    
  static async obtenerLibrosId(req, res) {
    try {
      let resultado = await libroService.obtenerLibrosId(req.params.id);
      if (!resultado) {
        return res.json({ mensaje: "Libro no encontrado" });
      }
      res.json(resultado);
    } catch (e) {
      console.log("Error al obtener el libro por ID:", e);
      res.json({ mensaje: "Error al obtener el libro." });
    }
  }

  static async registrarLibros(req, res) {
    try {
      let register = await libroService.registrarLibros(req.body);
      res.json(register);
    } catch (e) {
      console.log("Error al registrar el libro:", e);
      res.json({ mensaje: "Error al registrar el libro." });
    }
  }

  static async actualizarLibros(req, res) {
    try {
      let actualizar = await libroService.actualizarLibros(
        req.params.id,
        req.body
      );
      if (actualizar == 0) {
        return res.json({ mensaje: "Libro no encontrado o no actualizado" });
      } else {
        return res.json({ mensaje: "Libro actualizado correctamente" });
      }
    } catch (e) {
      console.log("Error al actualizar el libro:", e);
      res.json({ mensaje: "Error al actualizar el libro." });
    }
  }

  static async eliminarLibros(req, res) {
    try {
      let eliminar = await libroService.eliminarLibros(req.params.id);
      if (eliminar == 0) {
        return res.json({ mensaje: "Libro no encontrado o no eliminado" });
      } else {
        return res.json({ mensaje: "Libro eliminado correctamente" });
      }
    } catch (e) {
      console.log("Error al eliminar el libro:", e);
      res.json({ mensaje: "Error al eliminar el libro." });
    }
  }
  static async obtenerCatalogo(req, res) {
    try {
      const librosDE = await libroService.obtenerCatalogo();
      res.json(librosDE);
    } catch (error) {
      res.json(error);
    }
  }

  static async obtenerLibrosNoDisponibles(req, res) {
    try {
      const librosNoDisponibles = await libroService.obtenerLibrosNoDisponibles();
      res.json(librosNoDisponibles);
    } catch (error) {
      res.json(error);
    }
  }
  
}

module.exports = LibrosController;
