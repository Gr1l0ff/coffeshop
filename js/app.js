$(document).ready(function(){



  if($(window).width() <= 934) {

    $(".main-header > div").animate({top: '10%', opacity:1}, 1900);

  } else if($(window).width() <= 500)  {

    $(".main-header > div").animate({top: '10%', opacity:1}, 1900);

  } else {
    $(".main-header > div").animate({top: '25%', opacity:1}, 1900);
  }


  $("body").fadeIn(400);


  $(window).scroll(function () { 
    
    let scroll = $(window).scrollTop();

    

    
    if(scroll > 1200){
     
      $(".section-about").animate({padding: '3rem'}, 1200)
      $(".section-about > div").animate({opacity: '1'}, 1500);
    } 
  });




});