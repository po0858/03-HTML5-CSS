let menu = document.querySelectorAll(".menu li");
let sub = document.querySelectorAll(".lnb");
let submenu = document.querySelectorAll(".lnb .sub");
let header = document.getElementsByTagName("header")[0];
document.getElementsByClassName("menu")[0].onmouseenter = function () {
  document.querySelector(".logo img").style.objectPosition = "0 -52px";
};
document.getElementsByClassName("menu")[0].onmouseleave = function () {
  document.querySelector(".logo img").style.objectPosition = "0";
};
document.getElementsByClassName("lnb_wrap")[0].onmouseenter = function () {
  document.querySelector(".logo img").style.objectPosition = "0 -52px";
};
document.getElementsByClassName("lnb_wrap")[0].onmouseleave = function () {
  document.querySelector(".logo img").style.objectPosition = "0";
};
menu.forEach(function (o, i) {
  o.onmouseenter = function () {
    sub[i].style.opacity = "1";
    let ht = submenu[i].offsetHeight;
    sub[i].style.height = ht + "px";
    document.getElementsByClassName("lnb_wrap")[0].style.height = ht + "px";
    header.style.background = "#fff";
    header.querySelectorAll("a").forEach(function (o, i) {
      o.style.color = "#222";
    });
    document.getElementsByTagName("header")[0].classList.add("on");
  };
});
sub.forEach(function (o, i) {
  o.onmouseenter = function () {
    sub[i].style.opacity = "1";
    let ht = submenu[i].offsetHeight;
    document.getElementsByClassName("lnb_wrap")[0].style.height = ht + "px";
    sub[i].style.height = ht + "px";
    header.style.background = "#fff";
    header.querySelectorAll("a").forEach(function (o, i) {
      o.style.color = "#222";
    });
    document.getElementsByTagName("header")[0].classList.add("on");
  };
});
menu.forEach(function (o, i) {
  o.onmouseleave = function () {
    sub.forEach(function (o, i) {
      o.style.opacity = "0";
      o.style.height = "0";
    });
    document.getElementsByClassName("lnb_wrap")[0].style.height = 0 + "px";
    header.style.background = "none";
    header.querySelectorAll("a").forEach(function (o, i) {
      o.style.color = "#fff";
    });
    document.getElementsByTagName("header")[0].classList.remove("on");
  };
});
sub.forEach(function (o, i) {
  o.onmouseleave = function () {
    sub.forEach(function (o, i) {
      o.style.opacity = "0";
      o.style.height = "0";
    });
    document.getElementsByClassName("lnb_wrap")[0].style.height = 0 + "px";
    header.style.background = "none";
    header.querySelectorAll("a").forEach(function (o, i) {
      o.style.color = "#fff";
    });
    document.getElementsByTagName("header")[0].classList.remove("on");
  };
});
