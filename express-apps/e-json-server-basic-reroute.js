const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('../data/db.json');
const middlewares = jsonServer.defaults();

server.use(jsonServer.rewriter({
    '/commentsByPost/:postId': '/posts/:postId/comments',
    '/commentsByPostAndLastName/:postId/:surname': '/posts/:postId/comments?author.last=:surname'
}));

server.use(middlewares);
server.use(router);

server.listen(3000, () => {
    console.log('JSON Server is running')
});
