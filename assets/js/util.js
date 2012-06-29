
var util = {
  extend: function (obj, extObj) {
    for (var i in extObj) {
      obj[i] = extObj[i];
    }

    return obj;
  }
};