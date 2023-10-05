const express = require('express');
const router = express.Router();
const clienteModel = require('../models/clienteModel');
const connectionDB = require('../midlewares/connectionBD')

router.get('/', connectionDB, async (req, res) => {
  const clientes = await clienteModel.find();
  res.status(200).json(clientes);
});

router.get('/:id', connectionDB, async (req, res) => {
  const { id } = req.params;
  const cliente = await clienteModel.findOne({ _id: id });
  res.status(200).json(cliente);
});

router.post('/', connectionDB, async (req, res) => {
  const { nome, endereco, email, telefone } = req.body;
  const cliente = await clienteModel.create({ nome, endereco, email, telefone });
  res.status(200).json(cliente);
});

router.delete('/:id', connectionDB, async (req, res) => {
  const { id } = req.params;
  const cliente = await clienteModel.findOneAndDelete({ _id: id });
  res.status(200).json(cliente);
});

router.put('/:id', connectionDB, async (req, res) => {
  const { id } = req.params;
  const { nome, endereco, email, telefone } = req.body;
  const cliente = await clienteModel.findOneAndUpdate({ _id: id }, { nome, endereco, email, telefone });
  res.status(200).json(cliente);
});



module.exports = router;