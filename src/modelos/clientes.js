const {Schema,model} = require('mongoose');

const schema = new Schema({
    nombre: {
        type: String
    },

    apellido:{
        type: String
    },

    correo:{
        type: String
    },

    telefono:{
        type: String
    },

    direccion:{
        type: String
    },

    rfc: {
        type: String
    },

    contraseña: {
        type: String
    },

    status:{
        type: Number,
        default: 1
    }

});

module.exports = model('clientes',schema);