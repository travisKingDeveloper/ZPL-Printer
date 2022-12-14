const express = require("express");

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  console.log("req.headers", req.headers);
  console.log("req.body", req.body);
  console.log("req.url", req.url);

  next();
});

app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("running");
});
