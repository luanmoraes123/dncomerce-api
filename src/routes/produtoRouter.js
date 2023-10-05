const express = require('express');
const router = express.Router();
const produtoModel = require('../models/produtoModel');
const connectionDB = require('../midlewares/connectionBD')

router.get('/', connectionDB, async (req, res) => {
  const produtos = await produtoModel.find();
  res.status(200).json(produtos);
});

router.get('/:id', connectionDB, async (req, res) => {
  const { id } = req.params;
  const produto = await produtoModel.findOne({ _id: id });
  res.status(200).json(produto);
});

router.post('/', connectionDB, async (req, res) => {
  const { nome, descricao, preco } = req.body;
  const produto = await produtoModel.create({ nome, descricao, preco });
  res.status(200).json(produto);
});

router.delete('/:id', connectionDB, async (req, res) => {
  const { id } = req.params;
  const produto = await produtoModel.findOneAndDelete({ _id: id });
  res.status(200).json(produto);
});

router.put('/:id', connectionDB, async (req, res) => {
  const { id } = req.params;
  const { nome, descricao, preco } = req.body;
  const produto = await produtoModel.findOneAndUpdate({ _id: id }, { nome, descricao, preco });
  res.status(200).json(produto);
});



module.exports = router;