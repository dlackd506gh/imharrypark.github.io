function Game(str){
  this.board = [[],[],[],[]];
  for (var i = 0; i < str.length; i ++){
    this.board[Math.floor(i/4)].push(parseInt(str[i]));
  }
}

Game.prototype.toString = function(){
  return this.board.join("\n").replace(/,/g, ' ');
};

Game.prototype.move = function(dir_str, scoreboard){
  if (dir_str === 'left') {
    this.moveLeft(scoreboard);
  }
  else if (dir_str === 'right') {
    this.moveRight(scoreboard);
  }
  else if (dir_str === 'up') {
    this.moveUp(scoreboard);
  }
  else if (dir_str === 'down') {
    this.moveDown(scoreboard);
  }
};

Game.prototype.spawnBlock = function(){
  var rowIndex = rand(0, 3);
  var colIndex = rand(0, 3);
  // spawn block has 90% chance of being 2, 10% chance of being 4.
  if (rand(1, 10) === 4) {
    var spawnNum = 4;
  }
  else {
    var spawnNum = 2;
  }

  if (this.board[rowIndex][colIndex] === 0){
    this.board[rowIndex][colIndex] = spawnNum;
  }
  else {this.spawnBlock();}
};


Game.prototype.moveLeft = function(scoreboard){
  for (var i = 0; i < 4; i ++){
    this.board[i] = this.board[i].shiftLeft(scoreboard);
  }
};

Game.prototype.moveRight = function(scoreboard){
  for (var i = 0; i < 4; i ++){
    this.board[i] = this.board[i].shiftRight(scoreboard);
  }
};

Game.prototype.moveUp = function(scoreboard){
  this.board = _.zip.apply(null, this.board);
  this.moveLeft(scoreboard);
  this.board = _.zip.apply(null, this.board);
};

Game.prototype.moveDown = function(scoreboard){
  this.board = _.zip.apply(null, this.board);
  this.moveRight(scoreboard);
  this.board = _.zip.apply(null, this.board);
};

// Helpers

Game.prototype.currentBoard = function(){
  return _.flatten(this.board).join('');
};

Game.prototype.isOver = function(){
  var self = this;
  var clone = jQuery.extend({}, self);
  var currentBoard = clone.currentBoard();

  var checkArr = [];
  ['up','down','left','right'].forEach(function(dir){
    clone.move(dir);
    var newBoard = clone.currentBoard();
    if (currentBoard !== newBoard){
      checkArr.push(0);
    }
  });

  return checkArr.length === 0;
};


Array.prototype.shiftLeft = function(scoreboard){
  var new_array = _.reject(this, function(num){ return num === 0;});

  for (var i = 0; i < 4; i ++){
    if (new_array[i] === new_array[i+1] && new_array[i]){
      new_array[i] *= 2;
      new_array.splice(i+1,1);

      scoreboard.point += new_array[i]
    }
    else {
      while (new_array.length < 4){
        new_array.push(0);
      }
    }
  }
  return new_array;
};

Array.prototype.shiftRight = function(scoreboard){
  var new_array = _.reject(this.reverse(), function(num){ return num === 0;});

  for (var i = 0; i < 4; i ++){
    if (new_array[i] === new_array[i+1] && new_array[i]){
      new_array[i] *= 2;
      new_array.splice(i+1,1);

      scoreboard.point += new_array[i]
    }
    else {
      while (new_array.length < 4){
        new_array.push(0);
      }
    }
  }
  return new_array.reverse();
};

var rand = function(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


function ScoreBoard(){
  this.point = 0
}