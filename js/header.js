/*
 * @Author: Administrator
 * @Date:   2019-02-26 09:16:41
 * @Last Modified by:   Administrator
 * @Last Modified time: 2019-02-26 09:17:49
 */
$(function() {
	//学院系列页面下拉菜单
	$(".headNav .second .header>li:has('.dl_1')").hover(function() {
		$(this).find('.dl_1 ').animate({
			height: 270
		}, 200);
		$('.hover_bg ').animate({
			height: 270
		}, 200)
	}, function() {
		$(this).find('.dl_1 ').delay(10).animate({
			height: 0
		}, 100);
		$('.hover_bg ').delay(20).animate({
			height: 0
		}, 200)
	});
})