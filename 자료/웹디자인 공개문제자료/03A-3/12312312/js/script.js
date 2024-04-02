$(".menu-1depth >li > a").mouseover(function () {
  $(this).parent().find(".menu-2depth").css({ display: "block" });
});
$(".menu-1depth >li").mouseleave(function () {
  $(".menu-2depth").css({ display: "none" });
});
let i = 0;
function slide() {
  if (i < 2) {
    i++;
    $(".slide>div")
      .eq(i - 1)
      .animate({ opacity: 0 }, 500);
    $(".slide>div").eq(i).animate({ opacity: 1 }, 500);
  } else {
    $(".slide>div").eq(i).animate({ opacity: 0 }, 500);
    i = 0;
    $(".slide>div").eq(i).css({ opacity: 1 });
  }
}
setInterval(slide, 2500);
$(".button > button").click(function () {
  let j = $(this).index();
  $(".button > button").removeClass("on");
  $(this).addClass("on");
  $(".conbox").children("div").removeClass("on");
  $(".conbox").children("div").eq(j).addClass("on");
});
$(".c1 tr:first-child a").click((e) => {
  e.preventDefault();
  $(".popup").addClass("on");
});
$(".popup button").click(() => {
  $(".popup").removeClass("on");
});
