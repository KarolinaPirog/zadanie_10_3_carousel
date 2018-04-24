$(function(){
    var carouselList = $('#carousel ul');
    setInterval(changeSlide, 300);
    carouselList.animate({'marginLeft':-450}, 500, moveFirstSlide);


function moveFirstSlide(){
    var firstItem = carouselList.find('li:first');
    var lastItem = carouselList.find('li:last');
    lastItem.after(firstItem);
    carouselList.css({marginLeft:0});

}
});
moveFirstSlide();