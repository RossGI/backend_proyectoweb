const express = require('express');

const app = express();

const port = 3000;

app.get('', function(req, res) { //end point raiz
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/contacto', function(req, res){ // otro end point
    res.send('Esta es la pagina de contacto!')
})

app.get('/usuarios', function(req, res){ // otro end point
    res.send([{name: 'John Doe'}])
})

app.get('/notas', function(req, res){ // otro end point
    res.sendFile(__dirname + '/notas.txt');
})

app.listen(port, () => {
    console.log('app is running port ' + port);
}); //corres esta app en puerto 3000 (comunmente el puerto para node)
