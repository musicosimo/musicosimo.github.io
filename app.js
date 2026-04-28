const hero = document.querySelector('.hero')
const slider = document.querySelector('.slider')
const logo = document.querySelector('#logo')
const menu = document.querySelector('#menu')
const headline = document.querySelector('.headline')
const second = document.querySelector('.second')

const tl = new TimelineMax()

tl.fromTo(hero,1,{height: "0%"}, {height:'100%', ease:Power2.easeInOut})
.fromTo(hero, 1.3, {width:'100%'}, {width:'85%', ease:Power2.easeInOut})
.fromTo(slider, 1.2, {x:"-100%"}, {x:'0%', ease:Power2.easeInOut})
.fromTo(headline, 1.4, {opacity:'0'}, {opacity:'1'})


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 


// jQuery

  $(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 20) {
        $('#toTopBtn').fadeIn();
      } else {
        $('#toTopBtn').fadeOut();
      }
    });
  
    $('#toTopBtn').click(function() {
      $("html, body").animate({
        scrollTop: 0
      }, 1000);
      return false;
    });
  });
