const modelo = require('.././modelos/clientes');


function traerUsuarios(req, res) {
    const activos = req.query.activos;
    if(activos === "true") {
        res.send('solo los usuarios activos');
    } else {
        res.send('todos los usuarios');
    }
}

function traerUnUsuario(req, res) {
    const id = req.params.id;
    res.send('los datos del usuario ' + id);
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

//se cambia el status del usuario
function eliminarUsuarioSelf(req, res) {
    const status = 'no activo';
    res.send('se elimino el usuario' + nombre);
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
            response.nombre = nombre;
            response.apellido = apellido;
            response.correo = correo;
            response.telefono = telefono;
            response.contraseña = contraseña;
            response.rol = rol;
            response.direccion = direccion;
            response.rfc = rfc;

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
    res.send('===Usuario creado===' + '\nNombre: ' + nombre + '\nCorreo: ' + correo + '\nTeléfono: ' + telefono);
}

module.exports = {
    traerUnUsuario,
    traerUsuarios,
    crearUsuarioSelf,
    eliminarUsuarioSelf,
    crearUsuarioAdm,
    actualizarUsuarioAdm,
    actualizarUsuarios
};