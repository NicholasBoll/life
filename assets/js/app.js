/*globals Cell, Grid*/

var App = (function(){
  "use strict";

  var inputGrid = new Grid(5, 5);
  var outputGrid = new Grid(5, 5);

  return {
    inputGrid: inputGrid,
    outputGrid: outputGrid
  };

})();