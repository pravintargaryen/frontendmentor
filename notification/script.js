$("#read").on("click", function () {
  $("#counter").text(0);
  $(".notification").removeClass("new");
  $("#read").text("Mark all as unread");
});
