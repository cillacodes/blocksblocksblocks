$(document).ready(function() {

  $('button').click(function() {
  $('#appendDiv').append('<div class="box"><div>');
});

$('#appendDiv').on("click", ".box", function() {
  $(this).css({backgroundColor: "black" });
});


});
