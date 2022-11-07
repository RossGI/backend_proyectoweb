function traerRuta(req, res) {
    const activos = req.query.activos;
    if(activos === "true") {
        res.send('solo las rutas activas');
    } else {
        res.send('todos las rutas');
    }
}

function traerUnaRuta(req, res) {
    const id = req.params.id;
    res.send('los datos de la ruta ' + id);
}

function crearRuta(req, res) {
    const ruta = req.query.ruta;
    res.send('se creo la ruta' + ruta);
}

function eliminarRuta(req, res) {
    const ruta = req.query.ruta;
    res.send('se elimino la ruta' + ruta);
}

//NO SE COMO, SOLO COPIE POR MIENTRAS
function actualizarRutas(req, res) {
    const activos = req.query.activos;
    if(activos === "true") {
        res.send('solo los usuarios activos (ruta)');
    } else {
        res.send('todos los usuarios (ruta)');
    }
}

module.exports = {
    traerRuta,
    traerUnaRuta,
    crearRuta,
    eliminarRuta,
    actualizarRutas
};