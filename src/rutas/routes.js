const router = require('express').Router();
const controlador = require('./controller');
const authMiddelware = require('./../middlewares/auth');

router.get('/', authMiddelware, controlador.traerRuta);
router.get('/:id', authMiddelware, controlador.traerUnaRuta);
router.post('/', authMiddelware, controlador.crearRuta);
router.put('/', authMiddelware, controlador.eliminarRuta);
router.put('/:id', authMiddelware, controlador.actualizarRutas);

module.exports = router;