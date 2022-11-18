const modelo = require('.././modelos/clientes');


function traerUsuarios(req, res) {
    const activos = req.query.activos
    var status = 0;
    if(activos === "true"){
        modelo.find({status : 1}).then(response =>{
            res.send(response);
        }).catch(err =>{
            console.log('algo salio mal',err);
            res.status(400).send();
        })
    }

    else{

        modelo.find({}).then(response =>{
            res.send(response);
        }).catch(err =>{
            console.log('algo salio mal',err);
            res.status(400).send();
        })

    }
    
}


function traerUnUsuario(req, res) {
    const id = req.params.id;
  
    modelo.findOne({_id: id}).then(response =>{
        res.send(response);

    }).catch(err =>{
        console.log('el id no es válido',err);
        res.status(400).send();
    }) 
    
}

function crearUsuarioSelf(req, res) {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const correo = req.body.correo;
    const telefono = req.body.telefono;
    const contraseña = req.body.contraseña;
    const rol = req.body.rol;
    const direccion = req.body.direccion;
    const rfc = req.body.rfc;
    const status = 'activo';
    res.send('===Usuario creado===' + '\nNombre: ' + nombre + '\nCorreo: ' + correo + 
    '\nTeléfono: ' + telefono + '\nContraseña:' + contraseña + '\nRol: ' + rol +  
    '\nDirección: ' + direccion + '\nRFC: ' + rfc  + '\nEstátus: ' + status);
}



function crearUsuarioAdm(req, res) {
    const datos = req.body;
    modelo.create(datos).then(respuesta =>{
        res.send(respuesta);

    }).catch(err =>{
        res.status(400).send('no se pudo guardar el contacto');
    });
}

//se cambia el status del usuario
function actualizarUsuarioAdm(req, res) {

    const id = req.params.id;
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const correo = req.body.correo;
        const telefono = req.body.telefono;
        const contraseña = req.body.contraseña;
        const rol = req.body.rol;
        const direccion = req.body.direccion;
        const rfc = req.body.rfc;
        modelo.findOne({_id : id}).then(response =>{
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

function actualizarUsuarios(req, res) {
    const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const correo = req.body.correo;
        const telefono = req.body.telefono;
        const contraseña = req.body.contraseña;
        const rol = req.body.rol;
        const direccion = req.body.direccion;
        const rfc = req.body.rfc;
        modelo.findOne({_id : id}).then(response =>{
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

module.exports = {
    traerUnUsuario,
    traerUsuarios,
    crearUsuarioSelf,
    crearUsuarioAdm,
    actualizarUsuarioAdm,
    actualizarUsuarios
};