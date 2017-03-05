//
//=========头部多选择区===============
//
define(['require', '../modules/index.js'], function(require) {
	return SelectArea.init;
});
var SelectArea={
	init:function  () {
		var This,Event;
		$('input[type="text"]').focus(function  (e) {
			This = $(e.target);
			Event =e;
			var test =common.getObjXy(This.attr('id'));
//			$(".SelectArea").show().css("left",test.right)
			$(".SelectArea").show();
		});
		$(".SelectArea button").click(function  (e) {
			e.stopPropagation();
			This.val($(this).val());
			globa.propertychange(Event);
			$(".SelectArea").hide();
		})
		$('input[type="text"]').blur(function  () {
			setTimeout(function  () {
				$(".SelectArea").hide();
			}, 100);
		});
	}
}





















