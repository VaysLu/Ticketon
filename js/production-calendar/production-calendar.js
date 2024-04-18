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

var indexMonth = month;
var addBtn = $("#js-event__add");
var saveBtn = $("#js-event__save");
var closeBtn = $("#js-event__close");
var winCreator = $("#js-event__creator");
var inputDate = $(this).data();
// today = year + "-" + month + "-" + day;

if (month < 10) {
  today = `${year}-0${month}-${day}`;
} else {
  today = year + "-" + month + "-" + day;
}

// ------ управление функциями -------

// по умолчанию выставление рабочих дней и выходных
$('div.c-cal__data').each(function () {
  if ($(this).attr('day-week') === 'Sunday' || $(this).attr('day-week') === 'Saturday') {
    $(this).addClass('event');
    $(this).addClass('event--important');
    $(this).attr('data-notes', '');
    $(this).attr('data-tags', 'important');
  }
  if ($(this).attr('day-week') !== 'Sunday' & $(this).attr('day-week') !== 'Saturday') {
    $(this).addClass('event');
    $(this).addClass('event--event');
    $(this).attr('data-notes', '');
    $(this).attr('data-tags', 'event');
  }
})


//высветите значение текущего дня
dataCel.each(function () {
  if ($(this).data("day") === today) {
    $(this).addClass("isToday");
    fillEventSidebar($(this));
  }
});


// Открываем текстовое поле при выборе праздничный день
$('.form-control').change(function () {
  if ($(this).val() === 'birthday') {
    $('.text-notes').removeClass('display-none');
  } else if (!$('.text-notes').hasClass('display-none')) {
    $('.text-notes').addClass('display-none')
  }
})

//создатель события
addBtn.on("click", function () {
  winCreator.addClass("isVisible");
  $(".panel").addClass("overlay");

  dataCel.each(function () {

    if ($(this).hasClass("isSelected")) {
      today = $(this).data("day");
      // console.log(today);
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
  $(".panel").removeClass("overlay");
  if (!$('.text-notes').hasClass('display-none')) {
    $('.text-notes').addClass('display-none');
  }
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
        $(this).attr("data-tags", inputTag);

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
      if (!$('.text-notes').hasClass('display-none')) {
        $('.text-notes').addClass('display-none');
      }
    }
  });

  winCreator.removeClass("isVisible");
  $(".panel").removeClass("overlay");
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




//Определяем активный календарь
$(`div.tabel-month-${year}`).addClass('active-year');



// Кнопка сохранения всех элементов и значений
function saveData() {
  var data = [];
  $('div.active-year > div.c-main > div.c-cal__row > div.c-cal__data').each(function () {
    if (typeof $(this).attr('data-tags') === 'undefined' || $(this).attr('data-tags') === '') {
      $(this).attr('data-tags', '');
    }
    if (typeof $(this).attr('data-notes') === 'undefined' || $(this).attr('data-notes') === '') {
      $(this).attr('data-notes', '');
    }

    data.push([
      $(this).attr('data-day'),
      $(this).attr('data-tags'),
      $(this).attr('data-notes'),
    ])
  })
  console.log(data);
    $.post("ajax.php", {
             act: "product_calendar",
             data: data
         },
             function (data) {
                console.log(data);
               
             }, "json"
         );
}


// Вперёд на 1 год
function nextYear(year) {
  $(`.tabel-month-${year}`).addClass('pos-abs');
  $(`div.tabel-month-${year}`).removeClass('active-year');
  const newYear = ++year;
  // $('.c-paginator__year').text(newYear);
  $('.c-monthyear__year').text(newYear);
  $(`div.tabel-month-${newYear}`).addClass('active-year');

  disabled(newYear);
  formAjax(newYear);
}
// Назад на 1 год
function prevYear(year) {
  $(`div.tabel-month-${year}`).removeClass('active-year');
  const newYear = --year;
  $(`div.tabel-month-${newYear}`).addClass('active-year');
  $(`.tabel-month-${newYear}`).removeClass('pos-abs');
  // $('.c-paginator__year').text(newYear);
  $('.c-monthyear__year').text(newYear);
  disabled(newYear);

  formAjax(newYear);
}

function formAjax(result) {
  $("input[name='date-year']").val(result);
 $("#c-monthYear__form").submit();
}

var yearFull = dateObj.getUTCFullYear();
// Запрет на переключение года
function disabled(year) {
  if (year <= yearFull) {
    $('.prev-year').addClass('disabled');
    $('.prev-year').attr('disabled', true);
  } else {
    $('.prev-year').removeClass('disabled');
    $('.prev-year').attr('disabled', false);
  }

  if (year >= yearFull + 1) {
    $('.next-year').addClass('disabled');
    $('.next-year').attr('disabled', true);
  } else {
    $('.next-year').removeClass('disabled');
    $('.next-year').attr('disabled', false);
  }
}
disabled($('.c-monthyear__year').text())
// disabled($('.c-paginator__year').text())




if (window.screen.width <= 640) {
  console.log('Ширина экрана меньше 640px');
  $('div.c-cal__data').each(function () {
    $(this).on('click', function() {
      $('.c-aside').addClass('active-aside');
      $(".panel").addClass("overlay");

      const closeBtn = document.createElement('div');
      closeBtn.classList.add('close-aside');
      document.querySelector('.active-aside').append(closeBtn);

      addBtn.on("click", function () {
        $('.c-aside').removeClass('active-aside');
      })
      closeBtn.addEventListener('click', () => {
        $('.c-aside').removeClass('active-aside');
        $(".panel").removeClass("overlay");
      })
    })
  })
}