$(window).load(function() {
	$('body').fadeTo(1000, 1);
	$('#background_gradient').fadeTo(2000, 0);

	var bg_img = document.getElementById("bg_img");
	var canvas = $("#background")[0];
	var context = canvas.getContext("2d");

	var resize_and_draw_bg = function(canvas_id, image) {
		$(canvas_id).attr('width', $('html').width()+"px");
		$(canvas_id).attr('height', $('html').height()+"px");

		canvas = $(canvas_id)[0];
		context = canvas.getContext("2d");
		drawImageProp(context, image, 0, 0, canvas.width, canvas.height);
	}

	var apply_blur = function() {
		resize_and_draw_bg('#background', bg_img)

		$('.blur').each(function(index) {
			var p = $(this).offset();
			var x = p.left;
			var y = p.top;
			var w = $(this).outerWidth();
			var h = $(this).outerHeight();

			StackBlur.canvasRGB(canvas, x, y, w, h, 10);
		});
	}

	apply_blur();

	$(window).resize(function() {
		apply_blur();
	});
});

$(document).ready(function() {
	$('.container.about').addClass('finish_animation');
});
