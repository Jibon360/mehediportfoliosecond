$(document).ready(function () {


  $(window).on('scroll', function () {

    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
      $("nav").addClass("nav-bg");

    }

    else {
      $("nav").removeClass("nav-bg");

    }

  });



  // collapse
$(document).on("click", ".navbar-collapse.show", function (e) {
  $(e.target).is("a") && $(this).collapse("hide")
}) // 







  var typed = new Typed('.element', {
    strings: ['MEHEDI', ' a DESIGNER', 'a DEVELOPER'],
    smartBackspace: true,
    backSpeed: 100,
    backDelay: 500,
    startDelay: 1000,
    loop: true,
    loopCount: Infinity,
    typeSpeed: 100
  });

// All animations will take exactly 500ms
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
  speedAsDuration: true
});




 
    
  



var waypoint = new Waypoint({
  element: document.getElementById('skill'),
  handler: function(direction) {
    var p =document.querySelectorAll(".progress-bar");
    p[0].setAttribute("style","width:100%; transition: 1s all;")
    p[1].setAttribute("style","width:95%; transition: 1s all;")
    p[2].setAttribute("style","width:95%; transition: 1s all;")
    p[3].setAttribute("style","width:85%; transition: 1s all;")
    p[4].setAttribute("style","width:60%; transition: 1s all;")
    p[5].setAttribute("style","width:85%; transition: 1s all;")
  },
  offset: '90%'
});


  









$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  autoPlay:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})




  // var p =document.querySelectorAll(".progress-bar");
  // p[0].setAttribute("style", "width: 100%; transition: 1s all");
  // p[1].setAttribute("style", "width:95%; transition: 2s all");
  // p[2].setAttribute("style", "width:85%; transition: 2s all");
  // p[3].setAttribute("style", "width:99%; transition: 2s all");
  // p[4].setAttribute("style", "width:85%; transition: 2s all");
  // p[5].setAttribute("style", "width:95%; transition: 2s all");




  var mixer = mixitup(".filter-pic");

  $(document).ready(function() {

    // Fakes the loading setting a timeout
      setTimeout(function() {
          $('body').addClass('loaded');
      }, 3500);
   
  });



});