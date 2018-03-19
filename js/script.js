$(document).ready(function() {
  // Set up the first level
  var firstLevel = game.levels.start;
  renderLevel(firstLevel);

  // Set background music if specified
  setMusic(firstLevel);
  setImage(firstLevel);
  /*
  if (game.music) {
    $("#music").attr("src", "./music/" + game.music);
  }
  */

  if (game.background_image) {
    $("#background-image").css("background-image", "url(./img/" + game.background_image + ")");
  }

  // When user clicks a choice, go to the next level
  $("body").on("click", "#choices button", function() {
    var nextLevel = $(this).attr("data-next-level");
    $("#wrapper").animateCss("fadeOut", function() {
      renderLevel(game.levels[nextLevel]);
      $("#wrapper").removeClass("fadeOut");
      $("#wrapper").addClass("fadeIn");
    });
  });
});

var currentMusic = "";

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

  setMusic(level);
  setImage(level);
}

function setMusic(level) {
  var music = "";
  if (level.music) {
    music = level.music;
  } else if (game.music) {
    music = game.music;
  }

  if (currentMusic !== music) {
    currentMusic = music;
    $("#music").attr("src", "./music/" + currentMusic);
  }
}

function setImage(level) {
  var image = "";
  if (level.background_image) {
    image = level.background_image;
  } else if (game.background_image) {
    image = game.background_image;
  }

  $("#background-image").css("background-image", "url(./img/" + image + ")");
  //$("#music").attr("src", "./music/" + currentMusic);
  /*if (currentMusic !== music) {
    currentMusic = music;
    $("#music").attr("src", "./music/" + currentMusic);
  }*/
}

$.fn.extend({
  animateCss: function(animationName, callback) {
    var animationEnd = (function(el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    })(document.createElement('div'));

    this.addClass('animated ' + animationName).one(animationEnd, function() {
      //$(this).removeClass('animated ' + animationName);

      if (typeof callback === 'function') callback();
    });

    return this;
  },
});