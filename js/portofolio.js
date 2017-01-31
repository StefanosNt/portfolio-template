$(document).ready(function() {
  var i = 4;
  function thumbResizing(){   
    if($(window).width()>1200){ 
      $("#thumb3").appendTo("#row1");
      $("#thumb4").appendTo("#row1"); 
      $('.fp-slidesNav ul li a span').hide(); 
      if(i==4){
         $.fn.fullpage.moveTo(2,0); //when currently you are on page 2 and resize to width>1200
      } 
    }else if($(window).width()<=1200 && $(window).width()>1000){
      $("#thumb3").appendTo("#row1");
      $("#thumb4").appendTo("#row2");  
      $('.fp-slidesNav ul li a span').show()
    }else if($(window).width()<=1000){
      $("#thumb3").appendTo("#row2");
      $("#thumb4").appendTo("#row2"); 
      $('.fp-slidesNav ul li a span').show();
    }
  }
  var fillColor='rgb(77, 184, 255)';
  $("#about").hover(function(){
    $("#menu").css("background-color",fillColor);
    $("#about").addClass("active").css("font-size","20px");
    $("#portofolio").css("visibility","hidden");
    $("#contact").css("visibility","hidden");
  },function(){
    $("#menu").css("background-color",""); 
    $("#about").removeClass("active").css("font-size","");
    $("#portofolio").css("visibility","visible");
    $("#contact").css("visibility","visible");     
  });//end #about hover effect
  $("#portofolio").hover(function(){
    $("#menu").css("background-color",fillColor);
    $("#portofolio").addClass("active").css("font-size","20px");
    $("#about").css("visibility","hidden");
    $("#contact").css("visibility","hidden");
  },function(){
    $("#menu").css("background-color","");
    $("#portofolio").removeClass("active").css("font-size","");
    $("#about").css("visibility","visible");
    $("#contact").css("visibility","visible"); 
  });//end #portofolio hover effect
  $("#contact").hover(function(){
    $("#menu").css("background-color",fillColor);
    $("#contact").addClass("active").css("font-size","20px");
    $("#portofolio").css("visibility","hidden");
    $("#about").css("visibility","hidden");
  },function(){
    $("#menu").css("background-color",""); 
    $("#contact").removeClass("active").css("font-size","");
    $("#portofolio").css("visibility","visible");
    $("#about").css("visibility","visible");     
  });//end #contact hover effect    
  $('#fullpage').fullpage({
    anchors: ["about","portofolio","contact"],
    // sectionsColor: ['#4BBFC3', '', '#7BAABE'],
    sectionsColor: ['#1bbc7b', '', '#bccad6'],
    menu: "#menu",    
    slidesNavigation:true,
    controlArrows:false,
    slidesNavPosition:'top'
  });
 
  thumbResizing();
  $(window).on('resize', thumbResizing);
  
});
  