/*globals document*/

var assert = (function(){

  var body = document.body;

  var logText = function (message, given, expected) {

    var dt = document.createElement('dt');
    var dd = document.createElement('dd');

    dt.innerHTML = (message);
    dd.className = given == expected ? 'passed' : 'failed';
    dd.innerHTML = (given == expected ? '<b>Passed!</b>' : '<b>Failed!</b>') + ' Given: ' + given + ', Expected: ' + expected;

    body.appendChild(dt);
    body.appendChild(dd);
  };

  var isEqual = function (description, given, expected) {
    logText (description, given, expected);
  };

  return {
    isEqual: isEqual
  };
})();