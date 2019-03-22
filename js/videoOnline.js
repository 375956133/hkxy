/*
 * @Author: Administrator
 * @Date:   2019-03-07 13:22:30
 * @Last Modified by:   Administrator
 * @Last Modified time: 2019-03-07 15:54:18
 */

// 点击最新的时候请求数据放到vue实例中
function check(a){
// alert(2);
$("#lihide").show();
$("#videoOnline li").eq(0).hide();
$("#videoOnline li").eq(1).hide();
$("#videoOnline li").eq(2).hide();
$("#videoOnline li").eq(3).hide();
$("#videoOnline li").eq(4).hide();
$("#videoOnline li").eq(5).hide();
$("#videoOnline li").eq(6).hide();
$("#videoOnline li").eq(7).hide();

var videoOnline = new Vue({
	el: "#videoOnline",
	data() {
		return {
			items: []
		}
	}
});
axios.get("http://localhost:3000/comments")
	.then(function(res) {
		console.log(res);
		console.log(res.data);
		videoOnline.items = res.data; //vue实例可以直接访问data中的对象

	})
	.catch(function(err) {
		console.log(err)
	});
}