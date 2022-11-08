const https = require("https");
const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const bodyParser = require("body-parser");
const cors = require("cors");

server.use(cors());
server.use(bodyParser.json());
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
server.use(function (req, res, next) {
  console.log(req.method, req.originalUrl);
  setTimeout(next, 2000);
});

server.post("/api/auth", async (req, res) => {
  return res.json({
    token: "token-here",
    user: {
      id: "test-id",
      name: "John Doe",
      email: "john@doe.com",
    },
  });
});

server.use(middlewares);
server.listen(5000, () => {
  console.log("JSON Server is running - port 5000");
});
