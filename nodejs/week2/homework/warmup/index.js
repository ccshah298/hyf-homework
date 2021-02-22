const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));
// GET /numbers/add?first=<number here>&second=<number here>. In response send sum (first + second).

app.get("/numbers/add", function (req, res) {
    const addResponse = {
      result: parseInt(req.query.first) + parseInt(req.query.second),
    };
    res.send(addResponse);//http://localhost:3000/numbers/add?first=3&second=2
  });
  
  // GET /numbers/multiply/<first number here>/<second number here>. in response send multiplication (first * second).
  
  app.get("/numbers/multiply/:first/:second", function (req, res) {
    const multiplyResponse = {
      result: parseInt(req.params.first) * parseInt(req.params.second),
    };
    res.send(multiplyResponse); //http://localhost:3000/numbers/multiply/6/2
  });

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
