const modelo = require('.././modelos/clientes');

//Mostrar todos los usuarios
function traerUsuarios(req, res) {
    const activos = req.query.activos
    
    if(activos === "true"){
        modelo.find({status : 1}).then(response =>{
            res.send(response);
        }).catch(err =>{
            console.log('algo salio mal',err);
            res.status(400).send();
        })
    } else if(activos === 'false'){
        modelo.find({status : 0}).then(response =>{
            res.send(response);
        }).catch(err =>{
            console.log('algo salio mal',err);
            res.status(400).send();
        })
    } else {
        modelo.find({}).then(response =>{
            res.send(response);
        }).catch(err =>{
            console.log('algo salio mal',err);
            res.status(400).send();
        })
    }
}

//Mostrar 1 usuario
function traerUnUsuario(req, res) {
    const id = req.params.id;
  
    modelo.findOne({_id: id}).then(response =>{
        if(response){
            res.send(response);
        } else {
            res.status(404).send('No se encontró el usuario')
        }
    }).catch(err =>{
        res.status(400).send('El ID no es correcto');
    }) 
}


//crear nuevo usuario
function crearUsuarioAdm(req, res) {
    const datos = req.body;
    modelo.create(datos).then(respuesta =>{
        res.send(respuesta);
    }).catch(err =>{
        res.status(400).send('No se pudo guardar el usuario');
    });
}

//Actualizar usuario admin
function actualizarUsuarioAdm(req, res) {
    const id = req.params.id;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const correo = req.body.correo;
    const telefono = req.body.telefono;
    const contraseña = req.body.contraseña;
    const direccion = req.body.direccion;
    const rfc = req.body.rfc;

    modelo.findOne({_id : id}).then(response =>{
        if(response){
            if(nombre != null && nombre != ''){
                response.nombre = nombre;
            }
            if(apellido != null && apellido != ''){
                response.apellido = apellido;
            }
            if(correo != null && correo != ''){
                response.correo = correo;
            }
            if(telefono != null && telefono != ''){
                response.telefono = telefono;
            }
            if(contraseña != null && contraseña != ''){
                response.contraseña = contraseña;
            }
            
            if(direccion != null && direccion != ''){
                response.direccion = direccion;
            }
            if(rfc != null && rfc != ''){
                response.rfc = rfc;
            }
            response.save();
        } else{
            res.status(404).send('No se encontró el usuario');
        }
    }).catch(err =>{
        res.status(400).send('El ID no es correcto');
    })
}

//Corregir 
function actualizarUsuarios(req, res) {
    const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const correo = req.body.correo;
        const telefono = req.body.telefono;
        const contraseña = req.body.contraseña;
        const rol = req.body.rol;
        const direccion = req.body.direccion;
        const rfc = req.body.rfc;

        modelo.find({}).then(response =>{
            if(nombre != null){
                response.nombre = nombre;
            }
            if(apellido != null){
                response.apellido = apellido;
            }
            if(correo != null){
                response.correo = correo;
            }
            if(telefono != null){
                response.telefono = telefono;
            }
            if(contraseña != null){
                response.contraseña = contraseña;
            }
            if(rol != null){
                response.rol = rol;
            }
            if(direccion != null){
                response.direccion = direccion;
            }
            if(rfc != null){
                response.rfc = rfc;
            }
            response.save();
        }).catch(err =>{
            res.status(400).send('no se puede actualizar');
        })
}


//Eliminar un usuario
function borrarUnUsuario(req,res){
    const id = req.params.id;

    modelo.findOne({_id: id}).then(respuesta =>{
        if(respuesta){
            respuesta.status = 0;
            respuesta.save();
            res.send('Usuario eliminado');
        } else{
            res.status(404).send('No se encontró el usuario');
        }
    }).catch(err =>{
        res.status(400).send('El ID no es correcto');
    })
}


//Activar ususario
function activarUnUsuario(req,res){
    const id = req.params.id;

    modelo.findOne({_id: id}).then(respuesta =>{
        if(respuesta){
            respuesta.status = 1;
            respuesta.save();
            res.send('Usuario activado');
        } else{
            res.status(404).send('No se encontró el usuario');
        }
    }).catch(err =>{
        res.status(400).send('El ID no es correcto');
    })
}



module.exports = {
    traerUnUsuario,
    traerUsuarios,
    crearUsuarioAdm,
    actualizarUsuarioAdm,
    actualizarUsuarios,
    borrarUnUsuario,
    activarUnUsuario
};