


$(document).ready(function(){
 $("#about").click(function (){
              $('html, body').animate({
                  scrollTop: $(".about").offset().top-100
              }, 800);
          });
 $("#food").click(function (){
              $('html, body').animate({
                  scrollTop: $("#heading-food").offset().top-115
              }, 800);
          });
 $("#beer").click(function (){
              $('html, body').animate({
                  scrollTop: $("#heading-beer").offset().top-143
              }, 800);
          });
 $("#information").click(function (){
              $('html, body').animate({
                  scrollTop: $("#heading-information").offset().top-141
              }, 800);
          });

/* hide nav container */


 // $("#about").click(function (){
 //              $(".nav_container").hide()
 //              $(".header").css("height": "110px" )
 //          });
 // $("#food").click(function (){
 //              $(".nav_container").hide()
 //          });
 // $("#beer").click(function (){
 //              $(".nav_container").hide()
 //          });
 // $("#information").click(function (){
 //              $(".nav_container").hide()
 //          });

 // $("#about").click(function (){
 //              $(".nav_container").show()
 //          });
 // $("#food").click(function (){
 //              $(".nav_container").show()
 //          });
 // $("#beer").click(function (){
 //              $(".nav_container").show()
 //          });
 // $("#information").click(function (){
 //              $(".nav_container").show()
 //          });

 });