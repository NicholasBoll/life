/*globals document, Cell, Grid*/

var App = (function(){
  "use strict";

  var inputGrid = new Grid(5, 5),
      generation = 1;

  var parseInput = function () {

    var input = document.getElementById('input'),
        grid = input.value.replace(/\n/g, ',').split(',');

    return grid;
  };

  var exportOutput = function () {
    
    var output = document.getElementById('output');

    output.value = inputGrid.nextGeneration().toString();
  };

  // next button event listener
  document.getElementById('next').addEventListener('click', function () {
    // Setup the inputGrid
    inputGrid.parseFromArray(parseInput());

    exportOutput();
  });

  return {
    inputGrid: inputGrid
  };

})();