/*
* @Author: Administrator
* @Date:   2019-02-22 15:43:40
* @Last Modified by:   Administrator
* @Last Modified time: 2019-02-22 15:43:50
*/
;
(function (_window) {
    Number.prototype.toPercent = function () {
        var num = (Math.round(this * 10000) / 100).toFixed(2);
        if (num > 100)
            num = 100;
        return parseFloat(num);
    };
    String.prototype.SetTime = function (cDom) {
        var maxtime = '', str = this;
        var timers = setInterval(function () {
            var endTime = new Date(str).getTime();
            var startTime = new Date().getTime();
            maxtime = endTime - startTime;
            if (maxtime < 0)
                clearInterval(timers);

            var h = Math.floor(maxtime / 1000 / 60 / 60).toString().TimeFoo();
            var m = Math.floor(maxtime / 1000 / 60 % 60).toString().TimeFoo();
            var s = Math.floor(maxtime / 1000 % 60).toString().TimeFoo();
            cDom.text([h, m, s].join(':'));
        }, 1000);
    };
    String.prototype.SetTimes = function (cDom) {
        var maxtime = '', str = this;
        maxtime = (parseInt(str.split(':')[0], 10) * 60 + parseInt(str.split(':')[1], 10)).toString();
        var timers = setInterval(function () {
            maxtime = maxtime - 1;
            if (maxtime < 0)
                clearInterval(timers);

            var m = Math.floor(maxtime / 60 % 60).toString().TimeFoo();
            var s = Math.floor(maxtime % 60).toString().TimeFoo();
            cDom.text([m, s].join(':'));
        }, 1000);
    };

    String.prototype.TimeFoo = function () {
        var str = ['00000', String(this)].join('');
        return str.substring(str.length - 2, str.length);
    };
    Date.prototype.objformat = function (format) {
        var a = new Array('日', '一', '二', '三', '四', '五', '六');
        var o = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S": this.getMilliseconds(),
            "w": '星期' + a[new Date().getDay()]
        }
        if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(format)) format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
        }
        return format;
    };
    String.prototype.JsonToDateFormat = function () {
        var d = new Date(this).objformat('yyyy年MM月dd日 hh时mm分');
        return d;
    };
    String.prototype.JsonToDate = function () {
        var d = new Date(this).objformat('yyyy-MM-dd hh:mm:ss');
        return d;
    };
    String.prototype.Days = function () {
        var d = new Date(this);
        return d.objformat('dd');
    };
    String.prototype.Months = function () {
        var d = new Date(this);
        return d.objformat('MM');
    };
    String.prototype.Years = function () {
        var d = new Date(this);
        return d.objformat('yyyy');
    };
    String.prototype.YMD = function () {
        var d = new Date(this);
        return d.objformat('yyyy-MM-dd');
    };
    String.prototype.YMDFormat = function () {
        var d = new Date(this);
        return d.objformat('yyyy.MM.dd');
    };
    String.prototype.FnProductZan = function (IP) {
        return (',' + String(this) + ',').indexOf((',' + String(IP) + ',')) !== -1;
    };
    String.prototype.FnShopCart = function (UserID) {
        return (',' + String(this) + ',').indexOf((',' + String(UserID) + ',')) !== -1;
    };
    String.prototype.FnPass = function () {
        var Pass = String(this);
        if (Pass === 'True') return '<i class="fontello-ok-circle c_blue f18"></i>';
        else return '<i class="fontello-attention-4 c_red f18"></i>';
    };
    String.prototype.FnSex = function () {
        var Sex = String(this);
        if (Sex === '1') return '男';
        else return '女';
    };
    String.prototype.FnLength = function (count) {
        var str = String(this);
        if (str.length > count)
            str = str.substr(0, count) + '...';
        return str;
    };
    String.prototype.FnEmailStar = function () {
        var str = String(this);
        var count = str.indexOf('@');
        var Ext = str.split('@')[1];
        var result = [str.substr(0, 2), '***@', Ext].join('');
        return result;
    };
    String.prototype.JSONTODatetime = function () {
        var date = new Date(parseInt(String(this).replace("/Date(", "").replace(")/", ""), 10));
        return date.objformat('yyyy-MM-dd hh:mm:ss');
    };
    String.prototype.JSONTODate = function () {
        var date = new Date(parseInt(String(this).replace("/Date(", "").replace(")/", ""), 10));
        return date.objformat('yyyy-MM-dd');
    };
    String.prototype.JSONDateFormat = function () {
        try {
            var date = new Date(parseInt(this.replace("/Date(", "").replace(")/", ""), 10));
            var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
            var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            return date.getFullYear() + "-" + month + "-" + currentDate;
        } catch (e) {
            return "";
        }
    };
    _window.FnShowMessage = function (parString, parFun) {
        var csp = []
        if (typeof parString === 'string') {
            csp = parString.split('|');
        } else {
            csp[0] = parString['mark'];
            csp[1] = parString['info'];
        }

        if (csp.length > 0 && csp[0] === '0') {
            if (typeof parString === 'string') parFun();
            else parFun(csp[1]);
            return false;
        }
        if (csp.length > 1) {
            return {
                'UserFailure': function () {
                    window.top.location.href = '/Default.aspx';
                    return;
                },
                'submissionSame': function () {
                    if (!$('.error_P').get(0))
                        alert('存在重复数据');
                    else $('.error_P').empty().html('存在重复数据');
                },
                'SameName': function () {
                    $('#errorMsg').empty().html('名称已存在');
                },
                'SameTitle': function () {
                    $('#LongTitle').next('em').empty().html('标题已存在');
                    $('#errorMsg').empty().html('标题已存在');
                },
                'SameQuestion': function () {
                    $('#errorMsg').empty().html('问题已存在');
                },
                'SameType': function () {
                    $('#errorMsg').empty().html('不能选择本身');
                },
                'SameUserName': function () {
                    $('#errorMsg').empty().html('用户名已存在');
                },
                'emailSame': function () {
                    $('#errorMsg').empty().html('邮箱已存在');
                },
                'errorNamePassowrd': function () {
                    $('#a_tijiao').removeAttr('disabled');
                    $('.loading').hide();
                    $('.error_P').empty().html('<span><img src="/images/cwx.png" width="20" alt="" /></span>用户名或者密码错误');
                    $('#errorMsg').empty().html('用户名或密码错误');
                },
                'errorOldPassword': function () {
                    $('#errerMsg').empty().html('旧密码错误');
                },
                'TimeSameInfo': function () {
                    $('#errorMsg').empty().html('今天您已咨询过问题，请明天再试！');
                },
                'errorNewPassword': function () {
                    $('#errorMsg').empty().html('确认密码错误');
                },
                'errorPhone': function () {
                    $('#errorMsg').empty().html('手机号码不存在');
                },
                'errorBindIP': function () {
                    $('.error_P').empty().html('IP地址绑定错误');
                },
                'errorNullity': function () {
                    $('.error_P').empty().html('未查询到相关信息');
                    $('#errorMsg').empty().html('未查询到相关信息');
                },
                'errorFrozen': function () {
                    $('#a_tijiao').removeAttr('disabled');
                    $('.loading').hide();
                    $('.error_P').empty().html('<span><img src="/images/cwx.png" width="20" alt="" /></span>账户已冻结');
                },
                'errorDelete': function () {
                    $('#a_tijiao').removeAttr('disabled');
                    $('.loading').hide();
                    $('.error_P').empty().html('<span><img src="/images/cwx.png" width="20" alt="" /></span>用户不存在');
                },
                'errorUnknown': function () {
                    $('.error_P').empty().html('未知错误');
                },
                'missParameters': function () {
                    $('.error_P').empty().html('缺少参数');
                },
                'formatError': function () {
                    $('.error_P').empty().html('文件格式错误');
                },
                'uploadFailed': function () {
                    $('.error_P').empty().html('文件上传失败');
                },
                'submissionFailure': function () {
                    $('.error_P').empty().html('提交失败');
                },
                'submissionSuccess': function () {
                    $('.error_P').empty().html('提交成功');
                },
                'cloneFailure': function () {
                    $('.error_P').empty().html('克隆失败');
                },
                'cloneSuccess': function () {
                    $('.error_P').empty().html('克隆成功');
                },
                'timeout': function () {
                    $('.error_P').empty().html('已超出预定时间');
                },
                'valicodeError': function () {
                    $('.error_P').empty().html('验证码错误');
                    $('#errorMsg').empty().html('验证码错误');
                },
                'OperateTypeError': function () {
                    alert('操作类型错误');
                },
                'ProjectError': function () {
                    alert('操作项目表出错');
                },
                'TempTableError': function () {
                    alert('操作临时表出错');
                },
                'ProjectTaskError': function () {
                    alert('操作任务表出错');
                },
                'ProjectTaskLogError': function () {
                    alert('操作任务日志表出错');
                },
                'ProjectTaskLogIsReply': function () {
                    alert('您有未回复项目经理批注的日志，请先回复！');
                },
                'MessageInfoError': function () {
                    alert('消息录入出错！');
                },
                'MessageError': function () {
                    alert('消息操作出错！');
                },
                'ColSameError': function () {
                    alert('您已收藏，不可重复收藏！');
                },
                'ApplySameError': function () {
                    alert('您已报名，不可重复报名！');
                },
                'NotLoginError': function () {
                    alert('您未登录，请登录后再试！');
                }
            }[csp[1]]();
        }
    };
})(window);

