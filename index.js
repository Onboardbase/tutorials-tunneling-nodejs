const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("GET request to the homepage");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
