const {Schema,model} = require('mongoose');

const schema = new Schema({
    referencia: {type: String},
    origen:     {type: String},
    destino:    {type: String},
    tipoenvio:  {type: String},
    fecha:      {type: String},
    pesogr:     {type: String},
    alto:       {type: String},
    largo:      {type: String},
    ancho:      {type: String}
});

module.exports = model('cotizaciones',schema);