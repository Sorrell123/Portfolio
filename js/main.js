$(document).ready(function(){
	//loading bars
	progress(80, $(".high"));
	progress(60, $(".mid"));
	progress(40, $(".low"));

	// Pojawianie sie elementów wraz ze scrollem
	$(".section").addClass("opacity0").viewportChecker({
		classToAdd: "opacity1 animated fadeIn",
		offset: 150
	});


	//CV toggles
	$(".toggleButton").click(function(){
		$(this).next().toggle("slow");
		$(this).children().toggleClass("none");
	});
});