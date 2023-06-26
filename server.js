// import fs from 'fs';


const express = require('express');
const bodyParser = require('body-parser');
const fs = require("fs");
const qr = require('qr-image');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('./public'));

const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post('/', (req, res) => {
  
  //create QR Code here
  const url = req.body.qrLink;
  var qr_svg = qr.image(url);
  qr_svg.pipe(fs.createWriteStream(__dirname + "/public/images/qr_img.png"));

  //Process what you sent from previous page first and then push user to page showing qrcode you made
  fs.writeFile("URL.txt", req.body.qrLink , (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });


  // res.send('<h1>Thanks for submitting</h1><br><p>The result is : ' + req.body.qrLink + '</p>');
   res.sendFile(__dirname + "/public/qrImage.html");
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });