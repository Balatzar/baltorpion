(function () {
  var td = document.querySelectorAll("td");
  var turn = 0;
  var gridSize = Math.sqrt(td.length);
  var grid = [];
  var winCondition = 3;

  for (var i = 0; i < td.length; i++) {
    td[i].addEventListener("click", function() {
      if (this.className)
        return;
      this.className = turn % 2 == 0 ? "player1" : "player2";
      if (winGame(this.className)) {
          endGame(this.className);
          return;
        }
      turn++;
      if (turn == 9)
        endGame();
    })
  }

  function endGame(player) {
    if (player)
      alert(player + " gagne !");
    else
      alert("Ex aequo !");
    location.reload(true);
  }

  for (var i = 0; i < gridSize; i++) {
    grid[i] = [];
    for (var j = 0; j < gridSize; j++)
      grid[i].push(td[j + (gridSize * i)]);
  }

  function winGame(currentPlayer) {
    for (var i = 0; i < gridSize; i++) {
      for (var j = 0; j < gridSize; j++) {
        for (var x = -1; x < 2; x++) {
          for (var y = -1; y < 2; y++) {
            var points = 0
            if (grid[i][j].className == currentPlayer)
              points++
            if (grid[i + x] != undefined && grid[i + x][j + y] != undefined && (x != y || (x == 1 && y == 1)))
              if (grid[i + x][j + y].className == currentPlayer)
                ++points;
            if (grid[i + x + x] != undefined && grid[i + x + x][j + y + y] != undefined && (x != y || (x == 1 && y == 1)))
              if (grid[i + x + x][j + y + y].className == currentPlayer)
                ++points;
            if (points == 3)
              return true;
          }
        }
      }
    }
    return false;
  }

})();