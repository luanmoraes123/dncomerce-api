function routes(app) {
  app.use('/produtos', require('./routes/produtoRouter.js'));
  app.use('/pedidos', require('./routes/pedidoRouter.js'));
  app.use('/estoques', require('./routes/estoqueRouter.js'));
  app.use('/clientes', require('./routes/clienteRouter.js'));
  app.use('/vendas', require('./routes/vendaRouter.js'));
  return;
}

module.exports = routes;