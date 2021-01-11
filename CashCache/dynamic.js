$(document).ready(function(){ 
     $('.carousel.carousel-slider').carousel({
         full_width: true, 
         indicators: true,
         numVisible: 5
        }); 
    });

// move next carousel
$('.moveNextCarousel').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('next');
 });

// move prev carousel
 $('.movePrevCarousel').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('prev');
 });  
  $('.scrollspy').scrollSpy();