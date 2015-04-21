var displayBoard = function(){
  console.log(game.toString());
  $('#board').empty();
  game.board.forEach(function(i){
    $('#board').append("<p>" + i.join('  ') + "</p>");
  });
};


var displayGrid = function(){
  var boardFlat = _.flatten(game.board).join(',').replace(/0/g, ' ').split(',');

  var newArr = [];

  while (boardFlat.length) {
    newArr.push(boardFlat.splice(0,4))
  };


  $('#table').empty();

  [0,1,2,3].forEach(function(n){
    $('#table').append("<tr id=" + n.toString() + "></td>")
  });

  [0,1,2,3].forEach(function(i){
    $('#' + i.toString()).append("<td class = 'tile" + newArr[i][0].toString() + "'>" + newArr[i][0].toString() + "</td>")
    $('#' + i.toString()).append("<td class = 'tile" + newArr[i][1].toString() + "'>" + newArr[i][1].toString() + "</td>")
    $('#' + i.toString()).append("<td class = 'tile" + newArr[i][2].toString() + "'>" + newArr[i][2].toString() + "</td>")
    $('#' + i.toString()).append("<td class = 'tile" + newArr[i][3].toString() + "'>" + newArr[i][3].toString() + "</td>")
  })
};


var displayScoreBoard = function(scoreboard){
  $('#point').empty();
  $('#point').append(scoreboard.point.toString());
};