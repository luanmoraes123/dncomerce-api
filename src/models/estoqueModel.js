const mongoose = require('mongoose');

const { Schema } = mongoose;

const estoqueSchema = new Schema({
  produto_id: String,
  quantidade: Number
});

const estoqueModel = mongoose.model('Estoque', estoqueSchema);
module.exports = estoqueModel;