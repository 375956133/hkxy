/*
 * @Author: Administrator
 * @Date:   2019-02-28 14:51:29
 * @Last Modified by:   Administrator
 * @Last Modified time: 2019-02-28 15:55:52
 */
$(function() {
	//等级轮播
	$(".perPower").kxbdSuperMarquee({
		distance: 228, //一次滚动的距离
		isAuto: true,
		duration: 15, //缓动效果，单次移动时间，越小速度越快，为0时无缓动效果
		//time:4,//停顿时间，单位为秒
		direction: 'right', //滚动方向，'left','right','up','down'
		scrollAmount: 1, //步长
		scrollDelay: 30, //时长，单位为毫秒
		isEqual: true, //所有滚动的元素长宽是否相等,true,false
		btnGo: {
			left: '.perPowerL',
			right: '.perPowerR'
		}, //控制方向的按钮ID，有四个属性left,right,up,down分别对应四个方向

	});
});