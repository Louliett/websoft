"use strict"

const port = process.env.DBWEBB_PORT || 1337;
const express = require("express");
const app = express();
const routeIndex = require("./routes/index.js");
const middleware = require("./middleware/index.js");
const path = require("path");
const routeToday = require("./routes/today.js");


app.use(middleware.logIncomingToConsole);
app.use(express.static(path.join(__dirname, "report")));
app.use("/today", routeToday);
app.use("/", routeIndex);
app.listen(port, logStartUpDetailsToConsole);
app.set("view engine", "ejs");


function logStartUpDetailsToConsole() {
  let routes = [];

  //find what routes are supported
  app._router.stack.forEach((middleware) => {
    if(middleware.route) {
      routes.push(middleware.route);
    } else if(middleware.name === "router") {
        middleware.handle.stack.forEach((handler) => {
          let route;

          route = handler.route;
          route && routes.push(route);
        });
    }
  });

  console.info(`Server is listening on port ${port}.`);
  console.info("Available routes are: ");
  console.info(routes);
}
