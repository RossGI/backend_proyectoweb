function traerTarifas(req, res) {
    const activos = req.query.activos;
    if(activos === "true") {
        res.send('solo las tarifas activas');
    } else {
        res.send('todos las tarifas');
    }
}

function traerUnaTarifa(req, res) {
    const id = req.params.id;
    res.send('los datos de la tarifa ' + id);
}

function crearTarifa(req, res) {
    const flete = req.body.flete;
    const volumen = req.body.volumen;
    const peso = req.body.peso;
    
    res.send('se creo la tarifa' + tarifa);
}

function eliminarTarifa(req, res) {
    const tarifa = req.query.tarifa;
    res.send('se elimino la tarifa' + tarifa);
}

//NO SE COMO, SOLO COPIE POR MIENTRAS
function actualizarTarifa(req, res) {
    const activos = req.query.activos;
    if(activos === "true") {
        res.send('solo los usuarios activos (tar)');
    } else {
        res.send('todos los usuarios (tar)');
    }
}

module.exports = {
    traerTarifas,
    traerUnaTarifa,
    crearTarifa,
    eliminarTarifa,
    actualizarTarifa
};