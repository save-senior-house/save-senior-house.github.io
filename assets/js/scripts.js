

$( document ).ready(function() {

  
  var isMobile = window.matchMedia("only screen and (max-width: 700px)");
  console.log(isMobile.matches, jQuery.browser.mobile);
 
  
  if (isMobile.matches | jQuery.browser.mobile) {
    //Conditional script here
    console.log("mobile");
    $( "header").css({height: "50%"});
    $( "header .container").css({position: "relative", width: "100%"});
    $( "header .container").height("100%");
    $( ".container h1" ).css({width: "100%", height: "100%", position: "absolute", top: 0, right: 0, "font-size": "10em",  background: "rgba(0,0,0,.7)", margin: 0});
    $( ".container h1 span ").css({background: "transparent"});
    $( ".container h1 span" ).css({"margin-top": $( ".container h1 ").height()/2 - $(".container h1 span").height()/2});

    $( "nav .links .button ").css({width: "100%", height: "10vh", "line-height": "10vh"});
    $( "nav .links .button a").css({"font-size": "xx-large"});
    $( ".content" ).css({"font-size": "xx-large"});
  } else {
    console.log("not mobile");
  }

});


