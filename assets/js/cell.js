/*globals util*/

var Cell = (function(){
  "use strict";

  var Cell = function (state) {
    this.state = state;
  };

  util.extend(Cell.prototype, {

    getNextState: function (neighbors) {

    }
  });

  return Cell;

})();