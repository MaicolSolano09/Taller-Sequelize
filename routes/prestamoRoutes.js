const express=require('express');
let prestamoController=require('../controllers/prestamoController');

let router=express.Router();

router.get('/prestamos',prestamoController.obtenerTodosPrestamos);
router.get('/prestamos/:id',prestamoController.obtenerPrestamoId);
router.post('/prestamos',prestamoController.registrarPrestamos);
router.put('/prestamos/:id',prestamoController.actualizarPrestamos);
router.delete('/prestamos/:id',prestamoController.eliminarPrestamos);
router.get('/catalogoLibros',prestamoController.consultarCatalogo);
router.get('/informeLibros',prestamoController.informeLibrosSolicitados);
router.get('/prestamosRecientes',prestamoController.prestamosRecientes);




module.exports=router;