var mongodb = require('mongodb');
	//$ = require("jQuery");

var mongodbServer = new mongodb.Server('localhost', 27017, { auto_reconnect: true, poolSize:100});
var db = new mongodb.Db('bookshare', mongodbServer);

/* open db */
db.ObjectId  = mongodb.BSONPure.ObjectID;
module.exports = db;
