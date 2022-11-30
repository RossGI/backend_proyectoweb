const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();

//minuto 20


const clientesRoutes = require('./src/clientes/routes');
const cotizacionesRoutes = require('./src/cotizaciones/routes');
const empleadosRoutes = require('./src/empleados/routes');
const iniciar_sesionRoutes = require('./src/iniciar_sesion/routes');


const app = express();

//const port = process.env.PORT || 3000; 
const port = 3000;

app.use(cors());

app.use('/public',express.static(__dirname + '/public'));



app.get('/', function(req, res) { 
   
    res.send('endpoint raiz');
})






app.use(express.json());
app.use('/clientes',clientesRoutes);
app.use('/cotizaciones',cotizacionesRoutes);
app.use('/empleados',empleadosRoutes);
app.use('/iniciar_sesion',iniciar_sesionRoutes);


const uri = 'mongodb+srv://nuevoUsuario:HolaMundo123@cluster0.hvpjxio.mongodb.net/paqueteria_tamazula?retryWrites=true&w=majority';



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

