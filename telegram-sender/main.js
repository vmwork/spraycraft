$(".telegram-form").on("submit", function (event) {
  event.stopPropagation();
  event.preventDefault();

  let form = this,
    submit = $(".submit", form),
    data = new FormData(),
    files = $("input[type=file]", form);

  $(".submit", form).val("Отправка...");
  $("input, textarea", form).prop("disabled", true);

  data.append("name", $('[name="name"]', form).val());
  data.append("phone", $('[name="phone"]', form).val());

  files.each(function (key, file) {
    let cont = $(file).prop("files");
    if (cont) {
      $.each(cont, function (key, value) {
        data.append(key, value);
      });
    }
  });

  $.ajax({
    url: "telegram-sender/ajax.php",
    type: "POST",
    data: data,
    cache: false,
    dataType: "json",
    processData: false,
    contentType: false,
    xhr: function () {
      let myXhr = $.ajaxSettings.xhr();

      if (myXhr.upload) {
        myXhr.upload.addEventListener(
          "progress",
          function (e) {
            if (e.lengthComputable) {
              let percentage = (e.loaded / e.total) * 100;
              percentage = percentage.toFixed(0);
              $(".submit", form).html(percentage + "%");
            }
          },
          false
        );
      }

      return myXhr;
    },
    error: function (jqXHR, textStatus) {
      // Тут выводим ошибку
    },
    complete: function () {
      // Тут можем что-то делать ПОСЛЕ успешной отправки формы
      console.log("Complete");
      $(".modal-block").hide();
      $(".modal").hide();
      $("input, textarea", form).prop("disabled", false);
      submit.val("Отправить"); // Восстановить текст кнопки отправки
      form.reset();
    },
  });

  return false;
});
