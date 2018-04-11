$(document).ready(function() {
  // toggle hidden checkbox on
  $(".EnableDisable__item--active").click(function() {
    $(this)
      .closest(".EnableDisable--sm")
      .removeClass("isInactive");
    //set hidden checkbox
  });

  // toggle hidden checkbox off
  $(".EnableDisable__item--inactive").click(function() {
    $(this)
      .closest(".EnableDisable--sm")
      .addClass("isInactive");
    //set hidden checkbox to not checked
  });

  // need at least 1 row at all times.
  var rows = 1;

  // dynamic row is added for slack integrations.
  $("#add-slack").click(function() {
    var row = $(".Item--slacknotifications > div:first").clone(true);
    row.find("input").val("");
    row.insertBefore(this);
    rows++;
    return false;
  });

  //remove row
  $(".removeRowBtn").click(function() {
    if (rows > 1) {
      $(this)
        .closest(".slack-input-row")
        .remove();
      rows--;
    }
    return false;
  });
});