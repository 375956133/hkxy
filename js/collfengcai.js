/*
 * @Author: Administrator
 * @Date:   2019-03-04 11:57:45
 * @Last Modified by:   Administrator
 * @Last Modified time: 2019-03-04 11:57:57
 */
$(function() {

	//    //风采轮播
	$(".mienNavCon").kxbdSuperMarquee({
		distance: 282, //一次滚动的距离
		isAuto: true,
		duration: 20, //缓动效果，单次移动时间，越小速度越快，为0时无缓动效果
		//time:4,//停顿时间，单位为秒
		direction: 'right', //滚动方向，'left','right','up','down'
		scrollAmount: 1, //步长
		scrollDelay: 30, //时长，单位为毫秒
		isEqual: true, //所有滚动的元素长宽是否相等,true,false
		btnGo: {
			left: '.mienL',
			right: '.mienR'
		}, //控制方向的按钮ID，有四个属性left,right,up,down分别对应四个方向

	});
	//风采小图点击
	$(".mienList > img,.mienList > div").addClass("active");
	$(".mienNavCon li").click(function() {
		var str = $(this).attr("data-src");
		var text = $(this).find("img").attr("alt");
		$(".mienList > img").attr("src", str);
		$(".mienList > div").text(text);
		$(this).addClass("active").siblings("li").removeClass("active");
	})

})