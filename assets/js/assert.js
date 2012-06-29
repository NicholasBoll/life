/*globals document*/

var assert = (function(){

  var body = document.body;

  var logText = function (message, given, expected, deep) {

    var equals = (deep) ? deepEqual(given, expected) : given === expected;

    var dt = document.createElement('dt');
    var dd = document.createElement('dd');

    dt.innerHTML = (message);
    dd.className = equals ? 'passed' : 'failed';
    dd.innerHTML = (equals ? '<b>Passed!</b>' : '<b>Failed!</b>') + ' Given: ' + objToString(given, deep) + ', Expected: ' + objToString(expected, deep);

    body.appendChild(dt);
    body.appendChild(dd);
  };

  var isEqual = function (description, given, expected, deep) {
    logText (description, given, expected, deep);
  };

  var deepEqual = function (given, expected) {
    for (var i in given) {
      if (given[i] !== expected[i]) {
        return false;
      }
    }

    return true;
  };

  var objToString = function (obj, deep) {
    var str = [];

    if (!deep) {
      return obj;
    } else {
      console.log(obj);
      for (var i in obj) {
        str.push(i+':'+obj[i]);
      }
    }

    return '{'+str.join(',')+'}';
  };

  return {
    isEqual: isEqual
  };
})();