const express = require("express");
const { exec } = require("child_process");
const bodyParser = require("body-parser");
const app = express();

var allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

app.use(allowCrossDomain, bodyParser.json());

app.post("/open-device", (req, res) => {
  const selectedDevice = req.body.selectedDevice;
  const emulatorCommand = `emulator -avd ${selectedDevice}`;

  exec(emulatorCommand, (error, stdout, stderr) => {
    if (error) {
      res.status(500).send("Error starting emulator");
      return;
    }
    res.send("Emulator started successfully");
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
