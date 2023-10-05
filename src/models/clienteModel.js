const mongoose = require('mongoose');

const { Schema } = mongoose;

const clienteSchema = new Schema({
  nome: String,
  endereco: String,
  email: String,
  telefone: Number
});

const clienteModel = mongoose.model('Cliente', clienteSchema);
module.exports = clienteModel;