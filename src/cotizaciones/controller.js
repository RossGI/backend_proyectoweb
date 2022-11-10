function traerCotizaciones(req, res) {
    const activos = req.query.activos;
    if(activos === "true") {
        res.send('solo las cotizaciones activas');
    } else {
        res.send('todos las cotizaciones');
    }
}

function traerUnaCotizacion(req, res) {
    const id = req.params.id;
    res.send('los datos de la ruta ' + id);
}

function crearCotizacion(req, res) {
    const ruta = req.body.ruta;
    const fecha = req.body.fecha;
    const medidas_volumen = req.body.medidas_volumen;
    const referencia = req.body.referencia;
    res.send('===Cotización creada===' + '\nRuta: ' + ruta + '\nFecha: ' + fecha + '\nMedidas de volumen: ' + medidas_volumen + '\nReferencia ' + referencia);
}

function eliminarCotizacion(req, res) {
    const ruta = req.query.ruta;
    res.send('se elimino la ruta' + ruta);
}

//NO SE COMO, SOLO COPIE POR MIENTRAS
function actualizarCotizacion(req, res) {
    const activos = req.query.activos;
    if(activos === "true") {
        res.send('solo los usuarios activos (ruta)');
    } else {
        res.send('todos los usuarios (ruta)');
    }
}

module.exports = {
    traerCotizaciones,
    traerUnaCotizacion,
    crearCotizacion,
    eliminarCotizacion,
    actualizarCotizacion
};