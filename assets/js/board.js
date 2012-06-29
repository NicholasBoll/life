/*globals util, Grid*/

var Board = (function(){
  "use strict";

  Board = function (element, grid) {
    this.element = element;
    this.grid = grid;

    this.init();
  };

  // methods
  util.extend(Board.prototype, {

    init: function () {
      this.element.addEventListener('click', this.toggleCell.bind(this));
    },

    draw: function () {
      var html = [],
          gridArray = this.grid.toArray();


      gridArray.forEach(function (row, y) {
        html.push('<div class="row">');
        row.forEach(function (col, x) {
          html.push('<div class="pixel '+(col ? 'on' : 'off')+'" data-coords="'+x+','+y+'"></div>');
        });
        html.push('</div>');
      });

      this.element.innerHTML = html.join('');
    },

    toggleCell: function (e) {
      var coords = e.target.getAttribute('data-coords').split(',');
      this.grid.toggleCell(+coords[0], +coords[1]);

      this.draw();
    }
  });

  return Board;

})();