var HTTP_PORT = process.env.port || 8080;
var express = required("express");
var app = express();

app.get("/", (req, res) => {
  res.send("Hello from Noman Atique");
});
app.listen(HTTP_PORT);
