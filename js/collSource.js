/*
 * @Author: Administrator
 * @Date:   2019-03-06 12:00:20
 * @Last Modified by:   Administrator
 * @Last Modified time: 2019-03-06 16:27:29
 */

var collSource = new Vue({
	el: "#collSource",
	data() {
		return {
			items: []
			
		}
	}
});
	axios.get("http://localhost:3000/posts")
	.then(function(res) {
		console.log(res);
		console.log(res.data);
		console.log(res.data[0]);
		collSource.items = res.data; //vue实例可以直接访问data中的对象

	})
	.catch(function(error) {
		console.log(error);
	})