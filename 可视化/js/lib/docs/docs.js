$(function() {
	var arrObj = [$("#J_bjcolor"), $("#J_fontColor"), $("#J_borderColor")];
	$.each(arrObj, function(index, obj) {
		function_full(obj);
	});
});
function function_full(obj, funn,bgColor2) {
	var bgColor;
	obj.spectrum({
		allowEmpty: true,
		color:"#fff",
		showInput: true,
		containerClassName: "full-spectrum",
		showInitial: true,
		showPalette: false,
		showSelectionPalette: true,
		showAlpha: true,
		maxPaletteSize: 10,
		preferredFormat: "hex",
		localStorageKey: "spectrum.demo",
		showAlpha: true, //显示透明度选择
		move: function(color) {
			bgColor=$(this).next().find(".sp-preview-inner").css("background-color");
			if(funn) {
				funn(bgColor);
			};
		},
		hide: function(color) {
			$(this).next().find(".sp-preview-inner").css("background-color",bgColor);
			if(funn) {
				funn(bgColor);
			};
		},
	});
};
