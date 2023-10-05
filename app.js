const express = require('express')
const app = express()
const routes = require('./src/routes');
require('dotenv').config();


app.use(express.json());
routes(app);

app.listen(3000, () => {
  console.log('Servidor de exemplo aberto na porta: 3000')
})