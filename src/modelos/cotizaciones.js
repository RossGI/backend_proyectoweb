const {Schema,model} = require('mongoose');

const schema = new Schema({
    ruta: {
        type: String
    },

    fecha:{
        type: String
    },

    medidas_volumen:{
        type: String
    },

    referencia:{
        type: String
    }

   

});

module.exports = model('cotizaciones',schema);