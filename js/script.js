
$(document).ready(function() {
  var firstLevel = game.levels.start;
  renderLevel(firstLevel);

  $("body").on("click", "#choices button", function() {
    var nextLevel = $(this).attr("data-next-level");
    renderLevel(game.levels[nextLevel]);
  });
});

function renderLevel(level) {
  $("#prompt").text(level.message);
  $("#choices").empty();

  var choices = level.choices;
  if (choices) {
    for(var i = 0; i < choices.length; i++) {
      var choice = choices[i];
      $("#choices").append("<button class='btn btn-outline-secondary' data-next-level='"  + choice.nextLevel + "'>" + choice.text + "</button>");
    }
  }
}

