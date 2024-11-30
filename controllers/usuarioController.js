let usuarioService = require("../services/UsuarioService");
class UsuarioController {

  static async obtenerTodosUsuarios(req, res) {
    try {
      let obtenerU = await usuarioService.obtenerTodosUsuarios();
      res.json(obtenerU);
    } catch (e) {
      console.log("Error al obtener los usuarios:", e);
      res.json({ mensaje: "No se pudieron obtener los usuarios." });
    }
    
  }
  static async obtenerUsuariosId(req, res) {
    try {
      let resultado = await usuarioService.obtenerUsuariosId(req.params.id);
      if (!resultado) {
        return res.json({ mensaje: "Usuario no encontrado" });
      }
      res.json(resultado);
    } catch (e) {
      console.log("Error al obtener el Usuario por ID:", e);
      res.json({ mensaje: "Error al obtener el Usuario." });
    }
  }
static async registrarUsuarios(req, res) {
    try {
        let registerU = await usuarioService.registrarUsuarios(req.body);
        res.json(registerU);
      } catch (e) {
        console.log(e)
      }
    }
    static async actualizarUsuarios(req, res) {
      try {
        let actualizar = await usuarioService.actualizarUsuarios(
          req.params.id,
          req.body
        );
        if (actualizar == 0) {
          return res.json({ mensaje: "Usuario no encontrado u no actualizado" });
        } else {
          return res.json({ mensaje: "Usuario actualizado correctamente" });
        }
      } catch (e) {
        console.log("Error al actualizar el Usuario:", e);
        res.json({ mensaje: "Error al actualizar el Usuario." });
      }
    }
  
    static async eliminarUsuarios(req, res) {
      try {
        let eliminar = await usuarioService.eliminarUsuarios(req.params.id);
        if (eliminar == 0) {
          return res.json({ mensaje: "Usuario no encontrado o no eliminado" });
        } else {
          return res.json({ mensaje: "Usuario eliminado correctamente" });
        }
      } catch (e) {
        console.log("Error al eliminar el Usuario:", e);
        res.json({ mensaje: "Error al eliminar el Usuario." });
      }
    }
}


module.exports = UsuarioController;