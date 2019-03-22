/*
* @Author: Administrator
* @Date:   2019-03-14 13:50:44
* @Last Modified by:   Administrator
* @Last Modified time: 2019-03-20 11:55:56
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
 
Vue.component("name-b",{
	props:['title'],
	template: '<h3>{{title}}</h3>',
	data(){
		return{
			messageb:"bb"
		}
	}
});


Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h2>{{ post.title }}</h2>
      <div v-html="post.content"></div>
       <button   v-on:click="$emit('enlarge-text')">
        点我可以放大字体
      </button>
    </div>
  `
});
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
			message:"hello",
			posts: [],
		   postFontSize: 1
		}
	},
	methods: {
	  onEnlargeText: function (enlargeAmount) {
	    this.postFontSize += enlargeAmount
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
        } else {
            alert("提交成功！")
            $("#Form").submit();
        }

    }
