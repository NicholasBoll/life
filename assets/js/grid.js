/*globals util, Cell*/

var Grid = (function(){
  "use strict";

  Grid = function (width, height) {
    this.width = width;
    this.height = height;
    this.grid = [];
  };

  // methods
  util.extend(Grid.prototype, {

    getIndex: function (x, y) {
      if (x < 0 || y < 0 || x >= this.width || y >= this.height) {
        throw new Error('Out of bounds');
      }
      return x + y * this.width;
    },

    getCoords: function (index) {
      var x = index % this.width,
          y = (index - x) / this.width;
      return {
        x: x,
        y: y
      };
    },

    parseFromArray: function (grid) {

      for (var i=0; i<grid.length; i++) {
        this.grid[i] = new Cell(+grid[i]);
      }
    },

    getNeighbors: function (index) {

    },

    nextGeneration: function () {

      this.grid.forEach(function (cell, index) {

        var neighbors = this.getNeighbors(index);

        cell.getNextState(neighbors);
      }, this);
    }
  });

  return Grid;

})();