$(document).ready(function() {
  game = new Game('0002000002000000');
  // displayBoard();
  displayGrid();
  scoreboard = new ScoreBoard();

  ['up','down','left','right'].forEach(function(dir){
    Mousetrap.bind(dir, function(){
      var currentBoard = game.currentBoard();

      game.move(dir, scoreboard);
      displayScoreBoard(scoreboard);

      var newBoard = game.currentBoard();

      if (currentBoard !== newBoard) {
        game.spawnBlock();
      }

      // displayBoard();
      displayGrid();

      if (game.isOver()){
        alert("gameover");
      }
    }, "keyup");
  });
});
