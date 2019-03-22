/*
 * @Author: Administrator
 * @Date:   2019-03-06 14:36:05
 * @Last Modified by:   Administrator
 * @Last Modified time: 2019-03-06 16:34:52
 */
var pageIndex = 0; //页面索引初始值
var pageSize = 6; //每页显示条数初始化，修改显示条数，修改这里即可
var ind = 0;
$(function() {
	Page();
	InitTable(0); //Load事件，初始化表格数据，页面索引为0（第一页）

});
//翻页调用
function PageCallback(index) {
	InitTable(index);

}
//请求数据
function InitTable(pageIndex) {

	$.ajax({
		type: "POST",
		dataType: "json",
		async: false,
		url: '#', //提交到一般处理程序请求数据
		data: "action=GetJIaoxueNiane&menu=1&pageIndex=" + (pageIndex + 1) + "&pageSize=" + pageSize + "&" + $("form").serialize(), //提交两个参数：pageIndex(页面索引)，pageSize(显示条数)                
		success: function(data) {
			// $("#Product_list li,#news_ul div").remove();  //移除Id为Result的表格里的行，从第二行开始（这里根据页面布局不同页变）

			$("#classListid").html(data.Context); //将返回的数据追加到表格

			var count = $.cookie('the_cookie');
			if (count != data.Count) {
				if (data.Count != "0") {
					Page();
				} else {
					$("#Pagination").html("");
				}
			}
		}
	});
}

function Page() {
	$.ajax({
		type: "POST",
		dataType: "json",
		url: '#', //提交到一般处理程序请求数据
		data: "action=GetJIaoxueNiane&menu=0&pageIndex=1&pageSize=0&" + $("form").serialize(), //提交两个参数：pageIndex(页面索引)，pageSize(显示条数)                      
		success: function(data) {
			//分页，PageCount是总条目数，这是必选参数，其它参数都是可选
			$.cookie('the_cookie', data.Count); // 存储 cookie 
			if (data.Count != "0") {
				$("#Pagination").pagination(data.Count, {
					callback: PageCallback,
					prev_text: '上一页', //上一页按钮里text
					next_text: '下一页', //下一页按钮里text
					link_to: "javascript:",
					items_per_page: pageSize, //显示条数
					num_display_entries: 10, //连续分页主体部分分页条目数
					current_page: pageIndex, //当前页索引
					num_edge_entries: 2 //两侧首尾分页条目数
				});

			} else {
				$("#Pagination").html("");
			}
		}
	});
}