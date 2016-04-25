var load_background = function() {
	var bg_picture = '/static/res/img/bg/bgbw.jpg';
	$.ajax({ 
		url: bg_picture, 
		cache: true,
		processData: false,
	}).always(function() {
		$('#background')
			.css('background-image', "url("+bg_picture+")")
			.fadeTo(1000, 1);
		$('#background_gradient').fadeTo(1500, 0);
	});
}

$(window).load(function() {
	load_background();
});

$(document).ready(function() {
	$('.container.about').addClass('finish_animation');
});
