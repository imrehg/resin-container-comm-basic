const express = require("express");
const app = express();

app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

// Receiving data and print it to logs
app.post("/data", (request, response) => {
  // Do something with the data
  console.log(request.body);
  // Send response
  response.send("OK");
});

// Set listening port from the environment
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
