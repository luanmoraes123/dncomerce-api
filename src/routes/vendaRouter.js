const express = require('express');
const router = express.Router();
const vendaModel = require('../models/vendaModel');
const connectionDB = require('../midlewares/connectionBD')

router.get('/', connectionDB, async (req, res) => {
  const vendas = await vendaModel.find();
  res.status(200).json(vendas);
});

router.get('/:id', connectionDB, async (req, res) => {
  const { id } = req.params;
  const venda = await vendaModel.findOne({ _id: id });
  res.status(200).json(venda);
});

router.post('/', connectionDB, async (req, res) => {
  const { pedidoId, produtoId, quantidade } = req.body;
  const venda = await vendaModel.create({ pedido_id: pedidoId, produto_id: produtoId, quantidade });
  res.status(200).json(venda);
});

router.delete('/:id', connectionDB, async (req, res) => {
  const { id } = req.params;
  const venda = await vendaModel.findOneAndDelete({ _id: id });
  res.status(200).json(venda);
});

router.put('/:id', connectionDB, async (req, res) => {
  const { id } = req.params;
  const { pedidoId, produtoId, quantidade } = req.body;
  const venda = await vendaModel.findOneAndUpdate({ _id: id }, { pedido_id: pedidoId, produto_id: produtoId, quantidade });
  res.status(200).json(venda);
});



module.exports = router;