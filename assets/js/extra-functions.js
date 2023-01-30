function is_homepage() {
  return "/" == window.location.pathname || "/nl/" == window.location.pathname;
}
jQuery(document).on("click", ".hamburger", function () {
    
  jQuery(this).toggleClass("is-active"),
    jQuery(".menu-small").toggleClass("open closed");
}),
  jQuery(document).ready(function (o) {
    o(window).scroll(function () {
      o(this).scrollTop() < 200
        ? o(".back-to-top").fadeOut()
        : o(".back-to-top").fadeIn();
    }),
      o(".back-to-top").on("click", function () {
        return o("html, body").animate({ scrollTop: 0 }, "slow"), !1;
      });
  }),
  jQuery(document).ready(function (o) {
    o(window).width() >= 768 && !is_homepage()
      ? o(".menu-top").fadeIn()
      : o(window).width() < 768 && !is_homepage()
      ? (o(".menu-small").css("background-color", "white"),
        o(".menu-small .logo").css("display", "block"))
      : is_homepage() &&
        o(window).scroll(function () {
          o(this).scrollTop() >= 50 && o(window).width() >= 768
            ? o(".menu-top").fadeIn()
            : o(this).scrollTop() < 50 && o(window).width() >= 768
            ? o(".menu-top").fadeOut()
            : o(this).scrollTop() >= 50 && o(window).width() < 768
            ? (o(".menu-small").css("background-color", "white"),
              o(".menu-small .logo").css("display", "block"))
            : o(this).scrollTop() < 50 &&
              o(window).width() < 768 &&
              (o(".menu-small").css("background-color", ""),
              o(".menu-small .logo").css("display", ""));
        });
  }),
  jQuery(document).ready(function (o) {
    o(".menu-item > a").click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var e = o(this.hash);
        if ((e = e.length ? e : o("[name=" + this.hash.slice(1) + "]")).length)
          return (
            o("html,body").animate({ scrollTop: e.offset().top - 20 }, 900), !1
          );
      }
    });
  }),
  jQuery(document).ready(function (o) {
    if (is_homepage()) {
      for (
        var e = o("ul.menu li").children(), t = [], n = 0;
        n < e.length;
        n++
      ) {
        var a = e[n];
        if ("sub-menu" != o(a).attr("class")) {
          var i = o(a).attr("href");
          if (i.indexOf("#") >= 0) {
            var l = i.substring(i.indexOf("#"));
            t.push(l);
          }
        }
      }
      o(window).scroll(function () {
        for (
          var e = o(window).scrollTop(),
            n = (o(window).height(), o(document).height(), 0);
          n < t.length;
          n++
        ) {
          var a = t[n],
            i = o(a).offset().top;
          i -= 50;
          var l = o(a).height();
          (l += 50),
            e >= i && e < i + l && "/" == window.location.pathname
              ? o("a[href='http://www.claudiatenhoope.com/" + a + "']")
                  .parent()
                  .addClass("active")
              : "/" == window.location.pathname
              ? o("a[href='http://www.claudiatenhoope.com/" + a + "']")
                  .parent()
                  .removeClass("active")
              : e >= i && e < i + l && "/nl/" == window.location.pathname
              ? o("a[href='http://www.claudiatenhoope.com/nl/" + a + "']")
                  .parent()
                  .addClass("active")
              : o("a[href='http://www.claudiatenhoope.com/nl/" + a + "']")
                  .parent()
                  .removeClass("active");
        }
      });
    }
  });
