/*globals document, Cell, Grid, Board, setInterval*/

var App = (function(){
  "use strict";

  var inputGrid = new Grid(50, 50),
      board = new Board(document.getElementById('main'), inputGrid),
      generation = 1,
      interval;

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

  document.getElementById('start').addEventListener('click', function () {
    interval = setInterval(function () {
      inputGrid.nextGeneration();
      board.draw(inputGrid);
    }, 200);
  });

  document.getElementById('stop').addEventListener('click', function () {
    clearInterval(interval);
  });


  //inputGrid.parseFromArray(parseInput());
  board.draw();

  return {
    inputGrid: inputGrid
  };

})();