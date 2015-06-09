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

	$("option").val(function() {
		var ninja = $(this).attr("data-alt-src");
		$("#wrapper").css("background-image", "url("+ninja+")")
	});
});