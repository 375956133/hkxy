/*
* @Author: Administrator
* @Date:   2019-02-22 15:51:36
* @Last Modified by:   Administrator
* @Last Modified time: 2019-02-22 15:51:42
*/
$(function () {
    /*头部下拉菜单*/
    $(".header li").hover(function () {
        $(this).find(".xiala").stop(true, true).slideDown();
    }, function () {
        $(this).find(".xiala").stop(true, true).slideUp();
    });
	//学院系列页面下拉菜单
	$(".headNav .second .header>li:has('.dl_1')").hover(function(){ 
		$(this).find('.dl_1 ').stop(true,true).animate({height:270},200);
		$('.hover_bg ').stop(true,true).animate({height:270},200)
	},function(){ 
		$(this).find('.dl_1 ').stop(true,true).delay(10).animate({height:0},100);
		$('.hover_bg ').stop(true,true).delay(20).animate({height:0},200)
	});
	//三级导航最后一个无border
	$(".subNavMenu dl dd:last a").css("border-bottom","0px");
	//标题居中显示
	$(".sigleT span").each(function(){
		var spanW = parseInt($(this).width())/2;
		$(this).css("margin-left",-1*spanW+"px");
	})
	

    /*底部友情链接*/
    $(".youqing input").focus(function () {
        $(".lianjie").slideDown();
    });
    $(".youqing input").blur(function () {
        $(".lianjie").slideUp();
    });

    /*学院左侧菜单点击事件*/
    $(".listNav .dz .ds").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(this).find(".displayShow").stop(true, true).slideDown();
        $(this).siblings().find(".displayShow a").removeClass("active")
        $(this).siblings().find(".displayShow").stop(true, true).slideUp();
    });
    $(".displayShow a").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
    $(".topDiv").click(function () {
        $('body,html').animate({ scrollTop: 0 }, 500);
    });

    $(".leftMenu .dd").hover(function () {
        $(this).addClass("on").siblings().removeClass("on");
        var on = $(this).index();
        $(".rightMenu dl dd").eq(on).stop(true, true).fadeIn().siblings().stop(true, true).fadeOut();
        $(".rightMenu dl dd").hover(function () {
            $(".leftMenu .dd").eq(on).addClass("on").siblings().removeClass("on");
            $(this).stop(true, true).show();
        }, function () {
            $(".leftMenu .dd").eq(on).removeClass("on");
            $(this).stop(true, true).fadeOut();
        });
    }, function () {
        $(this).removeClass("on");
        $(".rightMenu dl dd").stop(true, true).hide();
    });

    /*ie*/
    window.onload = function () {
        $(".ie_Background").each(function () {
            var str = $(this).css("background-image");
            var srcBg = str.substring(str.indexOf("(") + 1, str.indexOf(")"));
            $(this).css("filter", "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + srcBg + ",sizingMethod='scale')");
        });
    };
});

(function ($) {
    $('.zc').bind('click', function () { $(this).addClass('active'); });
    var bodyHeight = document.documentElement.clientHeight + $(document.body).scrollTop();
    $("body").css("height", bodyHeight + "px");
    $.extend({
        EnumUtil: {
            PayType: {},
            PaySource: {},
            WaterInfoSource: {},
            ExpressWaterInfoSource: {},
            OrderCategory: {},
            AuditStaus: {},
            OrderStaus: {},
            IntentionApplyState: {},
            RequestType: {},
            RequestState: {},
            IntentionApplyErrorCode: {},
            fnShow: function (obj, enu) {
                if (typeof obj !== 'object' || typeof enu !== 'object') throw 'EnumUtil.show不是一个对象';
                $.fnDefaultShowMsg(obj);
            }
        },
        fnDefaultShowMsg: function (obj) {
            alertTips(obj['message'], 3000);
            setTimeout(function () { obj['active'] && $.fnMethodActive(obj)(); }, 500);
        },
        fnMethodActive: function (obj) {
            return {
                'Void': function () {
                    return false;
                },
                'ResetCode': function () {
                    $('#img_Code').trigger('click');
                    $('#ipt_Code').val('');
                },
                'NotLogin': function () {
                    window.location.href = 'login/Default.htm';
                },
                'RegisterSuccessJump': function () {
                    window.location.href = 'center/Default.htm';
                },
                'LoginSuccessJump': function () {
                    if(!!$('#hid_FromUrl').val().length && $('#hid_FromUrl').val().indexOf('/login/default.htm') === -1)
                        window.location.href = $('#hid_FromUrl').val();
                    else
                        window.location.href = 'center/Default.htm';
                },
                'VerifiyUserSuccessJump': function () {
                    window.location.href = 'login/find2.htm';
                },
                'VerifiyUserSMSCodeSuccessJump': function () {
                    window.location.href = 'login/find3.htm';
                },
                'SaveUserInfoSuccessJump': function () {
                    window.location.href = 'center/Default.htm';
                },
                'UpdTelSuccessJump': function () {
                    window.location.href = 'center/Default.htm';
                },
                'ResetFormJump': function () {
                    document.forms[0].reset();
                },
                'ErrorPageJump': function () {
                    window.location.href = 'Error.aspx';
                },
                'EmailValiSuccessJump': function () {
                    window.location.href = 'Password/ChangeTwo.htm';
                },
                'UpDatePwdSuccessJump': function () {
                    window.location.href = 'login/find4.htm';
                },
                'UpNewPwdSuccessJump': function () {
                    window.location.href = 'center/success.htm';
                },
                'CommentVoid': function(){
                    ShowPage(1);
                    $('#ipt_Comment').val('');
                    SumVideoScore();
                    $('#SumScore').show();
                    $('#NoScore').hide();
                },
                'CommentVoid2': function () {
                    ShowPage(1);
                    $('#ipt_Comment').val('');
                    SumRobotScore();
                    $('#SumScore').show();
                    $('#NoScore').hide();
                },
            }[obj['active']];
        },
        toFixed2: function (num) {
            return parseFloat(+num.toFixed(2));
        },
        fnCanelButton: function () {
            $('.save').removeClass('active');
        }
    });
})(jQuery);

function alertTips(tips, time, func) {
    $(".tipsMain").fadeIn();
    $(".tipsMain .centerSuccess span").text(tips);
    setTimeout(function () { $(".tipsMain").fadeOut(); func && func(); }, time);
};










