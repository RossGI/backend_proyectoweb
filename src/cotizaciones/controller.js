const { response } = require('express');
const modelo = require('../modelos/cotizaciones');


//Listado de todas las cotizaciones
function traerCotizaciones(req, res) {
    const activos = req.query.activos;

    if(activos === "true") {
        modelo.find({status: 1}).then(response =>{
            res.send(response);
        }).catch(err => {
            console.log('Algo salió al ', err);
            res.status(400).send()
        })
    } else {
        modelo.find({}).then(response=>{
            res.send(response);
        }).catch(err =>{
            console.log('Algo salió mal', err);
            res.status(400).send();
        })
    }
}

//Buscar cotización con folio
function traerUnaCotizacion(req, res) {
    const id = req.params.id;

    modelo.findOne({_id: id}).then(response =>{
        if(response){
            res.send(response);
        } else {
            res.status(404).send('No se encontró el usuario');
        }
    }).catch(err => {
        res.status(400).send('El folio no es correcto');
    })
}

//Nueva cotización
function crearCotizacion(req, res) {
    const datos = req.body;

    modelo.create(datos).then(response =>{
        res.send(response);
    }).catch(err =>{
        res.status(400).send('No se pudo crear la cotización');
    });
}

//Eliminar cotización
function eliminarCotizacion(req, res) {
    const id = req.params.id;

    modelo.findOne({_id: id}).then(response =>{
        if(response){
            response.status = 0;
            response.save();
            res.send('Cotización eliminada');
        } else{
            res.status(404).send('No se encontró la cotización');
        }
    }).catch(err => {
        res.status(400).send('El folio no es correcto');
    })
}


function actualizarCotizacion(req, res) {
    const ruta = req.body.ruta;
    const fecha = req.body.fecha;
    const volumen = req.body.volumen;
    const referencia = req.body.referencia;
    const status = req.body.status;

    modeli.findOne({_id: id}).then(response =>{
        if(response){
            if(nombre != null){
                response.nombre = nombre;
            }
        }
    })

}

module.exports = {
    traerCotizaciones,
    traerUnaCotizacion,
    crearCotizacion,
    eliminarCotizacion,
    actualizarCotizacion
};