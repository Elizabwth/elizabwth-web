$(window).load(function() {
	$('body').fadeTo(1000, 1);
	//$('#background').fadeTo(1000, 1);
	$('#background_gradient').fadeTo(2000, 0);

	var bg = document.getElementById('background');
	var bg_width = bg.naturalWidth;
	var bg_height = bg.naturalHeight;

	var apply_blur = function() {
		var doc_width = $(document).width();
		var doc_height = $(document).height();

		var x_dif = bg_width - doc_width;
		var y_dif = bg_height - doc_height;

		$('.blur').each(function(index) {
			var id_name = "blur_"+index;
			var p = $(this).offset();
			var x = p.left + (x_dif/2);
			var y = p.top + (y_dif/2);
			var w = $(this).outerWidth();
			var h = $(this).outerHeight();

			var canvas = $("#"+id_name);
			if (canvas.length == 0) {
				var canvas = $('<canvas id="'+id_name+'" style="position:absolute;z-index:-10;top:0;left:0;"/>');
				$(this).prepend(canvas);
			}
			canvas[0].width = w;
			canvas[0].height = h;

			var canvas = canvas[0];
			var context = canvas.getContext("2d");
			context.drawImage(bg, x, y, w, h, 0, 0, w, h);
			stackBoxBlurCanvasRGB(id_name, 0, 0, w, h, 10, 1);
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
