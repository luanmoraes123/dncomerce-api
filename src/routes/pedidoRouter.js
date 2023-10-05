const express = require('express');
const router = express.Router();
const pedidoModel = require('../models/pedidoModel');
const connectionDB = require('../midlewares/connectionBD')

router.get('/', connectionDB, async (req, res) => {
  const pedidos = pedidoModel.find();
  res.status(200).json(pedidos);
});

router.get('/:id', connectionDB, async (req, res) => {
  const { id } = req.params;
  const pedido = pedidoModel.findOne({ _id: id });
  res.status(200).json(pedido);
});

router.post('/', connectionDB, async (req, res) => {
  const { clienteId, precoTotal } = req.body;
  const pedido = pedidoModel.create({ cliente_id: clienteId, preco_total: precoTotal, data: Date.now() });
  res.status(200).json(pedido);
});

router.delete('/:id', connectionDB, async (req, res) => {
  const { id } = req.params;
  const pedido = pedidoModel.findOneAndDelete({ _id: id });
  res.status(200).json(pedido);
});

router.put('/:id', connectionDB, async (req, res) => {
  const { id } = req.params;
  const { clienteId, precoTotal } = req.body;
  const pedido = pedidoModel.findOneAndUpdate({ _id: id }, { cliente_id: clienteId, preco_total: precoTotal, data: Date.now() });
  res.status(200).json(pedido);
});



module.exports = router;