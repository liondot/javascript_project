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

$(window).trigger('scroll');
// $('#from').datepicker();
let dpFrom = $('#from').datepicker({
  dateFormat: 'yy-mm-dd',
  minDate:0
});
dpFrom.datepicker('setDate', new Date());

