//get the info stored if any
$("#hour8 .task-info").val(localStorage.getItem("hour8"));
$("#hour8.5 .task-info").val(localStorage.getItem("hour8.5"));
$("#hour9 .task-info").val(localStorage.getItem("hour9"));
$("#hour9.5 .task-info").val(localStorage.getItem("hour9.5"));
$("#hour10 .task-info").val(localStorage.getItem("hour10"));
$("#hour10.5 .task-info").val(localStorage.getItem("hour10.5"));
$("#hour11 .task-info").val(localStorage.getItem("hour11"));
$("#hour11.5 .task-info").val(localStorage.getItem("hour11.5"));
$("#hour12 .task-info").val(localStorage.getItem("hour12"));
$("#hour12.5 .task-info").val(localStorage.getItem("hour12.5"));
$("#hour13 .task-info").val(localStorage.getItem("hour13"));
$("#hour13.5 .task-info").val(localStorage.getItem("hour13.5"));
$("#hour14 .task-info").val(localStorage.getItem("hour14"));
$("#hour14.5 .task-info").val(localStorage.getItem("hour14.5"));
$("#hour15 .task-info").val(localStorage.getItem("hour15"));
$("#hour15.5 .task-info").val(localStorage.getItem("hour15.5"));
$("#hour16 .task-info").val(localStorage.getItem("hour16"));
$("#hour16.5 .task-info").val(localStorage.getItem("hour16.5"));
$("#hour17 .task-info").val(localStorage.getItem("hour17"));
$("#hour17.5 .task-info").val(localStorage.getItem("hour17.5"));

// makes a little clock that shows current time, updates every second
var timeDisplayEl = $("#time-display");
function displayTime() {
  var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
  timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000);

//Used two instances of rightNow bc it kept outsmarting me
var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
$(document).ready(function () {
  // saveBtn click listener
  $(".saveBtn").on("click", function () {
    // Get values from the html/jquery
    var text = $(this).siblings(".task-info").val();
    var time = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.setItem(time, text);
  });

  function checkTime() {
    //get current number of hours.
    var currentTime = moment().hour();

    // loop over time blocks to check against current time for class
    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("hour")[1]);
      if (blockTime === currentTime) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else if (blockTime < currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (blockTime > currentTime) {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }

  checkTime();
});

//Liked this as an idea but having trouble making it do the thing, if working it clears local storage on button press. in theory
function clearBtn() {
  localStorage.clear();
}
$(".clearBtn").on("click", clearBtn());
