/*globals document, Cell, Grid, Board*/

var App = (function(){
  "use strict";

  var inputGrid = new Grid(5, 5),
      board = new Board(document.getElementById('main')),
      generation = 1;

  var parseInput = function () {

    var input = document.getElementById('input'),
        grid = input.value.replace(/\n/g, ',').split(',');

    return grid;
  };

  // next button event listener
  document.getElementById('next').addEventListener('click', function () {
    // Setup the inputGrid
    inputGrid.parseFromArray(parseInput());

    inputGrid = inputGrid.nextGeneration();

    document.getElementById('input').value = inputGrid.toString();
    board.draw(inputGrid);
  });


  inputGrid.parseFromArray(parseInput());
  board.draw(inputGrid);

  return {
    inputGrid: inputGrid
  };

})();