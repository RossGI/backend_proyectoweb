const router = require('express').Router();
const controlador = require('./controller');
const authMiddelware = require('./../middlewares/auth');

router.get('/', authMiddelware, controlador.traerUsuarios);
router.get('/:id', authMiddelware, controlador.traerUnUsuario);
router.post('/', authMiddelware, controlador.crearUsuarioAdm);
router.put('/:id', authMiddelware, controlador.actualizarUsuarioAdm);
router.delete('/:id',authMiddelware,controlador.borrarUnUsuario);
router.put('/:id/activar',authMiddelware,controlador.activarUnUsuario);

module.exports = router;