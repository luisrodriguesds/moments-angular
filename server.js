const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const bodyParser = require("body-parser");
const cors = require("cors");

server.use(cors());
server.use(bodyParser.json());
server.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
server.use((req, _, next) => {
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
const moments = [
  {
    id: `${Math.random()}`,
    title: "First moment post ",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In aperiam alias nemo adipisci temporibus optio sit, eaque, non soluta autem fugit illo maxime nobis aspernatur possimus modi saepe nulla. Deserunt?",
    status: "active",
    term: ["terms", "conditions"],
    tags: ["#general"],
  },
  {
    id: `${Math.random()}`,
    title: "Secound moment post ",
    description:
      "In aperiam alias nemo adipisci temporibus optio sit, eaque, non soluta autem fugit illo maxime nobis aspernatur possimus modi saepe nulla. Deserunt?",
    status: "active",
    term: ["terms", "conditions"],
    tags: ["#moments", "#sharing"],
  },
];
server.get("/api/moments", (req, res) => {
  return res.json({
    items: moments,
  });
});

server.post("/api/moments", (req, res) => {
  const body = req.body;
  if (body.title === "" || body.description === "") {
    return res.json({
      message: "Something went wrong",
    });
  }
  const moment = {
    ...req.body,
    id: `${Math.random()}`,
  };
  moments.push(moment);

  return res.json(moment);
});

server.use(middlewares);
server.listen(5000, () => {
  console.log("JSON Server is running - port 5000");
});
