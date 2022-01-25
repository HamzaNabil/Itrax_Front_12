$(document).ready(function () {
  // let div = $("div").offset().top;
  // $(window).scroll(function () {
  //   let scrollH = $(window).scrollTop();
  //   if (scrollH > div) {
  //     $("div").css("background", "blue");
  //   } else {
  //     $("div").css("background", "red");
  //   }
  // });
  // document.querySelector('.content').getAttribute('id')
  // $("button").click(function () {
  //   $(".content div").hide();
  //   let classAttr = $(this).attr("class"); // menu3
  //   $(".content ." + classAttr).fadeIn();
  // });
  // Smooth Scroll
  // $("header li a").click(function () {
  //   let href = $(this).attr("href");
  //   $("body,html").animate(
  //     {
  //       scrollTop: $(href).offset().top,
  //     },
  //     600
  //   );
  // });
  // $(window).scroll(function () {
  //   if ($(window).scrollTop() > 200) {
  //     $(".scrolltop").show();
  //   } else {
  //     $(".scrolltop").hide();
  //   }
  // });
  // $(".scrolltop").click(function () {
  //   $("html,body").animate({
  //     scrollTop: 0,
  //   });
  // });
}); // End jQuery Code

// // calculator Task
// let inputEl = document.querySelector("#input-number");
// let equalBtn = document.querySelector("#equal");
// let btns = document.querySelectorAll(".num");

// btns.forEach(function (btn) {
//   btn.onclick = function () {
//     inputEl.value += btn.innerHTML;
//   };
// });

// equalBtn.onclick = function () {
//   inputEl.value = eval(inputEl.value);
// };

let inturn = "x";

let allDivs = document.querySelectorAll(".body div");

allDivs.forEach(function (div) {
  div.onclick = function () {
    if (div.innerHTML == "") {
      div.innerHTML = inturn;
      if (inturn == "x") {
        inturn = "o";
      } else if (inturn == "o") {
        inturn = "x";
      }
    }
    gameOver();
  };
});

function gameOver() {
  if (
    allDivs[0].innerHTML == allDivs[1].innerHTML &&
    allDivs[1].innerHTML == allDivs[2].innerHTML
  ) {
    console.log("eee");
    document.querySelector("#game").innerHTML =
      allDivs[0].innerHTML + "is winner";
  }

  // if (
  //   allDivs[3].innerHTML == allDivs[4].innerHTML &&
  //   allDivs[4].innerHTML == allDivs[5].innerHTML
  // ) {
  //   document.querySelector("#game").innerHTML =
  //     allDivs[3].innerHTML + "is winner";
  // }

  // if (
  //   allDivs[6].innerHTML == allDivs[7].innerHTML &&
  //   allDivs[7].innerHTML == allDivs[8].innerHTML
  // ) {
  //   document.querySelector("#game").innerHTML =
  //     allDivs[6].innerHTML + "is winner";
  // }

  // if (
  //   allDivs[0].innerHTML == allDivs[1].innerHTML &&
  //   allDivs[1].innerHTML == allDivs[2].innerHTML
  // ) {
  //   document.querySelector("#game").innerHTML =
  //     allDivs[0].innerHTML + "is winner";
  // }

  // if (
  //   allDivs[0].innerHTML == allDivs[3].innerHTML &&
  //   allDivs[3].innerHTML == allDivs[6].innerHTML
  // ) {
  //   document.querySelector("#game").innerHTML =
  //     allDivs[0].innerHTML + "is winner";
  // }

  // if (
  //   allDivs[1].innerHTML == allDivs[4].innerHTML &&
  //   allDivs[4].innerHTML == allDivs[7].innerHTML
  // ) {
  //   document.querySelector("#game").innerHTML =
  //     allDivs[1].innerHTML + "is winner";
  // }

  // if (
  //   allDivs[3].innerHTML == allDivs[5].innerHTML &&
  //   allDivs[5].innerHTML == allDivs[8].innerHTML
  // ) {
  //   document.querySelector("#game").innerHTML =
  //     allDivs[3].innerHTML + "is winner";
  // }

  // if (
  //   allDivs[0].innerHTML == allDivs[4].innerHTML &&
  //   allDivs[4].innerHTML == allDivs[8].innerHTML
  // ) {
  //   document.querySelector("#game").innerHTML =
  //     allDivs[0].innerHTML + "is winner";
  // }

  // if (
  //   allDivs[2].innerHTML == allDivs[4].innerHTML &&
  //   allDivs[4].innerHTML == allDivs[6].innerHTML
  // ) {
  //   document.querySelector("#game").innerHTML =
  //     allDivs[2].innerHTML + "is winner";
  // }
}
