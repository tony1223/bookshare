
/**
 * Module dependencies.
 */

var dao = require("./dao");
var express = require('express');
var routes = require('./routes')(dao);
var app = express();
var CookieStore = require('cookie-sessions');
var config = require("./config");

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  
  app.use(require('less-middleware')({ src: __dirname + '/public/' ,force:true ,compress: false/*, debug:true*/}));
  app.use(CookieStore({ secret: config.secret }));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});
app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.home);
app.get('/bookshare/', routes.index);
app.get('/bookshare/show/:id', routes.show);

app.listen(3000);
console.log("Express server listening on port:"+new Date());
