'use strict';

var greet = require('./greet');
document.write(greet());
var profileList = document.getElementById('profilelist');

var request = require('superagent');

request
  .get('/api/profiles')
  .end(function (err, res) {
    if (err) return console.log(err);

    var profiles = JSON.parse(res.text);

    profiles.forEach(function (profile) {
      var profileEl = document.createElement('li');
      profileEl.innerHTML = profile.name;
      profileList.appendChild(profileEl);

    });
  });
