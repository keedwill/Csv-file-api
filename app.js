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

const fileModel = require("./models/file");
const app = express();
const EE = require("./models/e");

const config = require("./config");
const mongoose = require("mongoose");
// connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

app.listen(config.PORT, () => {
  mongoose.connect(config.MONGOB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`app is listening on port ${config.PORT}`);
});

const db = mongoose.connection;

db.on("error", (err) => console.log(err));

db.once("open", () => {
  app.post("/upload", upload.single("file"), function (req, res) {
    console.log(req.body.type);
    let datas;
    csv()
      .fromFile(req.file.path)
      .then((data) => {
        data.forEach((e) => {
          const cases = new EE({
            ID,
            age,
            sex,
            city,
            province,
            country,
            latitude,
            longitude,
            geo_resolution,
            date_onset_symptoms,
            date_admission_hospital,
            date_confirmation,
            symptoms,
            lives_in_Wuhan,
            travel_history_dates,
            travel_history_location,
            reported_market_exposure,
            additional_information,
            chronic_disease_binary,
            chronic_disease,
            source,
            sequence_available,
            outcome,
            date_death_or_discharge,
            notes_for_discussion,
            location,
            admin3,
            admin2,
            admin1,
            country_new,
            admin_id,
            data_moderator_initials,
            field34,
            field35,
            field36,
            field37,
            field38,
            field39,
            field40,
            field41,
            field42,
            field43,
            field44,
            field45,
          });
        });
        EE.collection(data, function () {
          if (err) {
            return;

            console.error(err);
          } else {
            console.log("Multiple documents inserted to Collection");
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  app.get("", function (req, res) {
    res.send("working");
  });
});
