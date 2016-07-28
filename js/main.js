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


	//Give to menu its funcionality
	$(".home").click(function() {

	    $(".headerContainer").ScrollTo({
	    	duration: 2000,
    	    easing: 'linear'
	    });
	});

	$(".about").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".firstSection").offset().top
	    }, 1000);
	});

	$(".skills").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".secondSection").offset().top
	    }, 1000);
	});

	$(".cv").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".thirdSection").offset().top
	    }, 1000);
	});

	$(".portfolio").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".fourthSection").offset().top
	    }, 1000);
	});

	$(".contact").click(function() {
		$('html, body').animate({
	        scrollTop: $(".fifthSection").offset().top
	    }, 1000);
	});

	//Pushing menu button
	$(".menuButton").click(function(){
		$(".menuScroll").toggle("slow");
	});

	//Showing menu button when scroll is lower
	
	$(document).scroll(function() {
        var navHeight = $(".menu").height();
        var scrollAmount = $(window).scrollTop();

        console.log(scrollAmount);

        if(scrollAmount > navHeight){
        	$(".menuButton").removeClass("none");
        }else if(scrollAmount <= navHeight){
        	$(".menuButton").addClass("none");
        	$(".menuScroll").css("display", "none");
        }
	});
	
	/*
	$(".menuScroll").click(function(){
		console.log("kupa");
		$(".menuScroll").css("display", "block");
		event.stopPropagation();
	});
	*/

	//some things here

	
	
});