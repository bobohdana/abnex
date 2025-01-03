const express = require("express");
const fs = require('fs');
const cors = require("cors");
const multer = require("multer");
const axios = require("axios");
const nodemailer = require("nodemailer");

const router = express.Router();
const app = express();
const upload = multer({ dest: 'uploads/' });

require("dotenv").config();

const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  }
});

const mailOptions = ({ values, file }) => ({
  from: process.env.EMAIL,
  to: 'bohdanastetsenko@gmail.com',
  subject: 'A New Form',
  html: `<div>
    ${Object.keys(values).map(key => `
      <mark>${key}:</mark> ${values[key]}
    `)}
  </div>`,
  attachments: file && [{
    filename: file.originalname,
    path: file.path,
  }]
})

router.post("/form", upload.single('file'), async (req, res) => {
  const { token, ...values } = req.body;

  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.REACT_APP_SECRET_KEY}&response=${token}`
    );

    if (response.data.success) {
      transporter.sendMail(mailOptions(
        { values, file: req.file }
      ), (error, info) => {
        if (process.env.NODE_ENV !== 'production') {
          if (error) {
            console.log('error', error);
          } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send("The form is sent");
          }
        }

        if (!error) {
          fs.unlink(req.file.path, (err) => {
            if (err && err.code == 'ENOENT') {
                console.info("File doesn't exist, won't remove it.");
            } else if (err) {
                console.error("Error occurred while trying to remove file");
            } else {
              console.info(`removed`);
            }
          });
        }
      });
    } else {
      res.send("Error verifying reCAPTCHA");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
   }
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});