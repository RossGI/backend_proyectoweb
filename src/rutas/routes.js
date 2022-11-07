const router = require('express').Router();
const controlador = require('./controller');
const authMiddelware = require('./../middlewares/auth');

router.get('/', authMiddelware, controlador.traerRuta);
router.get('/:id', authMiddelware, controlador.traerUnaRuta);
router.post('/', authMiddelware, controlador.crearRuta);
router.post('/', authMiddelware, controlador.eliminarRuta);
router.get('/:id', authMiddelware, controlador.actualizarRutas);

module.exports = router;