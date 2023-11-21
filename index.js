const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');

const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(router);

server.listen(port, (err) => {
	if (err) {
		console.error('Error starting server:', err);
	} else {
		console.log(`JSON Server is running on port ${port}`);
	}
});

module.exports = server;
