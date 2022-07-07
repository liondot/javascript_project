$(function(){
  $(window).scroll(function () {
    let top = $(window).scrollTop();

    if(top > 0){
      $('#header').addClass('inverted');
    } else {
      $('#header').removeClass('inverted');
    }
  })

  $('#form-search').submit(function(e) {
    e.preventDefault();
    let from = $('#from').val();
    let to = $('#to').val();

    search(from, to)
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

// 여행지 api
function search(from, to) {
  let url = 'https://javascript-basic.appspot.com/searchLocation';

  $.getJSON(url, {
    from:from,
    to: to
  }, function(r){
    console.log(r);
  });


}
