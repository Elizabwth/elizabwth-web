var load_background = function() {
	var bg_picture = '/static/res/img/bg/bgbw.jpg';
	$.ajax({ 
		url: bg_picture, 
		cache: true,
		processData: false,
	}).always(function() {
		$('#background')
			.css('background-image', "url("+bg_picture+")")
			.fadeTo(1500, 1);
		$('#background_gradient').fadeTo(2500, 0);
	});
}

var set_content_height = function() {
	var window_height = $('body').height();
	var content = $('.content');

	var nav_height = $('.nav').height();
	var footer_height = $('.footer').height();
	var min_height = window_height - nav_height - footer_height;
	content.css({'min-height': min_height});
}

$(window).load(function() {
	load_background();
	set_content_height();
});

$(document).ready(function() {
	//$('.content').fadeTo(500, 1);
});
