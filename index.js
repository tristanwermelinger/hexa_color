const express = require("express");
const colors = require("./colors.json");
const app = express();
app.use(express.json());

app.get("/send-a-color", (req, res) => {
  console.log(req.query.color);
  // console.log(req.query);
  // console.log(colors);

  res.json({ color: req.query.color, hexa: colors[req.query.color] });

  if (colors[req.query.color] === undefined) {
    console.log("color not found");
  }
});

app.listen(3000, () => {
  console.log("Server started");
});
