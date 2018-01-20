const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.all('*', function (req, res, next) {
    if (req.method === 'GET') {
        next() // Continue
    } else {
        res.sendStatus(403) // Forbidden
    }
});

server.use(middlewares);
server.use(router);

server.listen(3000, () => {
    console.log('JSON Server is running')
});


