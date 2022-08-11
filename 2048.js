var bState = [];
var grid = 4;
var movement = 0;
var validMoves = 0; 
var score = 0;
var c = document.getElementById("canvas");

function openState() {
  //generate two random tiles in the last two rows of the board
  var start = grid * (grid - 2);
  var stop = grid ** 2;
  var tile1 = getRandomInt(start, stop)
  var tile2 = getRandomInt(start, stop)
  for(i = 0; i < grid**2; i++) {
    if(i == tile1 || i == tile2) {
      bState.push(2);
    } else {
      bState.push(0);
    }
  }
  buildBoard();
}

function buildBoard() {
  var board = '';
  var tEdgeProto = ' _____';
  var tNL = ' \n';
  var bEdgeProto = '|_____';
  var lrEdgeProto = '|     ';
  var lrbNL = '|\n';
  var tEdge = tEdgeProto.repeat(grid) + tNL;
  var bEdge = bEdgeProto.repeat(grid) + lrbNL;
  var lrEdge = lrEdgeProto.repeat(grid) + lrbNL;
  board += tEdge;
  for (i = 0; i < grid; i++) {
    board += lrEdge;
    for (j = 0; j < grid; j++) {
      var current = (i * grid) + j;
      if (bState[current]) {
        var tileLength = bState[current].toString().length;
        var pad = ' ';
        var padLength = (5 - tileLength) / 2;
        var lPad = Math.floor(padLength);
        var rPad = Math.ceil(padLength);
        board += '|' + pad.repeat(lPad) + bState[current] + pad.repeat(rPad);
      } else {
        board += lrEdgeProto;
      };
    };
    board += lrbNL;
    board += bEdge;
  };
  c.innerHTML = board + "\nScore: " + score;
};

function getTiles() {
  //pick the non-zero parts to work logic on and store in array
  tiles = [];
  bState.forEach(function(element,index){
    if (element) {
      tiles.push(index);
    }
  });
  //store the values in reverse order for calculating from right-to-left and bottom-to-top (for moving right or down)
  if(Math.sign(movement) > 0){
    tiles.reverse();
  }
}

function logic() {
  //move tiles before combining
  tileShift();
  tileCombine();
  //if either of the previous functions changed the board, shift one last time and add a new tile
  if(validMoves) {
    tileShift();
    addTile();
  }
}

function tileShift() {
  getTiles();
  tiles.forEach(function(tile) {
    //the actual shifting is separated so that it can be recursive
    checkShift(tile, tile + movement);
  })
}

function checkShift(tile, nextTile) {
  //if the move is valid and there is nothing in the next space, make the move and check the next space until you hit an edge or another tile
  if(valid(tile, nextTile) && !bState[nextTile]) {
    updateBoard(tile, nextTile)
    validMoves = 1;
    checkShift(nextTile, nextTile + movement)
  }
}

function tileCombine() {
  getTiles();
  tiles.forEach(function(tile) {
    if((bState[tile] == bState[tile + movement]) && (valid(tile, tile + movement))) {
      updateBoard(tile, tile + movement)
      score += bState[tile + movement];
      validMoves = 1;
    };
  })
}

function updateBoard(tile, newTile) {
  bState[newTile] += bState[tile]
  bState[tile] = 0;
}

function addTile(){
  //add a new tile to the board in an unoccupied space
  newTile = getRandomInt(0, grid**2)
  if (!bState[newTile]) {
    bState[newTile] = 2;
  } else {
    addTile();
  }
};

//flagged for potential removal
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function valid(index, newIndex) {
  vector = Math.abs(movement);
  oldRow = Math.floor(index/grid)
  newRow = Math.floor(newIndex/grid);
  //if moving horizontally, and newIndex is on a different row
  if(vector == 1 && (newRow != oldRow)) {
      return false;
    //if moving vertically and newIndex is outside the bounds of the grid
    } else if(vector == grid && ((newIndex < 0) || (newIndex >= (grid**2)))) {
      return false;
    } else {
      return true;
    }
}

window.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "ArrowDown":
      movement = grid;
      draw();
      break;
    case "ArrowUp":
      movement = -grid;
      draw();
      break;
    case "ArrowLeft":
      movement = -1;
      draw();
      break;
    case "ArrowRight":
      movement = 1;
      draw();
      break;
  }
}, true);

function draw() {
  //make movements if possible and when finished, clear the movement and movement check, then redraw board
  logic();
  movement = 0;
  validMoves = 0;
  buildBoard();
}

openState();
