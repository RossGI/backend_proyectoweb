const router = require('express').Router();
const controlador = require('./controller');
const authMiddelware = require('./../middlewares/auth');

router.get('/', authMiddelware, controlador.traerEmpleados);
router.get('/:id', authMiddelware, controlador.traerUnEmpleado);
router.post('/', authMiddelware, controlador.crearEmpleado);
router.delete('/:id', authMiddelware, controlador.eliminarEmpleado);
router.put('/:id', authMiddelware, controlador.actualizarEmpleado);

module.exports = router;