/*
 * @Author: Administrator
 * @Date:   2019-03-21 10:24:28
 * @Last Modified by:   Administrator
 * @Last Modified time: 2019-03-22 13:39:50
 */

$(function() {


	/*这里是提交表单前的非空校验*/
	function checkForm() {
		var unum = $("input[name='unum']").val();

		if (unum == "" || unum == null || unum == undefined) {
			alert("请输入身份证号！");
			return false; /*阻止表单提交*/
		} else {
			alert("提交成功！");
			$("#Form").submit();
		}

	}
	// 请求数据
	axios.get("http://localhost:3000/stunum")
		.then((res) => {
			console.log(res.data);
			searchbook.items = res.data
		})
		.catch((err) => {
			console.log(err)
		});
	// .then(function(res) {
	// 	console.log(res.data);
	// 	searchbook.items = res.data
	// })
	// .catch(function(err) {
	// 	console.log(err)
	// })
	
	// 创建vue实例
	var searchbook = new Vue({
		el: "#searchBook",
		data() {
			return {
				items: []
			}
		}
	})
});