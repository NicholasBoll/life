/*globals util, Grid*/

var Board = (function(){
  "use strict";

  Board = function (element) {
    this.element = element;
  };

  // methods
  util.extend(Board.prototype, {

    draw: function (grid) {
      var html = [],
          gridArray = grid.toArray();


      gridArray.forEach(function (row) {
        html.push('<div class="row">');
        row.forEach(function (col, index) {
          html.push('<div class="pixel '+(col ? 'on' : 'off')+'"></div>');
        });
      });

      this.element.innerHTML = html.join('');
    }
  });

  return Board;

})();