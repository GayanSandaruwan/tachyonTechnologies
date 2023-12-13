var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser'); 
// var particlesJS = require('particles.js');
var port = process.env.PORT || 8080; 
//adding https certificate
var fs = require('fs-extra');
var https = require('https'); 
// var http = require('http');
// var enforce = require('express-sslify');
// app.use(enforce.HTTPS({ trustProtoHeader: true }));
require('dotenv').config()

// var options = {
//   ca: fs.readFileSync(path.join(__dirname, process.env.CA_PATH)),
//   key: fs.readFileSync(path.join(__dirname, process.env.KEY)),
//   cert: fs.readFileSync(path.join(__dirname, process.env.CERT_PATH))
// };

app.use(express.static('public'));

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
const api=require('./router.js');
app.use('/api',api);

// const router=express.Router();
// router.post('/contact',function(req,res){
//   console.log("In contact section");
//  });
 

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {
//   console.log('callback - particles.js config loaded');
// });
app.use("/",function(req,res){
  res.sendFile(path.join(__dirname + "/index.html"));
});



app.listen(port);
console.log("Server is up on port : "+port);