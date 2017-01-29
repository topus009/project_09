$(function() {
    "use strict"
    var name;
    var fullname;
    var city = $("#location");
    var email = $("#email");
    var v_city;
    var v_email;
    var loggedin = $(".logged_in").hide();
    var ul_li = $("#choose_city ul li");
    var ul = $("#choose_city ul");
    var cc = $("#choose_city");
    var t = 500;

    function store() {
        name = $("input#fullname").val();
        v_city = city.val();
        v_email = email.val();
    }

    var reg_fullname = "^[A-ZА-Я]([a-zA-Zа-яА-Я]|\.| |-|')+$";
    var reg_location;
    var reg_username = "^[a-zA-Z][a-zA-Z0-9-_\.]{1,12}$";
    var reg_password;

  $("#fullname").attr("pattern",reg_fullname);
  $("#username").attr("pattern",reg_username);

    ul.addClass("dis");
    cc.on("click",function() {
      if (ul.hasClass("dis")) {
        ul.removeClass("dis");
      }
      else {
        ul.addClass("dis");
      }
      if (ul.hasClass("border_")) {
        ul.removeClass("border_");
      }
      else {
        ul.addClass("border_");
      }
    });
    ul_li.on("click",function() {
      if (ul.hasClass("dis")) {
        ul.removeClass("dis");
      }
      else {
        var loc = $(this).attr('value');
        city.attr("value", loc);
        ul.addClass("dis");
      }
    });
    ul.on("click",function() {
      if (ul.hasClass("dis")) {
        ul.removeClass("dis");
      }
      else {
        ul.addClass("dis");
      }
    });

    function init() {
        $("input[type='submit']").on("click", function() {
            store();
            $(".login_inner").animate({
                'opacity': '0'
            }, t);
            setTimeout(function() {
                $("#preloader ").css({
                    'display': 'block'
                });
            });
            setTimeout(function() {
                $(".login").fadeOut(500, function() {
                    $(this).remove();
                });
            }, 5000);
            setTimeout(function() {
                loggedin.fadeIn(t, function() {
                    $(this).show();
                    $(this).find('h2').html("Добро пожаловать, " + name);
                    $(this).find('#d_city').html("Ваш город: " + v_city);
                    $(this).find('#d_email').html("Ваша почта: " + v_email);
                });
            }, 5500);
            setTimeout(function() {
                $(".logged_in h2, .logged_in #d_city, .logged_in #d_email").animate({
                    'opacity': '1'
                }, t);
            }, 6000);
        });
    };
    init();
});
