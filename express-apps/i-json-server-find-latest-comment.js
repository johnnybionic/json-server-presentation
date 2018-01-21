const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('../data/db.json');
const middlewares = jsonServer.defaults();
var request = require('request');

server.use(middlewares);

server.get('/latestCommentForPost/:postId', (req, res) => {
    var id = req.params.postId;
    //res.jsonp(req.query);
    request.get({url:"http://localhost:3000/posts/" + id + "/comments?_sort=id&_order=desc"},
        function (error, response, body) {
            var temp = JSON.parse(body);
            res.json(temp[0]);
        })
});

server.use(router);
server.listen(3000, () => {
    console.log('JSON Server is running')
});
