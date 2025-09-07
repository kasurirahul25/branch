const express = require("express");
import 'dotenv/config';
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, server is running !");

});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
