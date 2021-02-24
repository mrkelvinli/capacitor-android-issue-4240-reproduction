const express = require("express");
const app = express();
app.use(express.static("public"));
const app2 = express();
var path = require("path");

app.get("/", (req, res) => {
  res.send(`
  <html>
  <head></head>
  <body>
    Hello World,
    <a href="/redirect">redirect to</a>
  </body>
  </html>
  `);
});

app.get("/redirect", (req, res) => {
  // redirects to appB.js
  const url = `${req.protocol}://${req.hostname}:3001`;
  res.redirect(url);
});

app.listen(3000, () => console.log("listening on port 3000!"));

app2.get("/", (req, res) => {
  res.send(`
  <html>
  <head></head>
  <body>
  <h1>Destination</h1>
  <img src="/image">
  </body>
  </html>
  `);
});

app2.get("/image", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public/pexels-ave-calvar-martinez-4705113.jpg")
  );
});

app2.listen(3001, () => console.log("listening on port 3001!"));
