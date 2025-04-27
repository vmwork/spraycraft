$(document).ready(function () {
  //SCROLL TOP
  var scroll = 0,
    scrollTop = $("#scroll-top");

  $(window).scroll(function () {
    var $this = $(this),
      scroll = $this.scrollTop();

    if (scroll > 150) {
      scrollTop.addClass("active");
    } else if (scroll < 100) {
      scrollTop.removeClass("active");
    }
  });

  scrollTop.click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  /*mob_menu*/
  $(".menu_mob").click(function () {
    $(".menu_mob").toggleClass("active_drop_men");
    $(".header-menu").toggleClass("active");
  });

  $(".menu-before").click(function () {
    $(".menu_mob").toggleClass("active_drop_men");
    $(".header-menu").toggleClass("active");
  });

  $(".go-to").click(function () {
    $(".menu_mob").toggleClass("active_drop_men");
    $(".header-menu").toggleClass("active");
  });

  /*  uncor */
  $(".go-to").click(function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;

    $("body,html").animate({ scrollTop: top }, 1500);
  });

  /* modal */
  $(".open-modal").click(function () {
    $(".modal-block").hide();
    $(".modal").css("display", "flex");
    var name = "." + $(this).attr("data-openModal");
    $(name).css("display", "block");
  });
  $(".close-modal").click(function () {
    $(".modal").hide();
    $(".modal-block").hide();
  });

  var modal = $(".modal")[0];

  $(window).click(function () {
    if (event.target == modal) {
      $(".modal-block").hide();
      $(".modal").hide();
    }
  });

  // advantages slider
  var swiperAdvantages = new Swiper(".swiper-advantages", {
    spaceBetween: 38,
    slidesPerColumn: 6,
    slidesPerView: 1,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".pagination-advantages",
      clickable: true,
    },
    breakpoints: {
      991: {
        slidesPerColumn: 1,
      },
    },
  });

  // case slider
  var swiperCase = new Swiper(".swiper-case", {
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    navigation: {
      prevEl: ".case-arrow-prev",
      nextEl: ".case-arrow-next",
    },
    pagination: {
      el: ".pagination-case",
      clickable: true,
    },
  });

  // toggle phones
  $(".phones-mobile").click(function () {
    $(".header-phones-list").toggleClass("active");
  });

  $("main").click(function () {
    $(".header-phones-list").removeClass("active");
  });

  // show more
  $(".read-more-btn").click(function () {
    $(".read-more-btn").hide();
    $(".hide-mobile").show();
    $(".last-text").addClass("active");
  });

  function openModal() {
    $(".modal-block").hide();
    $(".modal").css("display", "flex");
    $(".modal-form").css("display", "block");
  }
  var modalForm = document.querySelector(".modal-form") || false;
  if (modalForm) {
    setTimeout(openModal, 30000);
  }

  // animation scroll
  $(".anim_top").animated("fadeInUp");
  $(".anim_down").animated("fadeInDown");
  $(".anim_left").animated("fadeInLeft");
  $(".anim_right").animated("fadeInRight");
  $(".title").animated("rubberBand");
  $(".bounce").animated("bounce");
  $(".rollin").animated("rollIn");
});

function shakeButton() {
  let button = document.querySelector(".btn");
  button.classList.add("shake");

  setTimeout(function () {
    button.classList.remove("shake");
  }, 500);
}

setInterval(shakeButton, 3000);

function closeTnaksModal() {
  $(".modal").hide();
}

function sendForm(form_id, res_div) {
  var msg = $("#" + form_id).serialize();

  $.ajax({
    type: "POST",
    url: "send.php",
    data: msg,
    success: function (data) {
      $(".modal").css("display", "flex");
      $(".modal-block").hide();
      $(".modal-thanks").css("display", "block");
      console.log("success");
    },
    error: function (xhr, str) {
      $(".modal").css("display", "flex");
      $(".modal-block").hide();
      $(".modal-thanks").css("display", "block");
      console.log("error");
    },
  });
  $(".input").val("");
  setTimeout(closeTnaksModal, 3000);
}
