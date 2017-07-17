$(document).ready(function(){
  var deg = 180;
   $('.wrapper-login').fadeIn(1900);
   $("#New-account").click(function()
   {
     $(".wrapper-login").css({"transform": "rotateY("+deg+"deg)", "transition":"1.5s"});
     $(".wrapper-login").fadeOut(1900);
     $(".wrapper-login").css({"display": "none"});
     $(".wrapper-signIn").fadeIn(1900);
     $(".wrapper-signIn").removeProp("display");
   });
 });
