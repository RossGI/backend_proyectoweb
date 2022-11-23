const {Schema,model} = require('mongoose');

const schema = new Schema({
    flete: {
        type: String
    },

    volumen:{
        type: String
    },

    peso:{
        type: String
    }

});

module.exports = model('tarifas',schema);