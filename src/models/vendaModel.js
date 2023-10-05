const mongoose = require('mongoose');

const { Schema } = mongoose;

const vendaSchema = new Schema({
  pedido_id: String,
  produto_id: String,
  quantidade: Number
});

const vendaModel = mongoose.model('Venda', vendaSchema);
module.exports = vendaModel;