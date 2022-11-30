const modelo = require('.././modelos/iniciar_sesion');
const model2 = require('../modelos/clientes');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const modeltoken = require('../modelos/token');

const LoginController = {
    inicioSesion: async (req,res) =>{
        try{
            const {correo,contraseña} = req.body;
            const user = await model2.findOne({correo: correo});

            // if(user && (bcrypt.compare(contraseña,user.contraseña))){ // El bcrypt no funciona bien
            if(user && user.contraseña === contraseña){

                const token = jwt.sign(
                    {user_id: user._id, correo},
                    process.env.TOKEN_KEY,
                    {
                        expiresIn:"2h",
                    }
                );

                user.token = token;

                res.status(200).json(user);

            } else {
                res.status(400).send("Credenciales invalidas");
            }

        }catch (err){
            console.log(err);
        }
        
    },

    crearUsuario: (req,res) =>{
        const datos = req.body;
        modelo.create(datos).then(respuesta =>{
            res.send(respuesta);
        }).catch(err =>{
            res.status(400).send('No se pudo guardar el usuario');
        })
    },



}







module.exports = LoginController;



