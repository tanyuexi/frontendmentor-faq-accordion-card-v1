// expand answer
$(".question-and-answer .flex-container-space-between").click(function() {
  $(this).find(".expand-icon img").toggleClass("flip-X");
  $(this).find(".question").toggleClass("question-expanded");
  $(this).find(".answer").toggleClass("answer-collapsed");
  resizeMask();
});

// match image mask with card
var cardSpaceholder = $(".card .spaceholder");

function resizeMask() {
  var offset = cardSpaceholder.offset();
  var height = cardSpaceholder.height();
  var width = cardSpaceholder.width();
  var borderRadius = $(".card").css("border-radius");
  $(".cover-img-desktop .mask").css({
    "position": "absolute",
    "top": offset.top,
    "left": offset.left,
    "height": height,
    "width": width,
    "border-radius": borderRadius + " 0 0 " + borderRadius
  });
}

$(document).ready(function() {
  resizeMask();

  $(window).resize(function() {
    resizeMask();
  });
});
