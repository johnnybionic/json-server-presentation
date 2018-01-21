const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('../data/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

// a simple custom GET
server.get('/echo', (req, res) => {
   res.jsonp(req.query);
});

// intercept each POST and add a timestamp
// - use JSON server's body parser
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
    if (req.method === 'POST') {
        req.body.createdAt = Date.now();
    }

    next();
});

server.use(router);
server.listen(3000, () => {
    console.log('JSON Server is running')
});

