const express = require("express");

const app = express();

app.use(express.json());
app.use((req, res) => {
  console.log("req.headers", req.headers);
  console.log("req.body", req.body);
  console.log("req.url", req.url);

  res.json({ hello: "world" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("running");
});
