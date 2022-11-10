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

function crearUsuario(req, res) {
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

function eliminarUsuario(req, res) {
    const nombre = req.query.nombre;
    res.send('se elimino el usuario' + nombre);
}

//NO SE COMO, SOLO COPIE POR MIENTRAS
function actualizarUsuarios(req, res) {
    const activos = req.query.activos;
    if(activos === "true") {
        res.send('solo los usuarios activos (act)');
    } else {
        res.send('todos los usuarios (act)');
    }
}

module.exports = {
    traerUnUsuario,
    traerUsuarios,
    crearUsuario,
    eliminarUsuario,
    actualizarUsuarios
};