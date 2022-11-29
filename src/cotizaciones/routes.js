const router = require('express').Router();
const controlador = require('./controller');
const authMiddelware = require('./../middlewares/auth');

router.get('/', authMiddelware, controlador.traerCotizaciones);
router.get('/:id', authMiddelware, controlador.traerUnaCotizacion);
router.post('/', authMiddelware, controlador.crearCotizacion);
router.delete('/:id', authMiddelware, controlador.eliminarCotizacion);
router.put('/:id', authMiddelware, controlador.actualizarCotizacion);
router.put('/:id/activar',authMiddelware,controlador.activarCotizacion);

module.exports = router;