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
    const nombre = req.query.nombre;
    res.send('se creo el usuario' + nombre);
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