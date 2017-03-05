/*
 * 
 * ===========global.js（全局js）	===============
 * 
 */
var Class;
var globa = {
	init: function() {
		$(document).bind("selectstart",function() {return false});
		globa.addDom();
		$(document).mouseover(function(e) { //鼠标经过虚线
			globa.mouseover(e);
		});
		$('input').bind('input propertychange', function(e) {//监听input
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
				Class = "." + $("#J_border").attr("class");
				globa.colorInit();
				globa.Input();
			};
		});
	},
	propertychange: function(e) { //实时更新Class的样式
		if(!Class || Class == ".main_warp") {
			return false;
		};
		var Json = {},This = $(e.target);
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
			function_full(id, function(color){
				$(Class).css(Style, color);
				globa.Style();
			},Class);
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
		var ks = 0;
		$(".navmenu li").click(function() {
			ks++;
			$(this).find(">*").addClass("ksh" + ks + "_top");
			if($("#J_border").length > 0) {
				$("#J_border").append($(this).html());
				var id = $("#J_border *").last();
				$("#J_border").removeAttr("id");
				id.attr("id", "J_border");
				Class = "." + $("#J_border").attr("class");
				globa.colorInit();
				globa.Input();
			} else {
				$(".main_warp").append($(this).html());
				$(".main_warp *").last().attr("id", "J_border");
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
	},
};
$(function() { globa.init(); });