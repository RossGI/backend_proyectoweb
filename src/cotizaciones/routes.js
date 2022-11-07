const router = require('express').Router();
const controlador = require('./controller');
const authMiddelware = require('./../middlewares/auth');

router.get('/', authMiddelware, controlador.traerCotizaciones);
router.get('/:id', authMiddelware, controlador.traerUnaCotizacion);
router.post('/', authMiddelware, controlador.crearCotizacion);
router.post('/', authMiddelware, controlador.eliminarCotizacion);
router.get('/:id', authMiddelware, controlador.actualizarCotizacion);

module.exports = router;