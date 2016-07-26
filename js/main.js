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

	//Work links interaction
	
	$(".work").find("p").slideToggle();
	
	$(".work").hover(function(){
		$(this).find("p").slideToggle("slow");
		//$(this).find("p").css("height", "42px");
	}, function(){
		$(this).find("p").slideToggle("slow");
		//$(this).find("p").css("height", "0px");
	});
	
});