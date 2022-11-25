const modelo = require('.././modelos/clientes');



function traerUsuarios(req, res) {
    const activos = req.query.activos
    
    if(activos === "true"){
        modelo.find({status : 1}).then(response =>{
            res.send(response);
        }).catch(err =>{
            console.log('algo salio mal',err);
            res.status(400).send();
        })
    }


    else if(activos === 'false'){
        modelo.find({status : 0}).then(response =>{
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
        if(response){
            res.send(response);
        }

        else{
            res.status(404).send('No se encontró el usuario')
        }

    }).catch(err =>{
        res.status(400).send('El ID no es correcto');
    }) 
    
}






function crearUsuarioAdm(req, res) {
    const datos = req.body;
    modelo.create(datos).then(respuesta =>{
        res.send(respuesta);

    }).catch(err =>{
        res.status(400).send('No se pudo guardar el usuario');
    });
}



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

        if(response){

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

        }

        else{
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



function borrarUnUsuario(req,res){
    const id = req.params.id;
    modelo.findOne({id_: id}).then(respuesta =>{
        if(respuesta){
            respuesta.status = 0;
            respuesta.save();
            res.send('Usuario eliminado');
        }

        else{
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
    borrarUnUsuario
};