$(document).ready(function () {
  // Selectors
  //   $("button").click(function () {
  //     $(".ele").slideToggle();
  //   });
  //   Get
  //   let txt = $(".ele").html();
  //   console.log(txt);
  // Set
  //   $(".ele").text("<h1>This is new Div</h1>");
  //   $(".ele").text("");
  //   $("input").val("");
  //   $("button").click(function () {
  //     $("p").css({
  //       "font-size": "20px",
  //       color: "yellow",
  //     });
  //   });
  // width => get only width
  // innerWidth => get width + padding
  // outerWidth => get width + padding + border
  // outerWidth(true) => get width + padding + border + margin
  //   let w = $(".ele").outerWidth(true);
  //   console.log(w);
  //   $("a").attr("href");
  //   //   $("p").attr('welkfhwel')
  //   $("section").find("p").css({
  //     border: "1px solid red",
  //   });
  //   //   ["b", "b", "b"]
  //   $("button").eq(2).css("border", "1px solid red");

  /*
 <ul>
    <li>
        <a href="#">Home</a>
    </li>
    <li>
        <a href="#" class="">About</a>
    </li>
    <li>
        <a href="#" class="selected">Contact</a>
    </li>
    </ul>
*/

  $("header ul li a").click(function () {
    $(this)
      .addClass("selected")
      .parent()
      .siblings()
      .children()
      .removeClass("selected");
  });
}); // End jQuery Code
