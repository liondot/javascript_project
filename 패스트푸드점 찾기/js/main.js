'use-strict'

let API_URL = 'https://floating-harbor-78336.herokuapp.com/fastfood'

$(function () {
  $('.btn-search').click(function () {
    let searchKeyword = $('#txt-search').val();

    search(1, 10, searchKeyword);
  });

  $('#txt-search').on('keypress', function(e) {
    if(e.keyCode === 13) {
      $('.btn-search').trigger('click');
    }
  });
});


function search(page, perPage, total) {
  if(typeof page !== 'number' || page < 1)
  page = 1;

  if(typeof perPage !== 'number' || perPage <= 0)
  perPage = 10;

$.get(API_URL, {
  page : page,
  perPage : perPage,
  searchKeyword: searchKeyword
}, function (data) {
  let list = data.list;
  let total = data.total;

  $('.total').html('총 ' + total + '개의 패스트푸드점을 찾았습니다.');

  let $list = $('.list');
  for (let i = 0; i < list.length; i++) {
    let item = list[i];

    // 1. 템플릿을 복제한다.
    // 2. 복제한 템플릿에 데이터를 세팅한다.
    // 3. 목록에 복제한 템플릿을 추가한다.

    let $elem = $('#item-template')
      .clone()
      .removeAttr('id')


    $elem.find('.item-no').html(i + 1);
    $elem.find('.item-name').html(item.name);
    $elem.find('.item-addr').html(item.addr);

    $list.append($elem)
  }

  showPaging(page);

});
}

function showPaging(page, perPage, total) {
  let $paging = $('.paging').empty();
  

  let numPages = 5;
  let pageStart = Math.floor((page - 1) / numPages) * numPages + 1;
  let pageEnd = pageStart + numPages - 1; 
  let totalPages = Math.floor((total - 1) / perPage) + 1;

  if(pageEnd >  totalPages)
  pageEnd = totalPages

  let prevPage = pageStart - 1;
  if(prevPage < 1);
  prevPage = 1;
 
  let nextPage = pageEnd + 1; 
  if(nextPage > totalPages) 
  nextPage = totalPages;

  let $prevElem = $('<a href = "javascript:search(' + prevPage + ',' + perPage + ',\'' + searchKeyword + '\')">이전</a>')
  $prevElem.addClass('prev');
  $paging.append($prevElem);

  for(let i = pageStart; i<= pageEnd; i++){
    let $elem = $('<a href = "javascript:search(' + i + ',' + perPage + ')">' + i + '</a>');

    if(i === page){
      $elem.addClass('current');
    }
    $paging.append($elem);
  }

  let $nextElem = $('<a href = "javascript:search(' + nextPage + ',' + perPage + ')">다음</a>')
  $prevElem.addClass('next');
  $paging.append($nextElem);
}