const router = require('express').Router();
const controlador = require('./controller');
const authMiddelware = require('./../middlewares/auth');

router.get('/', authMiddelware, controlador.traerUsuarios);
router.get('/:id', authMiddelware, controlador.traerUnUsuario);
/*router.post('/', authMiddelware, controlador.crearUsuarioSelf);*/
router.post('/', authMiddelware, controlador.crearUsuarioAdm);
router.put('/:id', authMiddelware, controlador.actualizarUsuarioAdm);
router.put('/', authMiddelware, controlador.actualizarUsuarios);
router.delete('/:id',authMiddelware,controlador.borrarUnUsuario);

module.exports = router;