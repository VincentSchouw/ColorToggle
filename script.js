document.getElementById("radio1").checked = true;

const changeBackground1 = function () {
  document.body.classList = "";
  document.body.classList.add("grey-background");
  document.getElementsByClassName("footer")[0].innerHTML =
    "The background is now in the standard color !";
  classie.removeClass(menu, "menu-active");
};
const grey = document.getElementById("home");
grey.addEventListener("change", changeBackground1);

window.addEventListener("keydown", checkKeyPressed, false);
function checkKeyPressed(evt) {
  if (evt.keyCode == "97" || evt.keyCode == "49") {
    changeBackground1();
    document.getElementById("radio1").checked = true;
  }
}

const changeBackground2 = function () {
  document.body.classList = "";
  document.body.classList.add("red-background");
  document.getElementsByClassName("footer")[0].innerHTML =
    "The background is now RED !";
  classie.removeClass(menu, "menu-active");
};
const red = document.getElementById("red");
red.addEventListener("change", changeBackground2);

window.addEventListener("keydown", checkKeyPressed2, false);
function checkKeyPressed2(evt) {
  if (evt.keyCode == "98" || evt.keyCode == "50") {
    changeBackground2();
    document.getElementById("radio2").checked = true;
  }
}

const changeBackground3 = function () {
  document.body.classList = "";
  document.body.classList.add("orange-background");
  document.getElementsByClassName("footer")[0].innerHTML =
    "The background is now ORANGE!";
  classie.removeClass(menu, "menu-active");
};
const orange = document.getElementById("orange");
orange.addEventListener("change", changeBackground3);

window.addEventListener("keydown", checkKeyPressed3, false);
function checkKeyPressed3(evt) {
  if (evt.keyCode == "99" || evt.keyCode == "51") {
    changeBackground3();
    document.getElementById("radio3").checked = true;
  }
}

const changeBackground4 = function () {
  document.body.classList = "";
  document.body.classList.add("purple-background");
  document.getElementsByClassName("footer")[0].innerHTML =
    "The background is now PURPLE!";
  classie.removeClass(menu, "menu-active");
};
const purple = document.getElementById("purple");
purple.addEventListener("change", changeBackground4);

window.addEventListener("keydown", checkKeyPressed4, false);
function checkKeyPressed4(evt) {
  if (evt.keyCode == "100" || evt.keyCode == "52") {
    changeBackground4();
    document.getElementById("radio4").checked = true;
  }
}

const changeBackground5 = function () {
  document.body.classList = "";
  document.body.classList.add("green-background");
  document.getElementsByClassName("footer")[0].innerHTML =
    "The background is now GREEN!";
  classie.removeClass(menu, "menu-active");
};
const green = document.getElementById("green");
green.addEventListener("change", changeBackground5);

window.addEventListener("keydown", checkKeyPressed5, false);
function checkKeyPressed5(evt) {
  if (evt.keyCode == "101" || evt.keyCode == "53") {
    changeBackground5();
    document.getElementById("radio5").checked = true;
  }
}

document.documentElement.className = "js";

var menu = document.querySelector(".menu"),
  icon = document.querySelector(".nav-toggle");

$(icon).hover(
  function () {
    classie.add(menu, "menu-active");
  },
  function () {
    classie.remove(menu, "menu-active");
  }
);

$(menu).hover(
  function () {
    classie.add(menu, "menu-active");
  },
  function () {
    classie.remove(menu, "menu-active");
  }
);

(function (window) {
  "use strict";

  function classReg(className) {
    return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
  }
  var hasClass, addClass, removeClass;

  if ("classList" in document.documentElement) {
    hasClass = function (elem, c) {
      return elem.classList.contains(c);
    };
    addClass = function (elem, c) {
      elem.classList.add(c);
    };
    removeClass = function (elem, c) {
      elem.classList.remove(c);
    };
  } else {
    hasClass = function (elem, c) {
      return classReg(c).test(elem.className);
    };
    addClass = function (elem, c) {
      if (!hasClass(elem, c)) {
        elem.className = elem.className + " " + c;
      }
    };
    removeClass = function (elem, c) {
      elem.className = elem.className.replace(classReg(c), " ");
    };
  }

  function toggleClass(elem, c) {
    var fn = hasClass(elem, c) ? removeClass : addClass;
    fn(elem, c);
  }

  var classie = {
    // full names
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    // short names
    has: hasClass,
    add: addClass,
    remove: removeClass,
    toggle: toggleClass,
  };

  // transport
  if (typeof define === "function" && define.amd) {
    // AMD
    define(classie);
  } else if (typeof exports === "object") {
    // CommonJS
    module.exports = classie;
  } else {
    // browser global
    window.classie = classie;
  }
})(window);
