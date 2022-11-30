const router = require('express').Router();
const controller = require('./controller');
const authMiddelware = require('./../middlewares/auth');


router.post('/',controller.inicioSesion);
router.post('/usuario',controller.crearUsuario);




module.exports = router;