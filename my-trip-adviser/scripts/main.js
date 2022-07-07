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
let dpFrom = $('#from').datepicker({
  dateFormat: 'yy-mm-dd',
  minDate:0,
  onSelect: function(){
    dpTo.datepicker('option', 'minDate', dpFrom.datepicker('getDate'));
  }
});

dpFrom.datepicker('setDate', new Date());

let dpTo = $('#to').datepicker({
  dateFormat: 'yy-mm-dd',
  minDate: 0
})

dpTo.datepicker('setDate', 1)