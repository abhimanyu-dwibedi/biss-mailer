const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hi");
});

const PORT = env.PORT;
app.listen(5000);
