/*
* @Author: Administrator
* @Date:   2019-03-12 14:46:56
* @Last Modified by:   Administrator
* @Last Modified time: 2019-03-13 10:15:38
*/


// 动画js
$(function() {
	//鼠标滚动到相应位置动画显示
	$(window).bind('scroll load', function() {
		winScroll();
	});
	var animate = $(".animate");
	var _h = $(window).height(); //整个可见屏幕的高度
	// alert(_h);
	function winScroll() { //动画函数
		var scrollTop = $(window).scrollTop() + (_h / 1.5);
		// alert(scrollTop);
		animate.each(function(i) {
			var animateTop = $(this).offset().top +200;
			console.log(animateTop)
			if (scrollTop > animateTop) {
				$(this).addClass("currt");
			}
		});
	}
});


Vue.component('blog-post', {
  // 在 JavaScript 中是 camelCase 的
  props: ['postTitle'],
  template: '<h3>{{ postTitle }}</h3>'
});

var vm=new Vue({
	el:"#collTeacher",
	data(){
		return{
			message:"gww"
		}
	}
});
var str="123";
console.log(str.indexOf("3") != -1 );  // true
// indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
// 如果要检索的字符串值没有出现，则该方法返回 -1。
// indexOf() 方法 可返回某个指定的字符串在字符串中首次出现的位置
// 如果要检索的字符串值没有出现则该方法返回-1
