const express = require('express');
const mongoose = require('mongoose');
const clientesRoutes = require('./src/clientes/routes');
const cotizacionesRoutes = require('./src/cotizaciones/routes');
const empleadosRoutes = require('./src/empleados/routes');
const rutasRoutes = require('./src/rutas/routes');
const tarifasRoutes = require('./src/tarifas/routes');


const app = express();

const port = process.env.PORT || 3000; 


app.use('/public',express.static(__dirname + '/public'));


app.get('/', function(req, res) { //end point raiz
    const url = __dirname + '/src/views/inicio.html';
    res.sendFile(url);
})


app.get('/servicios', function(req, res){ // otro end point
    const url = __dirname + '/src/views/servicios.html';
    res.sendFile(url);
})



app.get('/iniciar_sesion', function(req, res){ // otro end point
    const url = __dirname + '/src/views/iniciar_sesion.html';
    res.sendFile(url);
})


app.get('/crear_cuenta', function(req, res){ // otro end point
    const url = __dirname + '/src/views/crear_cuenta.html';
    res.sendFile(url);
})


app.get('/envios', function(req, res){ // otro end point
    const url = __dirname + '/src/views/envios.html';
    res.sendFile(url);
})


app.get('/destinos_horarios', function(req, res){ // otro end point
    const url = __dirname + '/src/views/destinos_horarios.html';
    res.sendFile(url);
})


app.get('/sucursales', function(req, res){ // otro end point
    const url = __dirname + '/src/views/sucursales.html';
    res.sendFile(url);
})


app.get('/cotizar', function(req, res){ // otro end point
    const url = __dirname + '/src/views/cotizar.html';
    res.sendFile(url);
})


app.get('/loginTemporal', function(req, res){ // otro end point
    const url = __dirname + '/src/views/loginTemporal.html';
    res.sendFile(url);
})


app.get('/login_admin', function(req, res){ // otro end point
    const url = __dirname + '/src/views/login_admin.html';
    res.sendFile(url);
})


app.get('/login_logistica', function(req, res){ // otro end point
    const url = __dirname + '/src/views/login_logistica.html';
    res.sendFile(url);
})


app.get('/login_ventas', function(req, res){ // otro end point
    const url = __dirname + '/src/views/login_ventas.html';
    res.sendFile(url);
})


app.get('/crear_cuenta_admin', function(req, res){ // otro end point
    const url = __dirname + '/src/views/crear_cuenta_admin.html';
    res.sendFile(url);
})


app.use(express.json());
app.use('/clientes',clientesRoutes);
app.use('/cotizaciones',cotizacionesRoutes);
app.use('/empleados',empleadosRoutes);
app.use('/rutas',rutasRoutes);
app.use('/tarifas',tarifasRoutes);


const uri = 'mongodb+srv://nuevoUsuario:HolaMundo123@cluster0.hvpjxio.mongodb.net/paqueteria_tamazula?retryWrites=true&w=majority';


//conectando a una base de datos
mongoose.connect(uri, (err) => {
    if(!err){
        console.log('se conecto a la base de datos');
        app.listen(port,() =>{
            console.log('app is running in port ' + port);
        });
    }
    else{
        console.log('Fallo al conectarse a la base de datos');
    }
});

