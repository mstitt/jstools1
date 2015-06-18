
// displayUser.js
// borrowed from: https://facebook.github.io/jest/docs/tutorial.html

var $ = require('jquery');
var fetchCurrentUser = require('./fetchCurrentUser.js');

$('#button').click(function() {
  fetchCurrentUser(function(user) {
    var loggedText = 'Logged ' + (user.loggedIn ? 'In' : 'Out');
    $('#username').text(user.fullName + ' - ' + loggedText);
  });
});
