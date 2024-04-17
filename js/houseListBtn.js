$(".houseListBtn").click(function () {
  if ($(".houseList").css("display") === "none") {
    $(".houseList").css("display", "flex");
  } else {
    $(".houseList").css("display", "none");
  }
});
