const express = require('express');
const mongoose = require('mongoose');
const clientesRoutes = require('./src/clientes/routes');
const cotizacionesRoutes = require('./src/cotizaciones/routes');
const empleadosRoutes = require('./src/empleados/routes');
const rutasRoutes = require('./src/rutas/routes');
const tarifasRoutes = require('./src/tarifas/routes');


const app = express();

const port = process.env.PORT || 3000; 



app.get('', function(req, res) { //end point raiz
    res.sendFile(__dirname + '/views/inicio.html');
})


app.get('/contacto', function(req, res){ // otro end point
    res.send('Esta es la pagina de contacto!');
})



app.get('/notas', function(req, res){ // otro end point
    res.sendFile(__dirname + '/notas.txt');
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

