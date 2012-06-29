/*globals util, Grid, document*/

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
      this.element.addEventListener('mousedown', this.mouseDown.bind(this), false);
      //this.element.addEventListener('click', this.toggleCell.bind(this));
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

    mouseDown: function (e) {
      console.log('mousedown');
      var dataCoords = e.target.getAttribute('data-coords');

      // Make sure we have coords. If we don't, this is not a cell
      if (!dataCoords) return;

      var coords = dataCoords.split(','),
          cell = this.grid.getCellAtCoord(+coords[0], +coords[1]);

      this.cellState = !cell.getState();
      cell.setState(this.cellState);

      // add event listeners
      this.mouseUpBinding = this.mouseUp.bind(this); // reference the binding for later removal
      document.addEventListener('mouseup', this.mouseUpBinding, false);

      this.mouseMoveBinding = this.mouseMove.bind(this);
      document.addEventListener('mousemove', this.mouseMoveBinding, false);

      this.draw();
    },

    mouseUp: function (e) {
      console.log('mouseUp');
      document.removeEventListener('mouseup', this.mouseUpBinding, false);
      document.removeEventListener('mousemove', this.mouseMoveBinding, false);

      this.mouseUpBinding = null;
      this.mouseMoveBinding = null;
    },

    mouseMove: function (e) {
      var dataCoords = e.target.getAttribute('data-coords');

      if (!dataCoords) return;

      var coords = dataCoords.split(','),
          cell = this.grid.getCellAtCoord(+coords[0], +coords[1]);

      // set the state and draw only if we need to
      if (cell.getState() !== this.cellState) {
      
        cell.setState(this.cellState);
        this.draw();
      }
    },

    toggleCell: function (e) {
      var coords = e.target.getAttribute('data-coords').split(',');
      this.grid.toggleCell(+coords[0], +coords[1]);

      this.draw();
    }
  });

  return Board;

})();