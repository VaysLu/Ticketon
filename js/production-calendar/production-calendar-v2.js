//глобальные переменные
var monthEl = $(".c-main");
var dataCel = $(".c-cal__cel");
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1;
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
var monthText = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь"
];
// if (month == 10 || month == 11 || month == 12) {

// } else {
//   month = `0` + `${month}`;
// }


// Найдём текущий год и добавим его на страницу
let yearEl = document.querySelector('.c-paginator__year');
yearEl.textContent = year;

var indexMonth = month;
var addBtn = $(".js-event__add");
var saveBtn = $(".js-event__save");
var closeBtn = $(".js-event__close");
var winCreator = $(".js-event__creator");
var inputDate = $(this).data();
today = year + "-" + month + "-" + day;

// console.log(month);
// console.log(today);


// ------ управление функциями -------


//высветите значение текущего дня
dataCel.each(function () {
  if ($(this).data("day") === today) {
    $(this).addClass("isToday");
    fillEventSidebar($(this));
  }
});



//создатель события
addBtn.on("click", function () {
  winCreator.addClass("isVisible");
  $("body").addClass("overlay");

  dataCel.each(function () {

    if ($(this).hasClass("isSelected")) {
      today = $(this).data("day");
      console.log(today);
      document.querySelector('input[name="date"]').value = today;
    } else {
      document.querySelector('input[name="date"]').value = today;
    }
  });

  $(function () {
    $(".js-hide-search").select2(
      {
        dropdownParent: $('#addEvent'),
        minimumResultsForSearch: 1 / 0,
      });
  });

});
closeBtn.on("click", function () {
  winCreator.removeClass("isVisible");
  $("body").removeClass("overlay");
});
saveBtn.on("click", function () {
  var inputDate = $("input[name=date]").val();
  var inputNotes = $("textarea[name=notes]").val();
  var inputTag = $("select[name=tags]")
    .find(":selected")
    .val();

  dataCel.each(function () {
    if ($(this).data("day") === inputDate) {
      if (inputNotes != null) {
        $(this).attr("data-notes", inputNotes);
      }
      $(this).addClass("event");
      if (inputTag != null) {
        if ($(this).hasClass('event')) {

        }
        if ($(this).hasClass("event--event")) {
          $(this).removeClass("event--event");
          $(this).addClass("event--" + inputTag);
        } else if ($(this).hasClass("event--important")) {
          $(this).removeClass("event--important");
          $(this).addClass("event--" + inputTag);
        } else if ($(this).hasClass("event--birthday")) {
          $(this).removeClass("event--birthday");
          $(this).addClass("event--" + inputTag);
        } else {
          $(this).addClass("event--" + inputTag);
        }

      }
      fillEventSidebar($(this));
    }
  });

  winCreator.removeClass("isVisible");
  $("body").removeClass("overlay");
  $("#addEvent")[0].reset();

  $('.js-hide-search').select2('destroy');

});

//заполнить боковую панель информацией о событии
function fillEventSidebar(self) {
  $(".c-aside__event").remove();
  var thisNotes = self.attr("data-notes");
  var thisImportant = self.hasClass("event--important");
  var thisBirthday = self.hasClass("event--birthday");
  var thisEvent = self.hasClass("event");

  switch (true) {
    case thisImportant:
      $(".c-aside__eventList").append(
        "<p class='c-aside__event c-aside__event--important'>" +
        "Выходной день" +
        " <span> • " +
        thisNotes +
        "</span></p>"
      );
      break;
    case thisBirthday:
      $(".c-aside__eventList").append(
        "<p class='c-aside__event c-aside__event--birthday'>" +
        "Праздничный день" +
        " <span> • " +
        thisNotes +
        "</span></p>"
      );
      break;
    case thisEvent:
      $(".c-aside__eventList").append(
        "<p class='c-aside__event'>" +
        "Рабочий день" +
        " <span> • " +
        thisNotes +
        "</span></p>"
      );
      break;
  }
};

for (let i = 0; i < dataCel.length; i++) {
  if (!dataCel[i].hasAttribute('data-day')) {
    dataCel[i].classList.add('visib');
  }
}


dataCel.on("click", function () {
  var thisEl = $(this);
  var thisDay = $(this)
    .attr("data-day")
    .slice(8);
  var thisMonth = $(this)
    .attr("data-day")
    .slice(5, 7);

  fillEventSidebar($(this));

  $(".c-aside__num").text(thisDay);
  $(".c-aside__month").text(monthText[thisMonth - 1]);

  dataCel.removeClass("isSelected");
  thisEl.addClass("isSelected");

});

//заполните боковую панель текущим днем
$(".c-aside__num").text(day);
$(".c-aside__month").text(monthText[month - 1]);
