var mongose = require('mongoose');

module.exports = function() {
    var schema = mongose.Schema({
        nome: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            index: {
                unique: true
            }
        },
        emergencia: {
            type: mongose.Schema.ObjectId,
            ref: 'Contato'
        }
    });
    return mongose.model('Contato', schema);
};