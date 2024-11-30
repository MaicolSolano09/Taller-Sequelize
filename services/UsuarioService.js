const prestamos = require('../models/PrestamoModel');
let usuario=require('../models/UsuarioModel')

class UsuariosService {
  static async obtenerTodosUsuarios() {
    try {
      let obtUsuarios = await usuario.findAll(); 
      return obtUsuarios;
    } catch (e) {
      console.log(e);
    }
  }
  static async obtenerUsuariosId(id) {
    try {
      let user = await usuario.findByPk(id);
      if (!user) {
        console.log("Usuario no encontrado");
      } else {
        return user;
      }
    } catch (e) {
      console.log("error al obtener el Usuario");
    }
  }
  static async registrarUsuarios(datos) {
    try {
      let crearU = await usuario.create(datos); 
      return crearU;
    } catch (e) {
      console.log(e);
    }
  }
  static async actualizarUsuarios(id, datos) {
    try {
      let actualizar = await usuario.update(datos, { where: { id } });
      if (actualizar == 0) {
        console.log("no se encontro el usuario a actualizar");
      } else {
        return actualizar;
      }
    } catch (e) {
      console.log("Error al actualizar");
    }
  }
  static async eliminarUsuarios(id) {
      let eliminar = await usuario.destroy({ where: { id } });
      if (eliminar == 0) {
        console.log("No se encontro el usuario a eliminar");
      } else {
        return eliminar;
      }
  }
}

module.exports=UsuariosService;