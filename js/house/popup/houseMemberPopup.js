$(function () {
  $("#modal-open").click(function () {
    $("#popup").css("display", "flex").hide().fadeIn();
  });

  $("#close").click(function () {
    $("#memberName").val("");
    $("#memberImage").val("");
    $("#memberAdvantages").val("");
    $("#memberStyle").val("");
    $("#memberBlogUrl").val("");
    $("#memberMBTI").val("");
    $("#memberSummary").val("");

    modalClose();
  });

  function modalClose() {
    $("#popup").fadeOut();
  }
});
