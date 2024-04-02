$(".sticky").each((index, value) => {
  $(".sticky")
    .eq(index)
    .find(".wrap ul li:nth-child(" + (index + 1) + ")")
    .addClass("on");
});

let observer = new IntersectionObserver(function (e) {
  e.forEach(function (sticky) {
    if (sticky.isIntersecting) {
      $("section[class^=main-]").removeClass("on");
      $(sticky.target.parentElement).addClass("on");
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
let sticky = document.querySelectorAll(".sticky");
for (let i = 0; i < sticky.length; i++) {
  observer.observe(sticky[i]);
}
