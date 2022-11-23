const {Schema,model} = require('mongoose');

const schema = new Schema({
    fecha_inicio: {
        type: String
    },

    fecha_fin:{
        type: String
    },

    origen:{
        type: String
    },

    destino:{
        type: String
    }

});

module.exports = model('rutas',schema);