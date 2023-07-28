// Create web server
var express = require("express");
var app = express();
// Add HTTP request logger
var morgan = require("morgan");
app.use(morgan("combined"));
// Add body parser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Add HTTP response headers
var helmet = require("helmet");
app.use(helmet());
// Add CORS support
var cors = require("cors");
app.use(cors());
// Add MongoDB support
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var ObjectID = mongodb.ObjectID;
var mongoURL = "mongodb://localhost:27017/itc298midterm";
// Add HTTP response headers
var helmet = require("helmet");
app.use(helmet());
// Add CORS support
var cors = require("cors");
app.use(cors());
// Add MongoDB support
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var ObjectID = mongodb.ObjectID;
var mongoURL = "mongodb://localhost:27017/itc298midterm";
// Add MongoDB support
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var ObjectID = mongodb.ObjectID;
var mongoURL = "mongodb://localhost:27017/itc298midterm";
// Add MongoDB support
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var ObjectID = mongodb.ObjectID;
var mongoURL = "mongodb://localhost:27017/itc298midterm";
// Add MongoDB support
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var ObjectID = mongodb.ObjectID;
var mongoURL = "mongodb://localhost:27017/itc298midterm";
// Add MongoDB support
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var ObjectID = mongodb.ObjectID;
var mongoURL = "mongodb://localhost:27017/itc298midterm";
// Add MongoDB support
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var ObjectID = mongodb.ObjectID;
var mongoURL = "mongodb://localhost:27017/itc298midterm";
// Add MongoDB support
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var ObjectID = mongodb.ObjectID;
var mongoURL = "mongodb://localhost:27017/itc298midterm";
// Add MongoDB support
var mongodb = require