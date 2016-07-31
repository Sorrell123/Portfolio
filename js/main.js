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

	$(".skillControllButton").click(function(){
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
	    $('html, body').animate({
	        scrollTop: $("#first").offset().top
	    }, 1000);
	});

	$(".skills").click(function(event) {
		event.preventDefault();
	    $('html, body').animate({
	        scrollTop: $("#second").offset().top
	    }, 1000);
	});

	$(".cv").click(function(event) {
		event.preventDefault();
	    $('html, body').animate({
	        scrollTop: $("#third").offset().top
	    }, 1000);
	});

	$(".portfolio").click(function(event) {
		event.preventDefault();
	    $('html, body').animate({
	        scrollTop: $("#fourth").offset().top
	    }, 1000);
	});

	$(".contact").click(function(event) {
		event.preventDefault();
	    $('html, body').animate({
	        scrollTop: $("#fifth").offset().top
	    }, 1000);
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
	
	/*
	$(".menuScroll").click(function(){
		console.log("kupa");
		$(".menuScroll").css("display", "block");
		event.stopPropagation();
	});
	*/	
});