/* global $ */

var storage= "";
var storageRef= "";

$(document).ready(function() {
    const firebaseConfig = {
        apiKey: "AIzaSyDMww8fUeHSn7Yqs5vKtl4LmQJbtpgcg5s",
        authDomain: "cyoa-new-version.firebaseapp.com",
        databaseURL: "https://cyoa-new-version.firebaseio.com",
        projectId: "cyoa-new-version",
        storageBucket: "cyoa-new-version.appspot.com",
        messagingSenderId: "24675808271",
        appId: "1:24675808271:web:7b543e8fc14d561124df7a",
        measurementId: "G-XZDX3D1LK8"
      };
      firebase.initializeApp(firebaseConfig);
       storage = firebase.storage();
        storageRef = storage.ref();
    


    var firstLevel = game.levels.start;
    renderLevel(firstLevel);

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

function renderLevel(level) {
    $("#prompt").text(level.message);
    $("#choices").empty();

    var choices = level.choices;
    if (choices) {
        for (var i = 0; i < choices.length; i++) {
            var choice = choices[i];
            $("#choices").append("<button class='btn btn-outline-secondary' data-next-level='" + choice.nextLevel + "'>" + choice.text + "</button>");
        }
    }

    setMusic(level);
    setImage(level);
}

var currentMusic = "";

function setMusic(level) {
    var music = level.music || game.music || "";

    if (currentMusic !== music) {
        currentMusic = music;
        $("#music").attr("src", "./music/" + currentMusic);
    }
}

function setImage(level) {
    var image = level.background_image || game.background_image || "";
    var imageRef = storageRef.child(image);
    imageRef.getDownloadURL().then(function(url) {
        //do stuff here
        $("#background-image").css("background-image", "url(" + url + ")");

      }).catch(function(error) {
          console.log("error");
        })
      };

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
            if (typeof callback === 'function') callback();
        });

        return this;
    },
});
