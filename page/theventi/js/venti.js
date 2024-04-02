let gnb = document.querySelectorAll(".menu li");
let ht = document.querySelector(".sub").offsetHeight;
let sub = document.querySelectorAll(".lnb_wrap .lnb .sub > ul > li");
gnb.forEach(function (keys, item) {
  keys.onmouseenter = function () {
    document.querySelector(".lnb").style.height = ht + "px";
    document.querySelector("lnb_wrap").classList.add("on");
  };
  keys.addEventListener("mouseleave", function () {
    document.querySelector(".lnb").style.height = 0 + "px";
    document.querySelector("lnb_wrap").classList.remove("on");
  });
});
sub.forEach(function (keys, item) {
  keys.addEventListener("mouseenter", function () {
    document.querySelector(".lnb").style.height = ht + "px";
    document.querySelector("lnb_wrap").classList.add("on");
    gnb[item].querySelector("a").classList.on("on");
  });
  keys.onmouseleave = function () {
    document.querySelector(".lnb").style.height = 0 + "px";
    document.querySelector("lnb_wrap").classList.remove("on");
    gnb[item].querySelector("a").classList.remove("on");
  };
});
