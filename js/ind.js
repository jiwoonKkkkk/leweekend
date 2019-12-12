$(function () {
	$(".button .enter").click(function () {
		$(this).stop().animate({
			"width": "2000px",
			"height":"2000px"
		}, 2000, function () {
				window.location.href = 'ind-2.html'
		})
	})

	//	setTimeout(function () {
	//		$(".bs").stop().animate({
	//			"top": "100%"
	//		}, 2000).fadeOut(600);
	//	}, 2000)
	//
	//	$(".hamBtn").click(function () {
	//		$("#nav>li>a").css("display", "block");
	//	})
	//	var scene = document.getElementById('scene');
	//	var parallaxInstance = new Parallax(scene);
	//
	//	$(function () {
	//		$('.shape').addClass("shape-border");
	//		$('.svg-wrapper').click(function () {
	//			$('.shape').toggleClass('shape-border');
	//		});
	//	});
})
