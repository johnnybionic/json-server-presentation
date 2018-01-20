const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use((req, res, next) => {
    if (isAuthorised(req)) { // add your authorization logic here
        next() // continue to JSON Server router
    } else {
        res.sendStatus(401)
    }
})

server.use(middlewares);
server.use(router);

server.listen(3000, () => {
    console.log('JSON Server is running')
});

function isAuthorised(req) {
    var token = req.header('token');
    if (token)
        return true;
}

