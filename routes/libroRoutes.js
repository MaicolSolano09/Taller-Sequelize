const express=require('express');
let libroController=require('../controllers/libroController');

let router=express.Router();
router.get('/libros',libroController.obtenerLibros);
router.get('/libros/:id',libroController.obtenerLibrosId);
router.post('/libros',libroController.registrarLibros);
router.put('/libros/:id',libroController.actualizarLibros);
router.delete('/libros/:id',libroController.eliminarLibros);


module.exports=router;