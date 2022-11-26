const { response } = require('express');
const { model } = require('mongoose');
const modelo = require('../modelos/empleados');

//Mostrar empleados
function traerEmpleados(req, res) {
    const activos = req.query.activos;
    if(activos === "true"){
        modelo.find({status: 1}).then(response =>{
            res.send(response);
        }).catch(err =>{
            console.log('Algo salión mal', err);
            res.status(400).send();
        })
    } else if(activos === 'false'){
        modelo.find({status : 0}).then(response =>{
            res.send(response);
        }).catch(err=>{
            console.log('Algo salió mal', err);
            res.status(400).send();
        })
    } else {
        modelo.find({}).then(response =>{
            res.send(response);
        }).catch(err => {
            console.log('Algo salió mal');
            res.status(400).send();
        })
    }
}

//Mostrar un empleado
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
    res.send('se actualizó el usuario' + nombre);
}

module.exports = {
    traerUnEmpleado,
    traerEmpleados,
    crearEmpleado,
    eliminarEmpleado,
    actualizarEmpleado
};