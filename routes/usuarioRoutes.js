const express=require('express');
let usuarioController=require('../controllers/usuarioController');

let router=express.Router();
router.get('/usuarios',usuarioController.obtenerTodosUsuarios);
router.get('/usuarios/:id',usuarioController.obtenerUsuariosId);
router.post('/usuarios',usuarioController.registrarUsuarios);
router.put('/usuarios/:id',usuarioController.actualizarUsuarios);
router.delete('/usuarios/:id',usuarioController.eliminarUsuarios);


module.exports=router;