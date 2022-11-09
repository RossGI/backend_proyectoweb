const express = require('express');
const clientesRoutes = require('./src/clientes/routes');
const cotizacionesRoutes = require('./src/cotizaciones/routes');
const empleadosRoutes = require('./src/empleados/routes');
const rutasRoutes = require('./src/rutas/routes');
const tarifasRoutes = require('./src/tarifas/routes');

const app = express();

const port = 3000;


app.use(express.static(__dirname + '/views/inicio')); //solo para raiz

/*
app.get('', function(req, res) { //end point raiz
    res.sendFile(__dirname + '/views/inicio.html');
})
*/
app.get('/contacto', function(req, res){ // otro end point
    res.send('Esta es la pagina de contacto!');
})

app.get('/usuarios', function(req, res){ // otro end point
    res.send([{name: 'John Doe'}]);
})

app.get('/notas', function(req, res){ // otro end point
    res.sendFile(__dirname + '/notas.txt');
})

app.use('/clientes',clientesRoutes);
app.use('/cotizaciones',cotizacionesRoutes);
app.use('/empleados',empleadosRoutes);
app.use('/rutas',rutasRoutes);
app.use('/tarifas',tarifasRoutes);

app.listen(port, () => {
    console.log('app is running port ' + port);
}); //corres esta app en puerto 3000 (comunmente el puerto para node)
