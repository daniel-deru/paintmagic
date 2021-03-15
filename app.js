var express = require('express');
var path = require('path');


var app = express();

app.use(express.static(path.join(__dirname, "build")))

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"))
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`listening on ${port}`)
})

