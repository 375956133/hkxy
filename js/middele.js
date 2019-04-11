/*
* @Author: Administrator
* @Date:   2019-02-26 17:47:29
* @Last Modified by:   375956133
* @Last Modified time: 2019-04-10 13:50:36
*/
 $(function () {
    
    ShopCartNum();
    $(".sousuo").click(function () {
    var this_ = $(this);
    this_.toggleClass("active");
    $(".fixed dl dd").each(function (i) {
    setTimeout(function () {
    if (this_.hasClass("active"))
    $(".fixed dl dd").eq(i).animate({ left: 49 }, 400);
    else
    $(".fixed dl dd").eq(i).animate({ left: 0 }, 400);
    }, i * 50);
    });
    });
    $('#HeadNav').find('li').removeClass('cur');
    var url = String(window.location.pathname).toLocaleLowerCase();
    url = url.substr(0, url.lastIndexOf('/') + 1);
    switch (url) {
    case '/':
    $('li[data-url="/default.htm"]').addClass('cur');
    break;
    case '/news/':
    $('li[data-url="/news/default.htm"]').addClass('cur');
    return;
    case '/shopping/':
    $('li[data-url="/shopping/default.htm"]').addClass('cur');
    return;
    case '/college/':
    $('li[data-url="/college/default.htm"]').addClass('cur');
    return;
    case '/community/':
    $('li[data-url="/community/default.htm"]').addClass('cur');
    return;
    }
    $('#ipt_Search').bind('keyup', function (e) {
    if (e.keyCode === 13) FnSearch();
    });
    });
    function LoginOut() {
    $.ajax({
    url: '/ashx/UserHandler.ashx',
    type: 'post',
    dataType: 'json', async: false,
    data: {
    action: 'LoginOut',
    sid: Math.random()
    },
    success: function (data) {
    if (data === '1') {
    window.location.href = '/college2/index.html';
    }
    }
    });
    };
    function ShopCartNum() {
    $.ajax({
    url: '/ashx/UserHandler.ashx',
    type: 'post',
    dataType: 'json',
    async: false,
    data: {
    action: 'ShopCartNum',
    sid: Math.random()
    },
    success: function (data) {
    $('#ShopCart').text(data);
    }
    });
    };
    function FnSearch() {
    var ipt_Search = $('#ipt_Search').val();
    if (!ipt_Search.length) {
    alertTips('请输入关键词!', 3000);
    return false;
    }
    window.location.href = ['/Search-', ipt_Search, '.htm'].join('');
    };