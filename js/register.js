/*
 * @Author: Administrator
 * @Date:   2019-04-02 10:44:17
 * @Last Modified by:   375956133
 * @Last Modified time: 2019-04-02 11:42:25
 */

// 验证手机正则函数
function checkPoneAvailable(str) {
	var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
	if (!myreg.test(str)) {
		return false;
	} else {
		return true;
	}
}
//获取短信验证码函数
var countDown = 60;
function getNoteCode(val) {
	var phone = $("input[name='cellphone']").val();
	if (phone == "" || phone == null || (!checkPoneAvailable(phone))) {
		layer.msg("请输入正确的手机号！！！");
	} else {
		$.ajax({
			url: "http://localhost:3000/yzm",
			type: "get",
			success: function(res) {
				console.log(res);
				console.log(res[0].num);
				var Msg = res[0].num;
				// alert(Msg);

				if (res.Code == 101) {
					var newCode = setInterval(function() {
						$(val).attr("class", "layui-btn layui-btn-fluid layui-btn-disabled");
						$(val).attr("disabled", "disabled");
						// val.setAttribute("disabled", true);
						$(val).text("重新发送(" + countDown + ")");
						countDown--;
						if (countDown == 0) {
							window.clearInterval(newCode);
							val.removeAttribute("disabled");
							$(val).attr("class", "layui-btn layui-btn-fluid");
							$(val).text("获取验证码");
							countDown = 60;
						}
					}, 1000);
				} else {
					layer.msg(Msg);
					console.log(Msg)
				}
			}
		});
	}
}
// 弹出层layer
layui.use('layer', function() {
	var layer = layui.layer;
});

// 表单提交函数
function submitform() {
	var unum = $("input[name='unum']").val();
	var upwd = $("input[name='upwd']").val();
	var upwdd = $("input[name='upwdd']").val();
	var phone = $("input[name='cellphone']").val();
	if(unum==""||unum==null||unum==undefined){
		layer.msg("请输入账号！！！");
		return false;
	} else if (upwd !== upwdd) {
		layer.msg("您两次输入的密码不一样！！！")
		return false;
	} else if (phone == "" || phone == null || (!checkPoneAvailable(phone))) {
		layer.msg("请输入正确的手机号！！！");
	}
	 else {
		layer.msg("提交成功！")
		$("#form").submit();
	}
	
}
// 点击图型 更换图片
$("#vcodeImg").click(function() {
	// alert(3);
	var m10 = Math.random() * 10;
	console.log(m10);
	var aa = parseInt(m10) + 1;
	console.log(aa);

	$(this).attr("src", "../images/validate3.gif");
});

