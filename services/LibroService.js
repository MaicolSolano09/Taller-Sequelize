let libro=require('../models/LibroModel')

class LibroService {
  static async obtenerLibros() {
    try {
      let libritos = await libro.findAll(); 
      return libritos;
    } catch (e) {
      console.log(e);
    }
  }
  static async registrarLibros(datos) {
    try {
      let registarLibro = await libro.create(datos);
      return registarLibro;
    } catch (err) {
      console.log(err);
    }
  }
  static async obtenerLibrosId(id) {
    try {
      let lib = await libro.findByPk(id);
      if (!lib) {
        console.log("Libro no encontrado");
      } else {
        return lib;
      }
    } catch (e) {
      console.log("error al obtener el Libro");
    }
  }

  static async actualizarLibros(id, datos) {
    try {
      let actualizar = await libro.update(datos, { where: { id } });
      if (actualizar == 0) {
        console.log("no se encontro el Libro a actualizar");
      } else {
        return actualizar;
      }
    } catch (e) {
      console.log("Error al actualizar");
    }
  }
  static async eliminarLibros(id) {
      let eliminar = await libro.destroy({ where: { id } });
      if (eliminar == 0) {
        console.log("No se encontro el Libro a eliminar");
      } else {
        return eliminar;
      }
  }
 
}


module.exports = LibroService;