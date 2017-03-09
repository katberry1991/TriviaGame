var counter = 0,
    score = 0;


var content = [{"name":"Martian Manhunter","answer":"DC"},{"name":"Otto Octavius","answer":"Marvel"},{"name":"Venom","answer":"Marvel"},{"name":"Green Goblin","answer":"Marvel"},{"name":"Tony Stark","answer":"Marvel"},{"name":"Diana","answer":"DC"},{"name":"Hal Jordan","answer":"DC"},{"name":"Storm","answer":"Marvel"},{"name":"Gambit","answer":"Marvel"},{"name":"Scott Summers","answer":"Marvel"},{"name":"The Joker","answer":"DC"},{"name":"Magneto","answer":"Marvel"},{"name":"Riddler","answer":"DC"},{"name":"Charles Xavier","answer":"Marvel"},{"name":"Lex Luther","answer":"DC"},{"name":"Poison Ivy","answer":"DC"},{"name":"Havoc","answer":"Marvel"},{"name":"Hank McCoy","answer":"Marvel"},{"name":"Green Lantern","answer":"DC"},{"name":"Pepper Pots","answer":"Marvel"},{"name":"Commissioner Gordon","answer":"DC"},{"name":"Steve Rogers","answer":"DC"},{"name":"Rogue","answer":"Marvel"},{"name":"Pyro","answer":"Marvel"}];


var $name = $('.name'),
    $generate = $('.generate'),
    $result = $('.results'),
    $score = $('.score'),
    $thanks = $('.thanks'),
    $options = $('.options');

var marvelApp = {};

marvelApp.init = function() {
  var selection = content[counter];
  type = selection["answer"];
  $name.html(selection["name"]);
  $generate.hide();
  $result.hide();
  $score.hide();
  $thanks.hide();
}


marvelApp.generate = function() {


  
  if (counter < content.length) {
    var selection = content[counter];
    $name.html(selection["name"]);
    type = selection["answer"];  

    $result.hide();
    $score.hide();
    $name.show();
    $options.show();
  
  } else {
    $thanks;
  }

  $generate.hide();
}

$('.choice').click(function(e) {
  var chosenAnswer = e.target.id;  
  $result.show();
  $score.show();
  $name.hide();
  $options.hide();


  if (type === "Marvel") {
    fullAnswer = "Marvel Universe Character";
  } else {
    fullAnswer = "DC Universe Character";
  }

  if (chosenAnswer == "Marvel") {
    $result.html("It's a " + fullAnswer + ".");
 
  } else {
    $result.html("It's a " + fullAnswer + ".");
  }
  $generate.show();
  
});
  $generate.show();
$(document).ready(function() {
  marvelApp.init();
});

$generate.on('click', function() {
  marvelApp.generate();
});