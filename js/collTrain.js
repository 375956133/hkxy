/*
* @Author: Administrator
* @Date:   2019-03-14 09:50:52
* @Last Modified by:   Administrator
* @Last Modified time: 2019-03-14 10:50:31
*/
var collTrain=new Vue({
	el:"#collTrain",
	data(){
		return{
			items:[]
		}
	}
});
axios.get("http://localhost:3000/collTrain")
.then(function(res){
	console.log(res.data);
	collTrain.items=res.data;
})
.catch(function(err){
	console.log(err)
})
