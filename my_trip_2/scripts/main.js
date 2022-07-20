$(function () {

    // 스크롤을 내릴때 메뉴 영역배경 변경
    $(window).scroll(function () {
        let top = $(window).scrollTop();

        if (top > 0) {
            $('#header').addClass('inverted')
        } else {
            $('#header').removeClass('inverted')
        }
    })

    // 새로고침할 경우 스크롤 이벤트 핸들러가 실행되도록 이벤트를 임의로 발생
    $(window).trigger('scroll');

    let dpFrom = $('#from').datepicker({
        dateFormat: 'yy-mm-dd',
        minDate: 0,
        // 종료 날짜가 시작 날짜보다 더 이전으로 선택 할 수 없는 코드 
        onSelect: function () {
            dpTo.datepicker('option', 'minDate', dpFrom.datepicker('getDate'))
        }
    });


    let dpTo = $('#to').datepicker({
        dateFormat: 'yy-mm-dd',
        minDate: 0


    })

    dpFrom.datepicker('setDate', new Date())

    // 3박4일 표시: 오늘 날짜에 4일을 더한 날짜로 설정 
    dpTo.datepicker('setDate', 4)





})