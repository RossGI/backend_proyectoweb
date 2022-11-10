function traerEmpleado(req, res) {
    const activos = req.query.activos;
    if(activos === "true") {
        res.send('solo los empleados activos');
    } else {
        res.send('todos los empleados');
    }
}

function traerUnEmpleado(req, res) {
    const id = req.params.id;
    res.send('los datos del usuario ' + id);
}

function crearEmpleado(req, res) {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const correo = req.body.correo;
    const telefono = req.body.telefono;
    const contraseña = req.body.contraseña;
    const puesto = req.body.puesto;
    res.send('se creo el usuario' + nombre);
}

function eliminarEmpleado(req, res) {
    const nombre = req.query.nombre;
    res.send('se elimino el usuario' + nombre);
}

//NO SE COMO, SOLO COPIE POR MIENTRAS
function actualizarEmpleado(req, res) {
    const activos = req.query.activos;
    if(activos === "true") {
        res.send('solo los usuarios activos (act)');
    } else {
        res.send('todos los usuarios (act)');
    }
}

module.exports = {
    traerUnEmpleado,
    traerEmpleado,
    crearEmpleado,
    eliminarEmpleado,
    actualizarEmpleado
};