String.ValidateFunc = {
    //数字
    CNumber: /^(\d+)$/,
    //整数、小数
    DNumber: /^[0-9]+([.]{1}[0-9]+){0,1}$/,
    //字母
    Letter: /^[A-Za-z]{0,}$/,
    //数字加字母
    NumberLetter: /^(\w|\d){1,}$/,
    //测试ID
    TestID: /(^0+$)|(^1+$)|(^2+$)|(^3+$)|(^4+$)|(^5+$)|(^6+$)|(^7+$)|(^8+$)|(^9+$)/,
    SpecificChar: /[`=~!@#$%^&*()_+\[\]{}\\|\/.>,<;:'\-?<>～！＃￥％…；‘’：“”—＊（）→—＋｜－＝、／。，？《》↑↓⊙●★☆■♀『』◥◣◆◤Ψ※→№←㊣∑⌒〖〗＠ξζω□∮〓※▓∏卐【】▲△√∩¤々♀♂∞ㄨ≡↘↙＆◎Ю┼┏┓┃○╪┗┛∴①②③④⑤⑥⑦⑧\"]/,
    //身份证
    MainID: /(\d{15})|(\d{18})/,
    //邮箱
    Mail: /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/,
    //密码为六位数字加字母
    Pwd: /^(\w|\d){6,}$/,
    //手机号码11位数字
    MPhone: /^((\(\d{2,3}\))|(\d{3}\-))?((13\d{9})|(15[0123456789]\d{8})|(18\d{9}))$/,
    Validate: function () {
        if (arguments.length > 1) {
            var str = arguments[0];
            var reg = arguments[1];
            return reg.test(str);
        }
    }
};
String.prototype.FnCardValidate = function () {
    var CardID = String(this);
    var arrExp = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; //加权因子  
    var arrValid = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]; //校验码  
    if (/^\d{17}\d|x$/i.test(CardID)) {
        var sum = 0, idx;
        for (var i = 0; i < CardID.length - 1; i++) {
            // 对前17位数字与权值乘积求和  
            sum += parseInt(CardID.substr(i, 1), 10) * arrExp[i];
        }
        // 计算模（固定算法）  
        idx = sum % 11;
        // 检验第18为是否与校验码相等  
        return arrValid[idx] === CardID.substr(17, 1).toUpperCase();
    } else
        return false;
};
String.prototype.getUrlPara = function () {
    var reg = new RegExp("(^|&)" + this + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return "0";
};
String.prototype.BaseUserInfo = function (dd) {
    var $a = $(['<a href="###" ondblclick="FnMouseEnter(this,\'', dd, '\')">', this, '</a>'].join(''));
    return $a.prop("outerHTML");
};
String.prototype.ToBoolean = function () {
    return typeof this !== 'undefined' ? (String(this).replace(/\s/g, '').toLowerCase() === 'true' ? true : false) : false
};