const {Schema,model} = require('mongoose');

const schema = new Schema({
    referencia: {type: String},
    fechacotizacion:{type: Date},
    origen:     {type: String},
    destino:    {type: String},
    tipoenvio:  {type: String},
    fechaentrega:{type: Date},
    pesogr:     {type: Number},
    alto:       {type: Number},
    largo:      {type: Number},
    ancho:      {type: Number},
    total:      {type: Number}
});

module.exports = model('cotizaciones',schema);