var express = require('express')
const router=express.Router();
var bodyParser = require('body-parser'); 
var fs=require('fs-extra');
const sgMail = require('@sendgrid/mail');

// const api=require('./routes.js');

router.post('/contact',function(req,res){
   console.log("In contact section" + req.body.message);
   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
   const msg = {
     to: ['sudeepa.14@cse.mrt.ac.lk', 'gayankavirathne.14@cse.mrt.ac.lk','darshana.14@cse.mrt.ac.lk'],
     from: 'tachyonUserContact@techyon.lk',
     subject: 'New Message About ' +req.body.subject,
     text: 'My name is '+req.body.name +"and I want to know about "+req.body.message,
     html: 'Subject - <strong>'+req.body.subject+'</strong>'+'<br/>'+'My name is '+'<strong>'+req.body.name+'</strong>'+"<br/> Email - "+'<strong>'+req.body.email+"<br/> Messege - "+'<strong>'+req.body.message+'</strong>'+"<br/> Mobile - "+'<strong>'+req.body.mobile+'</strong>',
   };

   sgMail.send(msg);
// console.log('body: ' + JSON.stringify(req.body));
   console.log("Message sent");
   res.send("OK");
  });

module.exports = router;