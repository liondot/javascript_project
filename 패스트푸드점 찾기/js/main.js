'use-strict'

let API_URL = 'https://floating-harbor-78336.herokuapp.com/fastfood'

$(function () {
  $('.btn-search').click(function () {
    $.get(API_URL, {}, function (data) {
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

    });
  });
});