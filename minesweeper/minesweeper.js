document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    { 
      row: 0, 
      col: 0, 
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: null,
    }, { 
      row: 0, 
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: null,
    }, { 
      row: 0, 
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true, 
      surroundingMines: null,
    }, { 
      row: 0, 
      col: 3,
      isMine: false,
      isMarked: false,
      hidden: true, 
      surroundingMines: null,
    }, { 
      row: 1, 
      col: 0,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 1,
    }, { 
      row: 1, 
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 1,
    }, { 
      row: 1, 
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: null, 
    }, { 
      row: 1, 
      col: 3,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: null,
    }, { 
      row: 2, 
      col: 0,
      isMine: true,
      isMarked: false,
      hidden: true,
      surroundingMines: null,
    }, { 
      row: 2, 
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true, 
      surroundingMines: 1,
    }, { 
      row: 2, 
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true, 
      surroundingMines: null,
    }, { 
      row: 2, 
      col: 3,
      isMine: false,
      isMarked: false,
      hidden: true, 
      surroundingMines: null,
    }, { 
      row: 3, 
      col: 0,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 1,
    }, { 
      row: 3, 
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 1, 
    }, { 
      row: 3, 
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true, 
      surroundingMines: null,
    }, { 
      row: 3, 
      col: 3,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: null,
    } 
  ]
}

function startGame () {
  // Don't remove this function call: it makes the game work!
  for (var i = 0; i < board.cells.length; i++) {
    var surroundingMines = countSurroundingMines(board.cells[i]);
    board.cells[i].SurroundingMines = surroundingMines;
  }
  document.addEventListener('click', checkForWin);
  document.addEventListener('contextmenu', checkForWin);
  lib.initBoard()
  let button = document.querySelector('.hidden');
  button.addEventListener('mouseup', listenMouseButton)
}


// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
  for(i=0;i<board.cells.length;i++){
    if (board.cells[i].isMine && board.cells[i].isMarked === false ) {
      return;
    }else if(board.cells[i].isMine===false && board.cells[i].hidden === true){
      return;
    }
  }

  lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  var countedMines = 0;
  
  for(i=0;i<surrounding.length;i++){
    if(board.cells[i].isMine == true){
      countedMines ++;
    }
  }

  return countedMines;
}

function resetGame(){
  document.location.reload(true);
}
