/*
* @Author: Administrator
* @Date:   2019-02-28 11:53:14
* @Last Modified by:   Administrator
* @Last Modified time: 2019-02-28 11:53:21
*/
/*底部友情链接*/
    $(".youqing input").focus(function () {
        $(".lianjie").slideDown();
    });
    $(".youqing input").blur(function () {
        $(".lianjie").slideUp();
    });