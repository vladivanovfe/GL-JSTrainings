let board = "",
    boardSize = 8;
for (let y = 0; y < boardSize; y++) {
  	for (let x = 0; x < boardSize; x++) {
      if ((x + y) % 2 == 0) {
      	board += "#";
      } else {
        board += " ";
      }
    }
  	board += "\n";
}

console.log(board);