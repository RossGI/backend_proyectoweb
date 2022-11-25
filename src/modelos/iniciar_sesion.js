const {Schema,model} = require('mongoose');

const schema = new Schema({
    correo: {
        type: String
    },

    contraseña:{
        type: String
    }

});

//module.exports = model('clientes',schema);

