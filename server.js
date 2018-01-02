var express     = require("express");
var app         = express();
var path        = require("path");

const port = process.env.PORT || 5000;


app.get("/api/", (req, res) => {
    res.send("beep boop test");
})


var static_path = path.join(__dirname + "/public");

console.log(process.env.PORT);

let reactRoute = (req, res) => {
    res.sendFile("./public/index.html", {root: __dirname});
}

app.use('/', reactRoute)
app.use('/*', reactRoute) 
app.get("/api/test", (req, res)=>{
  res.send("test file");
})

app.use(express.static(static_path))
.get('/', function (req, res) {
  res.sendFile('./index.html', {
    root: static_path
  });
}).listen(process.env.PORT || 8080, function (err) {
  if (err) { console.log(err) };
  console.log('Listening at localhost:8080');
});

// app.use(express.static(__dirname))
// .get('/', function (req, res) {
//   res.sendFile('./public/index.html', {
//     root: static_path
//   });
// }).listen(process.env.PORT || 8080, function (err) {
//   if (err) { console.log(err) };
//   console.log('Listening at localhost:8080');
// });


//app.listen(port, () => console.log(`Listening on port ${port}`));