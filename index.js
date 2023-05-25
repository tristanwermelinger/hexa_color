const express = require("express");
const colors = requie("./colors.json");

const app = express();
app.use(express.json());

app.get("/send-a-color", (req, res) => {
  console.log(req.query.color);
  res.send("Color recived");
});

app.listen(3000, () => {
  console.log("Server started");
});
