const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const bodyParser = require("body-parser");
//const csv = require("csv-parser");
const fs = require("fs");
const multer = require("multer");
const upload = multer({ dest: "tmp/csv/" });
//const csv = require('fast-csv')
const csv = require("csvtojson");
const morgan = require("morgan");
const _ = require("lodash");
const connectDB = require("./connection/db");
const fileModel = require("./models/file");
const app = express();
// connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

app.post("/upload", upload.single("file"), function (req, res) {
  console.log(req.body.type);

  csv()
    .fromFile(req.file.path)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
