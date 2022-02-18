const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(
  'apps/fake-backend/src/json-server-backend/db.json'
);
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

//server.post('/api/suggestion', (req, res) => res.status(200).jsonp({}));
//server.post('/api/suggestion', (req, res) => res.status(204).jsonp({}));
//server.get('/api/suggestion', (req, res) => res.status(500).jsonp({}));
/* server.post('/api/suggestion', (req, res) =>
  res.status(422).jsonp({ error: ['Please provide Date in YYYY-MM-DD format'] })
); */

server.use(
  jsonServer.rewriter({
    '/api/suggestion': '/suggestion',
    '/v1/**': '/bitcoinMarketData',
  })
);

// Use default router
server.use(router);
server.listen(3000, () => {
  console.log('Fake-Backend Server is running');
});
