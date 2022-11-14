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
    const status = req.body.status;
    res.send('se creo el usuario' + nombre);
}

function eliminarEmpleado(req, res) {
    const status = req.query.status;
    res.send('se elimino el usuario' + nombre);
}

function actualizarEmpleado(req, res) {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const correo = req.body.correo;
    const telefono = req.body.telefono;
    const contraseña = req.body.contraseña;
    const puesto = req.body.puesto;
    res.send('se creo el usuario' + nombre);
}

module.exports = {
    traerUnEmpleado,
    traerEmpleado,
    crearEmpleado,
    eliminarEmpleado,
    actualizarEmpleado
};