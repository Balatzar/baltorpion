(function () {
  var td = document.querySelectorAll("td");
  var turn = true;
  var gridSize = Math.sqrt(td.length);
  var grid = [];
  var winCondition = 3;

  for (var i = 0; i < td.length; i++) {
    td[i].addEventListener("click", function() {
      if (this.className)
        return;
      if (turn) {
        this.className = "a1";
        turn = false;
      } else {
        this.className = "a9";
        turn = true;
      }
      if (winGame())
        if (turn)
          endGame(1);
        else
          endGame(0);
    })
  }

  function endGame(player) {
    if (player)
      alert("Joueur 2 gagne !");
    else
      alert("Joueur 1 gagne !");
    location.reload(true);
  }

  for (var i = 0; i < gridSize; i++) {
    grid[i] = [];
    for (var j = 0; j < gridSize; j++)
      grid[i].push(td[j + (gridSize * i)]);
  }

  function winGame() {
    for (var i = 0; i < gridSize; i++) {
      for (var j = 0; j < gridSize; j++) {
        for (var x = -1; x < 2; x++) {
          for (var y = -1; y < 2; y++) {
            var sum = parseInt(grid[i][j].className[1]);
            if (grid[i + x] != undefined && grid[i + x][j + y] != undefined && (x != y || (x == 1 && y == 1))) {
              sum += parseInt(grid[i + x][j + y].className[1]);
            }
            if (grid[i + x + x] != undefined && grid[i + x + x][j + y + y] != undefined && (x != y || (x == 1 && y == 1)))
              sum += parseInt(grid[i + x + x][j + y + y].className[1]);
            console.log(sum);
            if (sum == 3 || sum == 27)
              return true;
          }
        }
      }
    }
  }

  console.log(grid)


})();