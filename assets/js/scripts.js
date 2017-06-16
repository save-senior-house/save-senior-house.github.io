$( document ).ready(function() {      
    var isMobile = window.matchMedia("only screen and (max-width: 700px)");

    if (isMobile.matches) {
      //Conditional script here
      console.log("mobile");
    } else {
      console.log("not mobile");
    }
 });
