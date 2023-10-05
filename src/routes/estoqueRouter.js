const express = require('express');
const router = express.Router();
const estoqueModel = require('../models/estoqueModel');
const connectionDB = require('../midlewares/connectionBD')

router.get('/', connectionDB, async (req, res) => {
  const estoques = await estoqueModel.find();
  res.status(200).json(estoques);
});

router.get('/:id', connectionDB, async (req, res) => {
  const { id } = req.params;
  const estoque = await estoqueModel.findOne({ _id: id });
  res.status(200).json(estoque);
});

router.post('/', connectionDB, async (req, res) => {
  const { produtoId, quantidade } = req.body;
  const estoque = await estoqueModel.create({ produto_id: produtoId, quantidade });
  res.status(200).json(estoque);
});

router.delete('/:id', connectionDB, async (req, res) => {
  const { id } = req.params;
  const estoque = await estoqueModel.findOneAndDelete({ _id: id });
  res.status(200).json(estoque);
});

router.put('/:id', connectionDB, async (req, res) => {
  const { id } = req.params;
  const { produtoId, quantidade } = req.body;
  const estoque = await estoqueModel.findOneAndUpdate({ _id: id }, { produto_id: produtoId, quantidade });
  res.status(200).json(estoque);
});



module.exports = router;