//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Set up express
var app = express();
var PORT = process.env.PORT || 8080;

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, './app/public')));

//Set up express to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//Routing map
require(path.join(__dirname, './app/routing/apiRoutes.js'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes.js'))(app);

//Listener, Starts the server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});