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
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const correo = req.body.correo;
    const telefono = req.body.telefono;
    const contraseña = req.body.contraseña;
    const rol = req.body.rol;
    const direccion = req.body.direccion;
    const rfc = req.body.rfc;
    const status = req.body.status;
    res.send('===Usuario creado===' + '\nNombre: ' + nombre + '\nCorreo: ' + correo + 
    '\nTeléfono: ' + telefono + '\nContraseña:' + contraseña + '\nRol: ' + rol +  
    '\nDirección: ' + direccion + '\nRFC: ' + rfc  + '\nEstátus: ' + status);
}

//se cambia el status del usuario
function actualizarUsuarioAdm(req, res) {
    const id = req.params.id
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const correo = req.body.correo;
    const telefono = req.body.telefono;
    const contraseña = req.body.contraseña;
    const rol = req.body.rol;
    const direccion = req.body.direccion;
    const rfc = req.body.rfc;
    const status = req.body.status
    res.send('se actualizó el usuario' + id);
    res.send('===Usuario actualizado===' + '\nNombre: ' + nombre + '\nCorreo: ' + correo + 
    '\nTeléfono: ' + telefono + '\nContraseña:' + contraseña + '\nRol: ' + rol +  
    '\nDirección: ' + direccion + '\nRFC: ' + rfc  + '\nEstátus: ' + status);
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
    const status = req.body.status
   
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