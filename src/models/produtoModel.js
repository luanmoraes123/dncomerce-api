const mongoose = require('mongoose');

const { Schema } = mongoose;

const produtoSchema = new Schema({
  nome: String,
  descricao: String,
  preco: Number
});

const produtoModel = mongoose.model('Produto', produtoSchema);
module.exports = produtoModel;