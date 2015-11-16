(function () {
  var td = document.querySelectorAll("td");
  var turn = true;
  var gridSize = Math.sqrt(td.length);
  var grid = [];
  var winCondition = 3;

  for (var i = 0; i < gridSize; i++) {
    grid[i] = [];
    for (var j = 0; j < gridSize; j++)
      grid[i].push(td[j + (gridSize * i)]);
  }

  function winGame() {
    for (var i = 0; i < gridSize; i++) {
      for (var j = 0; j < gridSize; j++) {
        [-1, 0, 1].forEach(function(x) {
          [-1, 0, 1].forEach(function(y) {
            var sum = parseInt(grid[i][j].className);
            if (grid[i + x] != undefined && grid[i + x][j + y] != undefined)
            sum += parseInt(grid[i + x][j + y].className)
            if (grid[i + x + x] != undefined && grid[i + x + x][j + y + y] != undefined)
              sum += parseInt(grid[i + x + x][j + y + y].className)
            if (sum == winCondition)
              return true;
            console.log(sum)
          })
        })
      }
    }
  }

  grid[0][0].className = "1";
  grid[0][1].className = "1";
  grid[0][2].className = "1";

  console.log(grid)

  if (winGame())
    console.log("gagné");

})();