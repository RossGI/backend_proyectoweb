
const modelo = require('./../modelos/empleados');


function traerEmpleados(req, res) {
    
    
    modelo.find({status : 1}).then(response =>{
        res.send(response);
    }).catch(err =>{
        console.log('algo salio mal',err);
        res.status(400).send();
    })

}   


//Mostrar un empleado
function traerUnEmpleado(req, res) {
    const id = req.params.id;
  
    modelo.findOne({_id: id}).then(response =>{
        if(response){
            res.send(response);
        }

        else{
            res.status(404).send('No se encontró el empleado')
        }

    }).catch(err =>{
        res.status(400).send('El ID no es correcto');
    }) 
}


function crearEmpleado(req, res) {
    const datos = req.body;
    modelo.create(datos).then(respuesta =>{
        res.send(respuesta);

    }).catch(err =>{
        res.status(400).send('No se pudo guardar el empleado');
    });
}



function eliminarEmpleado(req, res) {
    const id = req.params.id;
    modelo.findOne({_id: id}).then(respuesta =>{
        if(respuesta){
            respuesta.status = 0;
            respuesta.save();
            res.send('empleado eliminado');
        }

        else{
            res.status(404).send('No se encontró el empleado');
        }
        
    }).catch(err =>{
        res.status(400).send('El ID no es correcto');
    })
}

function actualizarEmpleado(req, res) {

    const id = req.params.id;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const correo = req.body.correo;
    const telefono = req.body.telefono;
    const puesto = req.body.puesto;
    const rol = req.body.rol;
    const rfc = req.body.rfc;
    const contraseña = req.body.contraseña;
    
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

            if(puesto != null && puesto != ''){
                response.puesto = puesto;
            }

            if(rol != null && rol != ''){
                response.rol = rol;
            }

            if(rfc != null && rfc != ''){
                response.rfc = rfc;
            }
    
            if(contraseña != null && contraseña != ''){
                response.contraseña = contraseña;
            }
            
        
    
            response.save();

        }

        else{
            res.status(404).send('No se encontró el empleado');
        }


    }).catch(err =>{
        res.status(400).send('El ID no es correcto');
    })
}

module.exports = {
    traerUnEmpleado,
    traerEmpleados,
    crearEmpleado,
    eliminarEmpleado,
    actualizarEmpleado
};