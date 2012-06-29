/*globals document, Cell, Grid, Board*/

var App = (function(){
  "use strict";

  var inputGrid = new Grid(5, 5),
      board = new Board(document.getElementById('main'), inputGrid),
      generation = 1;

  var parseInput = function () {

    var input = document.getElementById('input'),
        grid = input.value.replace(/\n/g, ',').split(',');

    return grid;
  };

  // next button event listener
  document.getElementById('next').addEventListener('click', function () {
    // Setup the inputGrid
    //inputGrid.parseFromArray(parseInput());

    inputGrid.nextGeneration();
    board.draw(inputGrid);
  });


  //inputGrid.parseFromArray(parseInput());
  board.draw();

  return {
    inputGrid: inputGrid
  };

})();