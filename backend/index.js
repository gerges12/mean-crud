var express = require("express") ;
var mongoose = require("mongoose") ;
var bodyParser=require('body-parser') ;
var cors= require("cors") ;

var http = require('http') ;

 
var app=express() ;

mongoose.connect('mongodb://localhost:27017/meandb' , { useNewUrlParser: true , useUnifiedTopology: true   }) ;

var port = process.env.port || 8080 ;
app.use(cors()) ;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


var appRoutes = require('./routes/appRoutes') ;

app.use('/',appRoutes) ;

http.createServer(app).listen(port , function(){
    console.log("server listening") ;
}) ;