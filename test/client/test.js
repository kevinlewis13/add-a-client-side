'use strict';

var expect = require('chai').expect;
var greet = require('../../app/js/greet');

describe('greet module', function() {
  it('should greet the users', function() {
    expect(greet()).to.eql('hello all the users!');
  });
});
