define(['require', '../modules/nav.js'], function(require) {
	return nav.init;
});
var nav={
	init:function  () {
		var rul;
		//导航手风琴效果
		$(".j-title").click(function() {
			if($(this).siblings(".submenu").css('display') == 'none') {
				$(".submenu").slideUp(100);
				$(this).siblings(".submenu").slideDown(200);
			} else {
				$(this).siblings(".submenu").slideUp(100);
			}
		});
		$(".submenu li").click(function  () {
			$(".navmenu_fujia").show();
			var html="<ul><li><div>div</div></li></ul>";
			$(".navmenu_fujia").html(html);
			globa.addDom();
		});
	}
}
