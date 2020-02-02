"use strict"

const port = process.env.DBWEBB_PORT || 1337;

const express = require("express");
const app = express();


app.use((req, rest, next) => {
  console.info(`Got request on ${req.path} (${req.method}).`);
  next();
})

app.get("/", (req,res) => {
  res.send("Hello");
});

app.get("/about", (req,res) => {
  res.send("About smth");
});

app.get("/secret", (req,res) => {
  res.send("about a secret");
});

app.listen(port, () => {
  console.info(`Server is listening on port ${port}.`);

  console.info("Available routes are: ");
  app._router.stack.forEach((r) => {
    if(r.route && r.route.path) {
      console.info(r.route.path);
    }
  });

});
