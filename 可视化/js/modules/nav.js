define(['require', '../modules/nav.js'], function(require) {
	return nav.init;
});
var nav = {
	init: function() {
		$(".j-title").click(function() {
			if($(this).siblings(".submenu").css('display') == 'none') {
				$(".submenu").slideUp(100);
				$(this).siblings(".submenu").slideDown(200);
			} else {
				$(this).siblings(".submenu").slideUp(100);
			}
		});
		$(".J_block").click(function  () { nav.template("block"); });
		$(".J_Academician").click(function  () { nav.template("Academician"); });
	},
	template:function(id){//模版
		var html = template(id, { });
		$(".navmenu_fujia").html(html).hide().show();
		globa.addDom();
		$(".navmenu_fujia").click(function  () { $(".navmenu_fujia").hide();});
	}
}