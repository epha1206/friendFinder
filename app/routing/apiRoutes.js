//Dependencies
var path = require("path");

//Import friend entries
var friends = require("../data/friends.js");

//Export API routes
module.exports = function(app) {

    //Total list of friends
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    //Add new entries
    app.post('/api/friends', function(req, res) {
        //Retrieve the users input
        var userInput = req.body;
        var userResponses = userInput.scores;

        //Compute best match
        var matchName = '';
        var matchImage = '';
        var totalDifference = 10000;

        //Examine all existing friends
        for (var i = 0; i < friends.length; i++) {
            
            //Compute differences for each question
            var diff = 0;
            for (var j = 0; j < userResponses.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userResponses[j]);
            }

            //If difference is lowest, record match
            if (diff < totalDifference) {
                totalDifference = diff;
                matchName = friends[i].name;
                matchImage = friends[i].photo;
            }
        }

        //add users
        friends.push(userInput);

        //send correct response
        res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
    });
};