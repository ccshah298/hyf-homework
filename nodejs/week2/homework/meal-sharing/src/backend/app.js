const express = require("express");
const app = express();

const mealsRouter = require("./api/meals-router");
const reservationsRouter = require("./api/reservation-router");
const reviewsRouter = require("./api/review-router");

// app.use binds middleware to your application. You can give app.use a path and router. The mini router will take care of all requests with the path
app.use("/meals", mealsRouter);
app.use("/reservations",reservationsRouter);
app.use("/reviews",reviewsRouter);

app.get("/", async (request, response) => {
    response.send("Meal Sharing Web app");
  });  

module.exports = app;
