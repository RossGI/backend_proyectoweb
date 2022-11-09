const router = require('express').Router();
const controlador = require('./controller');
const authMiddelware = require('./../middlewares/auth');

router.get('/', authMiddelware, controlador.traerUsuarios);
router.get('/:id', authMiddelware, controlador.traerUnUsuario);
router.post('/', authMiddelware, controlador.crearUsuario);
router.put('/', authMiddelware, controlador.eliminarUsuario);
router.put('/:id', authMiddelware, controlador.actualizarUsuarios);

module.exports = router;