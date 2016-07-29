function progress(percent, $element) {
	var progressBarWidth = percent * $element.width() / 100;
	$element.find("div").animate({
		width: progressBarWidth 
	}, 1000).html(percent + "%");
};

/*
function progress(percent) {
	var progressBarWidth = percent * $(this).width() / 100;
	$(this).find("div").animate({
		width: progressBarWidth 
	}, 1000).html(percent + "%");
};
*/