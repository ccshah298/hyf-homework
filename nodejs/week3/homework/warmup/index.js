const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => res.send("nodejs week3 homework"));
app.get("/calculator/add", (req, res) => {
  const { first, second } = req.query;
  if (first && second) {
    if (Number(first) && Number(second)) {
      const sum = Number(first) + Number(second);
      res.send(`here is result : ${sum}`);
    } else if (Number(first) && second instanceof Array) {
      if (
        second.every(function (element) {
          return typeof Number(element) === "number";
        })
      ) {
        let result = Number(first);
        second.forEach((number) => (result = result + Number(number)));
        res.send(` here is result : ${result}`);
      } else res.send("All parameters should be numbers");
    }
  } else
    res.send(
      `enter two parameters like this /calculator/add?first=1&second=2`
    );
});
//http://localhost:3000/calculator/add?first=1&second=2&second=4
app.get("/calculator/subtract", (req, res) => {
  const { first, second } = req.query;
  if (first && second) {
    if (Number(first) && Number(second)) {
      const difference = Number(first) - Number(second);
      res.send(`The result is ${difference}`);
    } else if (Number(first) && second instanceof Array) {
      if (
        second.every(function (element) {
          return typeof Number(element) === "number";
        })
      ) {
        let result = Number(first);
        second.forEach((number) => (result = result - Number(number)));
        res.send(` here is result : ${result}`);
      } else res.send("All parameters should be numbers");
    }
  } else
    res.send(
      `enter two parameters like this /calculator/subtract?first=1&second=2`
    );
});

app.get("/calculator/multiply", (req, res) => {
  const { first, second } = req.query;
  if (first && second) {
    if (Number(first) && Number(second)) {
      const sum = Number(first) * Number(second);
      res.send(`here is result : ${sum}`);
    } else if (Number(first) && second instanceof Array) {
      if (
        second.every(function (element) {
          return typeof Number(element) === "number";
        })
      ) {
        let result = first;
        second.forEach((number) => (result = result * number));
        res.send(` here is result : ${result}`);
      } else res.send("All parameters should be numbers");
    }
  } else
    res.send(
      `enter two parameters like this /calculator/multiply?first=1&second=2`
    );
});

app.get("/calculator/divide", (req, res) => {
  const { first, second } = req.query;
  if (first && second) {
    if (Number(first) && Number(second)) {
      const sum = Number(first) / Number(second);
      res.send(`here is result : ${sum}`);
    } else if (Number(first) && second instanceof Array) {
      if (
        second.every(function (element) {
          return typeof Number(element) === "number";
        })
      ) {
        let result = Number(first);
        second.forEach((number) => (result = result / Number(number)));
        res.send(` here is result : ${result}`);
      } else res.send("All parameters should be numbers");
    }
  } else
    res.send(
      `enter two parameters like this /calculator/divide?first=1&second=2`
    );
});

app.post("/calculator/multiply", (req, res) => {
  const { first, second } = req.body;
  if (first && second) {
    if (Number(first) && Number(second)) {
      const sum = Number(first) * Number(second);
      res.send(`here is result : ${sum}`);
    } else if (Number(first) && second instanceof Array) {
      if (
        second.every(function (element) {
          return typeof Number(element) === "number";
        })
      ) {
        let result = first;
        second.forEach((number) => (result = result * number));
        res.send(` here is result : ${result}`);
      } else res.send("All parameters should be numbers");
    }
  } else
    res.send(
      `enter two parameters like this /calculator/multiply?first=1&second=2`
    );
});

app.post("/calculator/divide", (req, res) => {
  const { first, second } = req.body;
  if (first && second) {
    if (Number(first) && Number(second)) {
      const sum = Number(first) / Number(second);
      res.send(`here is result : ${sum}`);
    } else if (Number(first) && second instanceof Array) {
      if (
        second.every(function (element) {
          return typeof Number(element) === "number";
        })
      ) {
        let result = first;
        second.forEach((number) => (result = result / number));
        res.send(` here is result : ${result}`);
      } else res.send("All parameters should be numbers");
    }
  } else
    res.send(
      `enter two parameters like this /calculator/divide?first=1&second=2`
    );
});

app.listen(port, console.log(`Calculator:listening on port ${port}`));