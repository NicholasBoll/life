/*globals util*/

var Cell = (function(){
  "use strict";

  var Cell = function (state) {
    this.state = state;
  };

  util.extend(Cell.prototype, {

    setState: function (state) {
      this.state = state;
    },

    getState: function () {
      return this.state;
    },

    getNextState: function (neighbors) {
      var aliveCells = 0;

      neighbors.forEach(function (cell) {
        if (cell.getState()) {
          aliveCells++;
        }
      }, this);

      // if this cell is alive
      if (this.getState()) {
        // under-population
        if (aliveCells < 2) {
          return 0;
        }

        // survival
        if (aliveCells === 2 || aliveCells === 3) {
          return 1;
        }

        // over-population
        if (aliveCells > 3) {
          return 0;
        }
      }

      // if this cell is dead
      if (!this.getState()) {
        if (aliveCells === 3) {
          return 1;
        }
      }

      // all other cases the cell is dead
      return 0;

    }
  });

  return Cell;

})();