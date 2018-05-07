//Dependencies
var path = require("path");

//Export html routes
module.exports = function(app) {
    //Home page
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    //Survey page
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/server.html'));
    });
};