//const modelo = require('.././modelos/iniciar_sesion');

function inicioSesion(req, res) {
    console.log(req.body);
    model.findOne(res.body).then(user =>{
        if(user){ //despues utilizar jwt para creacion del token
            const token = 'hefifefhweiuf99hfeq9fyhq3whuf';
            modelToken.create({
                token: token,
                userId: user._id
            }).then(response =>{
                res.send(token);
            })
        


        }else{
            res.status(401).send();
        }
    })
    res.send({'token': '123'});
}


module.exports = {
    inicioSesion
};

