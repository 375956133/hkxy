/*
* @Author: Administrator
* @Date:   2019-02-25 17:52:05
* @Last Modified by:   Administrator
* @Last Modified time: 2019-02-27 14:54:46
*/




function SeachDataClick() { //跳转搜索产品
    var str= $("#searchWord").val()
    location.href = "/videoOnline/Default.aspx?key=" + escape(str);

}
	$(function(){
		
		//banner轮播
		$('.collBanner .owl-demo').owlCarousel({
			items: 1,
			navigation: true,
			navigationText : ["prev", "next"],
			autoPlay: 5000,
			stopOnHover: true,
			singleItem: true,
			spaceBetween: 0,
			addClassActive: true,
			pagination:false
                
        });
		//鼠标滚动到相应位置动画显示
		$(window).bind('scroll load', function () {
			winScroll();
		});
		var animate = $(".animate");
		var _h = $(window).height(); //整个可见屏幕的高度
		function winScroll() {//动画函数
			var scrollTop = $(window).scrollTop() + (_h / 1.5);
			animate.each(function (i) {
				var animateTop = $(this).offset().top - 200;
				if (scrollTop > animateTop) {
					$(this).addClass("currt");
				}
			});
		}
		//设置banner的左右按钮位置
		var bodyW = parseInt($("body").width());
		if(bodyW >= 1280){
			var chaW = (bodyW-1280)/2;
			$('.collBanner .owl-prev').css("left",chaW+"px");
			$('.collBanner .owl-next').css("right",chaW+"px");
		}
		//教学资源轮播
		$('.jiaoSrcCon2 .owl-demo').owlCarousel({
			items: 1,
			navigation: true,
			pagination:false,
			autoPlay: false,
			stopOnHover: true,
			singleItem: true,
			spaceBetween: 0,
			addClassActive: true,
		});
		var owl = $('.jiaoSrcCon2 .owl-demo').data('owlCarousel');
		$(".jiaoSrcA a").click(function () {
			var index = $(this).index();
			$(this).addClass("active").siblings().removeClass("active");
			owl.goTo(index);
		});
		//师资队伍轮播
		$(".shiZiCon").kxbdSuperMarquee({
			distance:305,//一次滚动的距离
			isAuto:true,
			duration:15,//缓动效果，单次移动时间，越小速度越快，为0时无缓动效果
			//time:4,//停顿时间，单位为秒
			direction: 'right',//滚动方向，'left','right','up','down'
			scrollAmount:1,//步长
			scrollDelay:30,//时长，单位为毫秒
			isEqual:true,//所有滚动的元素长宽是否相等,true,false
			btnGo:{left:'.shiZiL',right:'.shiZiR'},//控制方向的按钮ID，有四个属性left,right,up,down分别对应四个方向
			
		});
		$(".shiZiBtn a").click(function(){
			$(this).addClass("active").siblings("a").removeClass("active");
		})
		//题库轮播
		$(".tiKuList").kxbdSuperMarquee({
			distance:448,//一次滚动的距离
			isAuto:false,
			duration:20,//缓动效果，单次移动时间，越小速度越快，为0时无缓动效果
			//time:4,//停顿时间，单位为秒
			direction: 'right',//滚动方向，'left','right','up','down'
			scrollAmount:1,//步长
			scrollDelay:30,//时长，单位为毫秒
			isEqual:true,//所有滚动的元素长宽是否相等,true,false
			btnGo:{left:'.tiKuL',right:'.tiKuR'},//控制方向的按钮ID，有四个属性left,right,up,down分别对应四个方向
			
		});
		//培训课程轮播
		$(".peiXunCon").kxbdSuperMarquee({
			distance:1280,//一次滚动的距离
			isAuto:true,
			duration:20,//缓动效果，单次移动时间，越小速度越快，为0时无缓动效果
			//time:4,//停顿时间，单位为秒
			direction: 'right',//滚动方向，'left','right','up','down'
			scrollAmount:1,//步长
			scrollDelay:50,//时长，单位为毫秒
			isEqual:true,//所有滚动的元素长宽是否相等,true,false
			btnGo:{left:'.peiBtnL',right:'.peiBtnR'},//控制方向的按钮ID，有四个属性left,right,up,down分别对应四个方向
			
		});
		//全国布局鼠标经过点点时 的效果
		$(".buJuDot").bind("mouseover click",function(){
			var buJuImg = $(this).attr("data-image");
			var buJuT = $(this).attr("data-title");
			var buJuDes = $(this).attr("data-des");
			$(this).addClass("active").siblings(".buJuDot").removeClass("active");
			$(".buJuTxtCon > img").attr("src",buJuImg);
			$(".buJuTxtCon h2").text(buJuT);
			$(".buJuTxtCon > div").text(buJuDes);
		})
		//右侧悬浮框显示
		$(window).scroll(function() {       //页面滚动显示元素。
			if($(window).scrollTop()>=860){
				$(".certif").fadeIn(200);
			}else{
				$(".certif").fadeOut(200);
			}
		}); 
		$(".certif a").hover(function(){
			$(this).addClass("active");
		},function(){
			$(this).removeClass("active");
		})
		$(".goTop").click(function(){
			$('body,html').animate({'scrollTop':0},200)
		})
	})
