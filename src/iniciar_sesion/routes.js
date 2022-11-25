const router = require('express').Router();
const controller = require('./controller');
const authMiddelware = require('./../middlewares/auth');


router.post('/',controller.inicioSesion);
router.get('/', controller.inicioSesion);


module.exports = router;