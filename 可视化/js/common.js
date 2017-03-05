/*
 * 
 * ===========common.js（各种封装好的类）	===============
 * 
 */
var common = {
	Trim: function(str, is_global) { //去掉所有空格  common.Trim("2213","g");
		var result;
		result = str.replace(/(^\s+)|(\s+$)/g, "");
		if(is_global.toLowerCase() == "g") {
			result = result.replace(/\s/g, "");
		}
		return result;
	},
	change: function(obj, sty) { //换样式   common.change('.div',"width: 200px;");
		if(undefined==sty){
			sty=" ";
		};
		var Style = $("#style").text();
		var i = $("#style").text().indexOf(obj, 0); //样式开始的位置
		var k = $("#style").text().indexOf("}", $("#style").text().indexOf(obj, 0)) + 1; //样式的结尾位置
		var str = Style.substring(i, k);
		str = Style.replace(str, obj + "{" + sty + "}");
		return str;
	},
	strRemove: function(str, isStr) { //删除指定字符串 common.strRemove('12345',"3");  返回1245
		var str = str;
		var ttr = str.split(isStr); //数组
		str = ttr.join(''); //字符串
		return str;
	},
	getObjXy:function(obj){//获取元素位置。只接收id       var test = common.getObjXy('J_height');  console.log(test);    
		var xy = document.getElementById(obj).getBoundingClientRect();
		var top = xy.top - document.documentElement.clientTop + document.documentElement.scrollTop, 
			bottom = xy.bottom,
			left = xy.left - document.documentElement.clientLeft + document.documentElement.scrollLeft, 
			right = xy.right,
			width = xy.width || right - left,
			height = xy.height || bottom - top;
		return {
			top: top,
			right: right,
			bottom: bottom,
			left: left,
			width: width,
			height: height
		}
	}
}




















