//总头目
define(['require','main'],function (require) {
	require(['js/modules/index.js','js/modules/nav.js','js/modules/xiazai.js'],function (index,nav,xiazai) {
		index();
		nav();
		xiazai();
	});
});