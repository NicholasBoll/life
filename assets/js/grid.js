/*globals util, Cell*/

var Grid = (function(){
  "use strict";

  Grid = function (width, height) {
    this.width = width;
    this.height = height;
    this.grid = [];

    this.clear();
  };

  // methods
  util.extend(Grid.prototype, {

    clear: function () {
      for (var i=0; i<this.width * this.height; i++) {
        this.grid[i] = new Cell(0);
      }
      console.log('cells', this.grid);
    },

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

    setCellByIndex: function (index, state) {
      this.grid[index].setState(state);
    },

    getCellAtCoord: function (x, y) {
      return this.grid[this.getIndex(x, y)];
    },

    parseFromArray: function (grid) {

      for (var i=0; i<grid.length; i++) {
        this.setCellByIndex(i, +grid[i]);
      }
    },

    getNeighbors: function (index) {
      var neighbors = [],
          coord = this.getCoords(index);

      if (coord.x > 0 && coord.y > 0) neighbors.push(this.grid[this.getIndex(coord.x - 1, coord.y - 1)]); // top left
      if (coord.y > 0) neighbors.push(this.grid[this.getIndex(coord.x, coord.y - 1)]); // top
      if (coord.x < this.width-1 && coord.y > 0) neighbors.push(this.grid[this.getIndex(coord.x + 1, coord.y - 1)]); // top right
      if (coord.x < this.width-1) neighbors.push(this.grid[this.getIndex(coord.x + 1, coord.y)]); // right
      if (coord.x < this.width-1 && coord.y < this.height-1) neighbors.push(this.grid[this.getIndex(coord.x + 1, coord.y + 1)]); // bottom right
      if (coord.y < this.height-1) neighbors.push(this.grid[this.getIndex(coord.x, coord.y + 1)]); // bottom
      if (coord.x > 0 && coord.y < this.height-1) neighbors.push(this.grid[this.getIndex(coord.x - 1, coord.y + 1)]); // bottom left
      if (coord.x > 0) neighbors.push(this.grid[this.getIndex(coord.x - 1, coord.y)]); // left

      return neighbors;

    },

    nextGeneration: function () {

      var next = new Grid(this.width, this.height);

      this.grid.forEach(function (cell, index) {

        var neighbors = this.getNeighbors(index);

        next.setCellByIndex(index, cell.getNextState(neighbors));
      }, this);

      return next;
    },

    toString: function () {
      var row,
          grid = [];

      for (var y = 0; y < this.height; y++) {

        row = [];
        for (var x = 0; x < this.width; x++) {
          row.push(this.getCellAtCoord(x, y).getState());
        }
        grid.push(row.join(','));
      }

      return grid.join('\n');

    }
  });

  return Grid;

})();