(function () {
  var td = document.querySelectorAll("td");
  var turn = true;
  for (var i = 0; i < td.length; i++) {
    td[i].addEventListener("click", function() {
      if (this.style.background)
        return;
      if (turn) {
        this.style.background = "red";
        turn = false
      }
      else {
        this.style.background = "black";
        turn = true;
      }
    })
  }
})();