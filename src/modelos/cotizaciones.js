const {Schema,model} = require('mongoose');

const schema = new Schema({
    referencia: {type: String},
    fechacotizacion:{type: String},
    origen:     {type: String},
    destino:    {type: String},
    tipoenvio:  {type: String},
    fechaentrega:{type: String},
    pesogr:     {type: Number},
    alto:       {type: Number},
    largo:      {type: Number},
    ancho:      {type: Number},
    total:      {type: Number},
    status:     {type: Number, default: 1}
});

module.exports = model('cotizaciones',schema);