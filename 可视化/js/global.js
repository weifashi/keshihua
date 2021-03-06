/*
 * 
 * ===========global.js（全局js）	===============
 * 
 */
var Class;
var ksIndex = 0;
var globa = {
	init: function() {
		$(document).bind("selectstart", function() { return false });
		globa.scrollLeft();
		globa.addDom();
		globa.modifyClass();
		$(document).mouseover(function(e) { //鼠标经过虚线
			globa.mouseover(e);
		});
		$('input').bind('input propertychange', function(e) { //监听input
			$(".SelectArea").hide();
			globa.propertychange(e);
			globa.Style();

		});
		$("input").keydown(function(event) { //方向键盘-上下
			var i = $(this).val();
			if(event.keyCode == 38) {
				i++;
				$(this).val(i);
				globa.propertychange(event);
				globa.Style();
			} else if(event.keyCode == 40) {
				i--;
				$(this).val(i);
				globa.propertychange(event);
				globa.Style();
			};
		});
		$(document).dblclick(function(e) {
			if($(e.target).parents(".main_html").length > 0) {
				$("#J_border").removeAttr("id");
				$(e.target).attr("id", "J_border");
				$("#J_thisClass").val($("#J_border").attr("class"));
				Class = "." + $("#J_border").attr("class");
				globa.colorInit();
				globa.Input();
			};
		});
		$("#J_modify-thisText").click(function  () {//修改文本
			var html=$("#J_border *").remove().clone();
			$("#J_border").text($("#J_thisText").val()); 
			$("#J_border").append(html);
		});
	},
	propertychange: function(e) { //实时更新Class的行间样式
		if(!Class || Class == ".main_warp") {
			return false;
		};
		var Json = {},
			This = $(e.target);
		if($(e.target).is("#J_height")) {
			Json.height = This.val();
		} else if($(e.target).is("#J_width")) {
			Json.width = This.val();
		} else if($(e.target).is("#J_fontSize")) {
			Json.fontSize = This.val() + "px";
		} else if($(e.target).is("#J_lineHeight")) {
			Json.lineHeight = This.val() + "px";
		}
		$(Class).height(Json.height);
		$(Class).width(Json.width);
		$(Class).css("font-size", Json.fontSize);
		$(Class).css("line-height", Json.lineHeight);
	},
	colorInit: function() { //颜色器绑定
		if(Class && Class != ".main_warp") {
			var Cla = Class;
		} else { var Cla = " "; };
		var Color = function(Class, id, Style) {
			function_full(id, function(color) {
				$(Class).css(Style, color);
				globa.Style();
			}, Class);
		};
		Color(Cla, $("#J_bjcolor"), "background-color");
		Color(Cla, $("#J_fontColor"), "color");
		Color(Cla, $("#J_borderColor"), "border-color");
	},
	Style: function() { //样式保存
		if(Class && Class != ".main_warp") {
			if($("#style").text().indexOf(Class, 0) == -1) {
				$("#style").append(Class + "{}")
			};
			$("#style").text(common.change(Class, $(Class).attr("style")));
		};
	},
	mouseover: function(e) { //移入div出现虚线
		if($(e.target).parents(".main_warp").length > 0) {
			$("[data-xx]").removeAttr("data-xx");
			$(e.target).attr("data-xx", "");
		} else {
			$("[data-xx]").removeAttr("data-xx");
		};
	},
	addDom: function() { //添加元素
		$(".navmenu_fujia li").click(function() {
			ksIndex++;
			$(this).find(">*").addClass("ksh" + ksIndex + "_top");
			if($("#J_border").length > 0) {
				$("#J_border").append($(this).html());
				var id = $("#J_border *").last();
				$("#J_border").removeAttr("id");
				id.attr("id", "J_border");
				$("#J_thisClass").val($("#J_border").attr("class"))
				Class = "." + $("#J_border").attr("class");
				globa.colorInit();
				globa.Input();
			} else {
				$(".main_warp").append($(this).html());
				$(".main_warp *").last().attr("id", "J_border");
				$("#J_thisClass").val($("#J_border").attr("class"))
				Class = "." + $("#J_border").attr("class");
				globa.colorInit();
				globa.Input();
			};
			$(this).find("*").removeClass();
		});
	},
	Input: function() { //收集录入数据
		if(!Class || Class == ".main_warp") { return; };
		var Json = {
			"thisText": $("#J_border").text(),
			"height": $("#J_border").height(),
			"width": $("#J_border").width(),
			"bjcolor": $("#J_border").css("background-color"),
			"borderColor": $("#J_border").css("border-color"),
			"fontSize": parseInt($("#J_border").css("font-size")),
			"fontColor": $("#J_border").css("color"),
			"lineHeight": parseInt($("#J_border").css("line-height")),
		};
		$("#J_height").val(Json.height);
		$("#J_width").val(Json.width);
		$("#J_bjcolor").next().find(".sp-preview-inner").css("background-color", Json.bjcolor);
		$("#J_borderColor").next().find(".sp-preview-inner").css("background-color", Json.borderColor);
		$("#J_fontSize").val(Json.fontSize);
		$("#J_fontColor").next().find(".sp-preview-inner").css("background-color", Json.fontColor);
		$("#J_lineHeight").val(Json.lineHeight);
		//获取当前文本
		var html=$("#J_border *").remove().clone();
		$("#J_thisText").val(common.Trim($("#J_border").text()));
		$("#J_border").append(html);
	},
	modifyClass: function() { //显示当前class
		$("#J_thisClass").focus(function() {
			rrr = "." + $(this).val();
		});
		$("#J_thisClass").blur(function() {
			console.log(common.strRemove(rrr))
			$("#J_border").attr("class", $(this).val())
		});
	},
	scrollLeft: function() {//拖动横向滚动条
		var div = document.getElementById('main_warp')
		div.onmousedown = function(ev) { //鼠标按下
			document.onmousemove = function(ev) { //鼠标移动
				if(ev.movementX > 0) {
					div.scrollLeft -= 5;
				} else {
					div.scrollLeft += 5;
				}
			}
			document.onmouseup = function() { //鼠标抬起
				document.onmousemove = null; //去掉函数
				document.onmouseup = null; //去掉函数
			}
			return false;
		};
	},
};
$(function() { globa.init(); });