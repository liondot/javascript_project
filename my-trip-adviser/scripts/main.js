$(function(){
  $(window).scroll(function () {
    let top = $(window).scrollTop();

    if(top > 0){
      $('#header').addClass('inverted');
    } else {
      $('#header').removeClass('inverted');
    }
  })
})