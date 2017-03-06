//总头目
define(['require','main'],function (require) {
	require(['js/modules/index.js','js/modules/nav.js'],function (index,nav) {
		index();
		nav();
//		xiazai();
	});
});