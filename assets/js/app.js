/*globals document, Cell, Grid*/

var App = (function(){
  "use strict";

  var inputGrid = new Grid(5, 5);
  var outputGrid = new Grid(5, 5);

  var parseInput = function () {
    var input = document.getElementById('input'),
        grid = input.value.replace(/\n/g, ',').split(',');

    return grid;
  };

  // Setup the inputGrid
  inputGrid.parseFromArray(parseInput());
  console.log('inputGrid', inputGrid, inputGrid.nextGeneration());

  return {
    inputGrid: inputGrid,
    outputGrid: outputGrid
  };

})();