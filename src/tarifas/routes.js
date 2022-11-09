const router = require('express').Router();
const controlador = require('./controller');
const authMiddelware = require('./../middlewares/auth');

router.get('/', authMiddelware, controlador.traerTarifas);
router.get('/:id', authMiddelware, controlador.traerUnaTarifa);
router.post('/', authMiddelware, controlador.crearTarifa);
router.put('/', authMiddelware, controlador.eliminarTarifa);
router.put('/:id', authMiddelware, controlador.actualizarTarifa);

module.exports = router;