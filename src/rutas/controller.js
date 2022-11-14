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
    const fecha_inicio = req.body.fecha_inicio;
    const fecha_fin = req.body.fecha_fin;
    const origen = req.body.origen;
    const destino = req.body.destino;
    res.send('se creo la ruta');
}

function eliminarRuta(req, res) {
    const ruta = req.query.ruta;
    res.send('se elimino la ruta' + ruta);
}

function actualizarRutas(req, res) {
    const fecha_inicio = req.body.fecha_inicio;
    const fecha_fin = req.body.fecha_fin;
    const origen = req.body.origen;
    const destino = req.body.destino;
    res.send('se actualizó la ruta');
}

module.exports = {
    traerRuta,
    traerUnaRuta,
    crearRuta,
    eliminarRuta,
    actualizarRutas
};