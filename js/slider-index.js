$(document).ready(function () {

	$('#js-main-slider').pogoSlider({
		autoplay: true,
		autoplayTimeout: 3000,
		displayProgess: true,
		preserveTargetSize: true,
		targetWidth: 1000,
		targetHeight: 100,
		responsive: true
	})
	.data('plugin_pogoSlider');

	var transitionDemoOpts = {
		displayProgess: false,
		generateNav: false,
		generateButtons: false
	}

});