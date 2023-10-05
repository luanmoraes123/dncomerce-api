const mongoose = require('mongoose');

const { Schema } = mongoose;

const pedidoSchema = new Schema({
  cliente_id: String,
  data: Date,
  preco_total: Number
});

const pedidoModel = mongoose.model('Pedido', pedidoSchema);

module.exports = pedidoModel;