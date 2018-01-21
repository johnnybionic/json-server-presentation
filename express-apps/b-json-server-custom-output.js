const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('../data/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.use(jsonServer.bodyParser);

// wrap the JSON result in 'body'
router.render = (req, res) => {
    res.jsonp({
        body: res.locals.data
    })
};

server.listen(3000, () => {
    console.log('JSON Server is running')
});
