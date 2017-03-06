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
		//保存导航浏览记录到本地
		$(".submenu li").click(function() {
			var navIndex = {
				title: $(this).parents(".basic>div").index(),
			};
			if($(this).attr("href") != "javascript:void(0)") {
				localStorage.navIndex = JSON.stringify(navIndex);
			};
		});
		//默认加载页面
//		if(localStorage.navIndex) {
//			var navIndex = JSON.parse(localStorage.navIndex);
//			$(".basic>div").eq(navIndex.title).find(".submenu").show(0);
//		};
	}
}
