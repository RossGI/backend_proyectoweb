const router = require('express').Router();
const controlador = require('./controller');
const authMiddelware = require('./../middlewares/auth');

router.get('/', authMiddelware, controlador.traerEmpleado);
router.get('/:id', authMiddelware, controlador.traerUnEmpleado);
router.post('/', authMiddelware, controlador.crearEmpleado);
router.post('/', authMiddelware, controlador.eliminarEmpleado);
router.get('/:id', authMiddelware, controlador.actualizarEmpleado);

module.exports = router;