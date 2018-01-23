$(function() {
	carouselSlider();
});

function carouselSlider() {
    var carouselList = $("#carousel ul");
    var arrowRight =  $("#carousel-next");
    var arrowLeft =  $("#carousel-prev");

    function changeSlide() {
    	carouselList.animate({"marginLeft":-1000}, 600, "linear", moveFirstSlide());
	}

	changeSlide();

	function changeSlideAfterClick() {
		arrowRight.on("click", function() {
			stopInterval();
			changeSlide();	
		});
		arrowLeft.on("click",function() {
			stopInterval();
			carouselList.animate({"marginRight": -1000}, 600, "linear", moveLastSlide());	
		});
	}

	changeSlideAfterClick();

    function moveFirstSlide() {
    	var firstItem = carouselList.find("li:first");
    	var lastItem = carouselList.find("li:last");
    	lastItem.after(firstItem);
    	carouselList.css("marginLeft", 0);
    }

    function moveLastSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
		carouselList.css("marginRight", 0);
	}

	var interval = setInterval(changeSlide, 3000); 
   	interval();

    function stopInterval() {
    	clearInterval(interval);
    }
}
