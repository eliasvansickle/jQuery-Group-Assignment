$(document).ready(function() {
	$("#player").hide();
	var click = false
	$("button").hover(function(){
		var reveal = $(this).attr("data-alt-src");
		$("#wrapper").css("background-image", "url("+reveal+")");
	},

	function() {
		if (!click) {
		$("#wrapper").css("background-image", "none");
	}});

	$("button").click(function() {
		click = true;
		var choice = $(this).attr("data-alt-src");
		$("#wrapper").css("background-image", "url("+choice+")");
		$("#selection").hide();
		$("#player").show();
	});
	$(".ninja1").change(function() {
		var ninja1 = $(this).val();
		$("#ninja1").css("background-image", "url("+ninja1+")");
	});
	$(".ninja2").change(function() {
		var ninja2 = $(this).val();
		$("#ninja2").css("background-image", "url("+ninja2+")");
	});
	
});