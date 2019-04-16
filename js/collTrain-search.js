/*
* @Author: Administrator
* @Date:   2019-03-14 13:50:44
* @Last Modified by:   375956133
* @Last Modified time: 2019-04-16 10:16:24
*/


// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能

// 全局注册的行为必须在根Vue实例(通过 new Vue) 创建之前发生
 
// 每一个vue组件本质上都是vue的实例  有自己的data 自己的methods  自己的template  

Vue.component("itemli",{
  props:['item','index'],
  data(){
    return{
      message:"我是子组件"
    }
  },
  template:`
  <div>
  <li @click="deleteli">{{index}}{{item}}{{message}}</li>
  </div>
  `,
  methods:{
    deleteli:function(){
      alert(111);
      this.$emit("deleli",this.index);
    }

  }
})
// 请求数据
axios.get("http://localhost:3000/content")
.then(function(res){
	console.log(res.data);
	collTrainSearch.posts=res.data
})
.catch(function(err){
	console.log(err)
})
// 初始化根实例
var collTrainSearch=new Vue({
	el:"#collTrainSearch",
	data(){
		return{
      items:[],
      inputvalue:""
		}
	},
	methods: {
    foo1:function(){
      this.items.push(this.inputvalue);
      this.inputvalue=''
    },
     foo2:function(index){
      alert(3);
      this.items.splice(index,1)
    }

	},
	router
}).$mount("#collTrainSearch");
// 现在，应用已经启动了！

 /*这里是提交表单前的非空校验*/
    function checkForm () {
        var uname = $("input[name='uname']").val();
        var uphoto = $("input[name='uphoto']").val();

        if (uname == "" || uname == null || uname == undefined) {
            alert("请输入姓名！");
            return false;/*阻止表单提交*/
        } else if (uphoto == "" || uphoto == null || uphoto == undefined) {
            alert("请输入正确的手机号码！");
            return false;
        } else if (!checkPoneAvailable(uphoto)) {  // 验证手机号码
          alert("您输入的手机号有误！！！", function() {})
          return false;
        }else {
            alert("提交成功！")
            $("#Form").submit();
        } 

    }

     //    验证手机号码格式
    function checkPoneAvailable(str) {
        var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test(str)) {
            return false;
        } else {
            return true;
        }
    }