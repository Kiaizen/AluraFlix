import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("../db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.use(jsonServer.rewriter({
  '/api/*': '/$1'
}))
const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

export default server;
