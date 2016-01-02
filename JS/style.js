$(document).ready(function() {
	$('.review img').mouseover(function() {
		var src = $(this).attr("src").match(/[^\.]+/) + ".gif";
		$(this).attr("src", src);
	})
	.mouseout(function() {
		var src = $(this).attr("src").match(/[^\.]+/) + ".png";
		$(this).attr("src", src);
	});

	/*$('.review').mouseover(function() {
		$(this).find(".svg").animate({
			width: 210
		}, 300, function() {
			// Animation complete.
		});
	});*/

	$('.review').mouseover(function() {
		var self = $(this);
		var random = Math.floor((Math.random() * 100));
		var section = self.attr("data-section");
		var svg = "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='500px' height='100px' viewBox='0 0 500 100'><defs><style><![CDATA[text, image {font-family: sans-serif;font-size: 20px;fill: #000;font-weight: bold;}]]></style><animate id='filteredSlide' attributeName='dx' from='500' to='0' begin='0s;tgt.DOMAttrModified' dur='0.5s' fill='freeze' values='500;0;-20;10;0' keyTimes='0;0.8;0.85;0.9;1' xlink:href='#slideEffect" + random + "'/><animate id='filteredBlur' attributeName='stdDeviation' from='20,1' to='0,0' begin='filteredSlide.end-0.2s' dur='0.2s' fill='freeze' xlink:href='#blurEffect" + random + "'/><filter id='slidingBlur" + random + "'><feOffset id='slideEffect" + random + "' dx='0' dy='0'/><feGaussianBlur id='blurEffect" + random + "' stdDeviation='0'/></filter></defs><g transform='translate(100,0)'><text class='alt' onclick='this.classList.toggle(\"alt\")' id='tgt' x='0' y='60' filter='url(#slidingBlur" + random + ")'>" + section + "</text></g></svg>";
		self.find(".hiddenPanel-text")[0].innerHTML = svg;
	});
});

$(document).ready(function() {
	$(".review").click(function(){
		var panel = $(this).next();
		var visible = panel.attr("data-visible") == "visible";
		if(visible){
			panel.slideUp(1500);
			panel.attr("data-visible", "hidden");
		} else {
			panel.slideDown(1500);
			panel.attr("data-visible", "visible");
		}
	});
});