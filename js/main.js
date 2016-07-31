$(document).ready(function(){
	//loading bars
	$(".skill").addClass("opacity0").viewportChecker({
		classToAdd: "opacity1 animated fadeIn",
		offset: 150,
		callbackFunction: function(){
			progress(80, $(".cycle-slide-active > div > div.high"));
			progress(60, $(".cycle-slide-active > div > div.mid"));
			progress(40, $(".cycle-slide-active > div > div.low"));
		}
	});

	$(".skillControllButtonNext").click(function(){
		progress(80, $(".cycle-slide-active > div > div.high"));
		progress(60, $(".cycle-slide-active > div > div.mid"));
		progress(40, $(".cycle-slide-active > div > div.low"));
	});

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
	$(".work").hover(function() {
		$(this).children().fadeIn();
	}, function () {
		$(".workDescription").fadeOut();
	});


	//Give to menu its funcionality
	
	$(".home").click(function(event) {
		event.preventDefault();
	    $("#header").ScrollTo({
	    	duration: 2000,
    	    easing: 'linear'
	    });
	});

	$(".about").click(function(event) {
	    event.preventDefault();
	    $("#first").ScrollTo({
	    	duration: 2000,
    	    easing: 'linear'
	    });
	});

	$(".skills").click(function(event) {
	    event.preventDefault();
	    $("#second").ScrollTo({
	    	duration: 2000,
    	    easing: 'linear'
	    });
	});

	$(".cv").click(function(event) {
	    event.preventDefault();
	    $("#third").ScrollTo({
	    	duration: 2000,
    	    easing: 'linear'
	    });
	});

	$(".portfolio").click(function(event) {
	    event.preventDefault();
	    $("#fourth").ScrollTo({
	    	duration: 2000,
    	    easing: 'linear'
	    });
	});

	$(".contact").click(function(event) {
	    event.preventDefault(); //zapobiega wykponaniu domyslnej akcjii
	    $("#fifth").ScrollTo({
	    	duration: 2000,
    	    easing: 'linear'
	    });
	});


	//Pushing menu button
	$(".menuButton").click(function(){
		$(".menuScroll").slideToggle("normal");
		$(".menuArrowDown").toggleClass("none");
		$(".menuArrowUp").toggleClass("none");
	});

	//Showing menu button when scroll is lower
	$(document).scroll(function() {
        var navHeight = $(".menu").height();
        var scrollAmount = $(window).scrollTop();

        if(scrollAmount > navHeight){
        	$(".menuButton").removeClass("none");
        }else if(scrollAmount <= navHeight){
        	$(".menuButton").addClass("none");
        	$(".menuScroll").css("display", "none");
        	$(".menuArrowDown").removeClass("none");
        	$(".menuArrowUp").addClass("none");
        }
	});
	
	$(".fixPropagation").click(function(event){
		event.stopPropagation(); // na bubbling effect
	});
});