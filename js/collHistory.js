/*
 * @Author: Administrator
 * @Date:   2019-03-04 14:24:00
 * @Last Modified by:   Administrator
 * @Last Modified time: 2019-03-05 09:47:37
 */

//请求数据
function chageimage(id) {
	var srcstr = $("#imageid" + id).val();  //../images/img1412.jpg
	$("#imgId").attr('src', srcstr);
}

//请求数据
function InitTable(id) {
	$.ajax({
		type: "POST",
		dataType: "json",
		async: false,
		// url: 'http://localhost:3000/posts', //提交到一般处理程序请求数据
		// data: "action=Getyuefen&menu=1&pageIndex=1&menuid=" + id + "&pageSize=1&" + $("form").serialize(), //提交两个参数：pageIndex(页面索引)，pageSize(显示条数)                
		success: function(data) {
			$("#classListid").html(data.Context); //将返回的数据追加到表格
			$("#classListid").html(data.id);//测试数据
			 console.log(data)
		}
	});
}

$(function() {
	//年份轮播
	InitTable(5)
	var srcstr = $("#imageid14").val();

	$("#imgId").attr('src', srcstr);
	$(".hisNavCon").kxbdSuperMarquee({
		distance: 134, //一次滚动的距离
		isAuto: true,
		duration: 15, //缓动效果，单次移动时间，越小速度越快，为0时无缓动效果
		//time:4,//停顿时间，单位为秒
		direction: 'right', //滚动方向，'left','right','up','down'
		scrollAmount: 1, //步长
		scrollDelay: 30, //时长，单位为毫秒
		isEqual: true, //所有滚动的元素长宽是否相等,true,false
		btnGo: {
			left: '.historyL',
			right: '.historyR'
		}, //控制方向的按钮ID，有四个属性left,right,up,down分别对应四个方向

	});
	// 点击导航给当前的li设置样式
	$(".hisNavCon li").click(function() {
		$(this).addClass("active").siblings("li").removeClass("active");
	})
	//历程图片按钮点击效果
	$(".historyImg li").eq(0).addClass("active");
	var liW = $(".historyImg ul li").width();
	var liLen = $(".historyImg ul li").length;
	$(".historyImg ul").width(liW * liLen);
	//左按钮点击
	$(".hisImgL").click(function() { 
		var nowLeft = parseInt($(this).parent(".historyImg").find("ul").css("left"));
		var nowIndex = $(".historyImg ul li.active").index();
		if (nowIndex > 0) { //没到左侧最终点
			$(".historyImg ul").animate({
				"left": (nowLeft + liW) + "px"
			}, 500);
			$(".historyImg ul li").eq(nowIndex - 1).addClass("active").siblings("li").removeClass("active");
			$(".historyList li").eq(nowIndex - 1).find(".hisIntro").addClass("active").parent("li").siblings("li").find(".hisIntro").removeClass("active");

		}
	});
	//右侧按钮点击
	$(".hisImgR").click(function() { 
		var nowLeft = parseInt($(this).parent(".historyImg").find("ul").css("left"));
		var nowIndex = $(".historyImg ul li.active").index();

		if (nowIndex < liLen - 1) { //没到左侧最终点
			$(".historyImg ul").animate({
				"left": (nowLeft - liW) + "px"
			}, 500);
			$(".historyImg ul li").eq(nowIndex + 1).addClass("active").siblings("li").removeClass("active");
			$(".historyList li").eq(nowIndex + 1).find(".hisIntro").addClass("active").parent("li").siblings("li").find(".hisIntro").removeClass("active");
		}
	});
	// 点击左侧li  让对应索引的右侧图片切换
	$(".historyList .hisIntro").click(function() {
		var index = $(this).parent("li").index();
		$(this).addClass("active").parent("li").siblings("li").find(".hisIntro").removeClass("active");
		$(".historyImg ul").animate({
			"left": -1 * index * liW + "px"
		}, 500);
		$(".historyImg ul li").eq(index).addClass("active").siblings("li").removeClass("active");
	})
});