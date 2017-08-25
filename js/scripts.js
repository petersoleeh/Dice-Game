// var die = Math.floor(Math.random()*6 +1);
// var score;
// if (die === 1) {
//   score = 0;
//   console.log("your rolled "+die+" for a score of " +score)
// } else {
//   score = die;
//   console.log("your rolled "+die+" for a score of " +score)
// }
// business logic
// var player1="";
// var player2="";
//
// var die = function () {
//
//   return Math.floor(Math.random()*6 +1);
// }
//
// function player(turn) {
//
//
// }
$(document).ready(function() {
  $("form#playernames").submit(function(event) {
    event.preventDefault();
    var inputtedPlayername1 = $("input#player1name").val();
    var inputtedPlayername2 = $("input#player2name").val();

    $(".player1name").text(inputtedPlayername1);
    $(".player2name").text(inputtedPlayername2);



  })
});
