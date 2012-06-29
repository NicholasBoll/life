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

    getIndex: function(x, y) {
      if (x < 0 || y < 0 || x >= this.width || y >= this.height) {
        throw new Error('Out of bounds');
      }
      return x + y * this.width;
    },

    parseFromArray: function (grid) {

      for (var i=0; i<grid.length; i++) {
        this.grid[i] = new Cell(+grid[i]);
      }
    }
  });

  return Grid;

})();