let observer = new IntersectionObserver(function (e) {
  e.forEach(function (sticky) {
    if (sticky.isIntersecting) {
      // $("section[class^=main-]").removeClass("on");
      $(sticky.target).addClass("on");
      let i = $(sticky.target).index() - 2;
      $(".scroll").eq(i).find("[class$='text'] ul li").eq(i).addClass("on");
      // delta 활용으로 변경하기
      // let top = $(sticky.target).offset().top;
      // $("html, body").stop().animate({ scrollTop: top }, 400, "linear");
      console.log($(sticky.target).find(sticky).offset().top);
      if ($(".main-sec01").hasClass("on")) {
        setTimeout(function () {
          $(".sec01-tab-1depth>li").eq(0).click();
        }, 1200);
      }
      if ($(".main-sec01").hasClass("on")) {
        setTimeout(function () {
          $(".sec01-tab-1depth>li").eq(0).click();
        }, 1200);
        $(".top-banner").addClass("hide");
      }
      if ($(".main-vis01").hasClass("on")) {
        $(".top-banner").addClass("hide");
      }
      // test
      if ($(".main-sec07").hasClass("on")) {
        $(".main-sec06 .sticky").css({
          position: "fixed",
          top: "90px",
          zIndex: "-1",
        });
        $(".main-sec05").removeClass("on");
      }
      if ($(".main-sec08").hasClass("on") || $(".main-sec05").hasClass("on")) {
        $(".main-sec06 .sticky").css({
          position: "sticky",
          top: "90px",
          zIndex: "0",
        });
      }
      // test
    } else {
    }
  });
});
let sticky = document.querySelectorAll("section[class^=main-]");
for (let i = 0; i < sticky.length; i++) {
  observer.observe(sticky[i]);
}
