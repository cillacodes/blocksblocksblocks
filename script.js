$(document).ready(function() {

  $('button').click(function() {
  $('#appendDiv').append('<div class="box"><button class="deleteMe">X</button><div>');
  $('.box:last').css('backgroundColor', randomColors())
});


$('#appendDiv').on("click", ".box", function() {
  $(this).css({backgroundColor: "black" });
});

$('#appendDiv').on('click', '.deleteMe', function() {
  $(this).closest('.box').remove();
});


});

var colors = ['00', '33', '66', '99', 'cc', 'ff'];
var random = function() {
  return Math.floor(Math.random()*6);
};

var randomColors = function() {
  var r = colors[random()];
  var g = colors[random()];
  var b = colors[random()];
  return "#"+r+g+b;
};
