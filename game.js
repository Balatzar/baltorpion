(function () {
  var turn = 0;
  var gridSize = 3;
  var winCondition = 3;

  function createGame() {
    var table = document.querySelector("table");
    for (var i = 0; i < gridSize; i++) {
      var tr = table.insertRow(0);
      for (var j = 0; j < gridSize; j++) {
        tr.insertCell(0)
      }
    }
  }

  createGame();
  var td = document.querySelectorAll("td");

  for (var i = 0; i < td.length; i++) {
    td[i].addEventListener("click", function() {
      if (this.className)
        return;
      this.className = !(turn % 2) ? "player1" : "player2";
      ++turn;
      if (winGame(this.className))
        endGame(this.className);
      else if (turn == 9)
        endGame();
    })
  }

  function winGame(currentPlayer) {
    for (var i = 0; i < gridSize; i++) {
      for (var j = 0; j < gridSize; j++) {
        for (var x = -1; x < 2; x++) {
          for (var y = -1; y < 2; y++) {
            var points = 0
            if (td[i * gridSize + j].className == currentPlayer)
              ++points;
            if (td[(i + x) * gridSize + (j + y)] != undefined && (x != y || (x == 1 && y == 1)))
              if (td[(i + x) * gridSize + (j + y)].className == currentPlayer)
                ++points;
            if (td[(i + x + x) * gridSize + (j + y + y)] != undefined && (x != y || (x == 1 && y == 1)))
              if (td[(i + x + x) * gridSize + (j + y + y)].className == currentPlayer)
                ++points;
            if (points == 3)
              return true;
          }
        }
      }
    }
    return false;
  }

  function endGame(player) {
    if (player)
      alert(player + " gagne !");
    else
      alert("Ex aequo !");
    location.reload(true);
  }

})();
