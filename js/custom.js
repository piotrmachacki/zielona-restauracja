$(function() {

	// CAROUSEL //
	$('.carousel').carousel({
		interval: 3000
	});

	// WOW ANIMATED //
	wow = new WOW({
		mobile: false
	});
	wow.init();

	// HIDE MOBILE MENU AFTER CLIKING ON A LINK
	$('.navbar-collapse a').click(function() {
		$(".navbar-collapse").collapse('hide');
	});

	// SMOOTH SCROLL //
	$('.smoothScroll').on('click',function(e){
		var targetId = $(this).attr('href');
		if(targetId.indexOf('#') != -1) {
			e.preventDefault();
			split = targetId.split('#');
			targetId = split[1];
			if($('#'+targetId).length) {
				$('html, body').animate({scrollTop: $('#'+targetId).offset().top}, 1000);
			} else {
				console.log('Element with ID "'+targetId+'" not exist.')
			}
		}
	});

	// FEATHERLIGHT //
	$('.featherlight-link').featherlight({
		targetAttr: 'href'
	});

});