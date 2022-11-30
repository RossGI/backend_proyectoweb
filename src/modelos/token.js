const {Schema,model} = require('mongoose');

const schema = new Schema({
    token: {
        type: String
    },

    userId:{
        type: String
    }

});

module.exports = model('tokens',schema);