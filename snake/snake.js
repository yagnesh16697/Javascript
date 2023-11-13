function init() {
  var canvas = document.getElementById("snake");
  W = H = canvas.width = canvas.height = 600;
  // pen is used to draw on canvas
  pen = canvas.getContext("2d");

  snake = {
    initial_length: 5,
    color: "blue",
    cells: [],
    direction: "right",
    cellSize: 30,
    createSnake: function () {
      for (var i = this.initial_length; i > 0; i--) {
        this.cells.push({
          x: i,
          y: 0,
        });
      }
    },

    drawSnake: function () {
      for (var i = 0; i < this.cells.length; i++) {
        pen.fillRect(
          this.cells[i].x * this.cellSize,
          this.cells[i].y * this.cellSize,
          this.cellSize - 2,
          this.cellSize - 2
        );
      }
    },
  };

  snake.createSnake();
}

function draw() {
  snake.drawSnake();
}

function update() {}

function gameloop() {
  draw();
  update();
}

init();

var f = setInterval(gameloop, 1000);
