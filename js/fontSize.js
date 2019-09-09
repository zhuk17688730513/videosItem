function fontSize(){
	var designWidth = 750;
	var screenWidth = document.documentElement.clientWidth;
	if(screenWidth >= designWidth) screenWidth = designWidth;
	document.documentElement.style.fontSize = screenWidth / (designWidth / 100) + 'px';
	console.log(screenWidth);
}

fontSize();

window.onresize = function(){
	fontSize();
}
