const jsonServer = require('json-server');
const server = jsonServer.create()
const router = jsonServer.router('db.json');


// Middlewares do json-server
const middlewares = jsonServer.defaults();

// Usar middlewares do json-server
server.use(middlewares);

// Servir arquivos estáticos da pasta 'public'
server.use(
  jsonServer.rewriter({
    "/*":"/$1",
  })
);

// Usar o router do json-server
server.use(router);

// Iniciar o servidor
server.listen(3000, () => {
  console.log('JSON Server is running');
});

module.exports = server;