const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('../data/db.json');
const middlewares = jsonServer.defaults();

// mount the router on '/api' - existing endpoints still work
server.use('/api', router);

server.use(middlewares);
server.use(router);

server.listen(3000, () => {
    console.log('JSON Server is running')
});
