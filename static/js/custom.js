$(document).ready( f => {

	var windowTop = $(window).scrollTop()
	var coverPage = $('#coverPage').offset().top
	var navPage = $('#navPage').offset().top
	var eventsPage = $('#events').offset().top
	var musicPage = $('#music').offset().top
	var videosPage = $('#videos').offset().top
	var aboutusPage = $('#aboutus').offset().top
	var scrollMarker = 0
	var topNav = $('#navTop')
	var bottomNav = $('#navBottom')
	var mainNav = $('#mainNav')
	bottomNav.hide()

	$(window).scroll( f => {

		var coverPage = $('#coverPage').offset().top
		var navPage = $('#navPage').offset().top
		var windowTop = $(window).scrollTop()
		var eventsPage = $('#events').offset().top
		var musicPage = $('#music').offset().top
		var videosPage = $('#videos').offset().top
		var aboutusPage = $('#aboutus').offset().top


		if (windowTop > coverPage) {
			$('#coverPage').slideUp('slow', 'swing')
			topNav.slideUp('slow', 'swing')
			bottomNav.slideDown('slow', 'swing')
		}

		if (windowTop == navPage - 1) {
			$('#coverPage').slideDown('slow', 'swing')
			topNav.slideDown('slow', 'swing')
			bottomNav.slideUp('slow', 'swing')
		}

		// if (windowTop == eventsPage - 1) {
		// 	$('#coverPage').slideDown('slow', 'swing')
		// 	topNav.slideDown('slow', 'swing')
		// 	bottomNav.slideUp('slow', 'swing')
		// 	mainNav.css({'margin-top':'-1px','top':'auto'})
		// }

		// if (windowTop == musicPage - 1) {
		// 	$('#coverPage').slideDown('slow', 'swing')
		// 	topNav.slideDown('slow', 'swing')
		// 	bottomNav.slideUp('slow', 'swing')
		// 	mainNav.css({'margin-top':'-1px','top':'auto'})
		// }

		// if (windowTop == videosPage - 1) {
		// 	$('#coverPage').slideDown('slow', 'swing')
		// 	topNav.slideDown('slow', 'swing')
		// 	bottomNav.slideUp('slow', 'swing')
		// 	mainNav.css({'margin-top':'-1px','top':'auto'})
		// }

		// if (windowTop == aboutusPage - 1) {
		// 	$('#coverPage').slideDown('slow', 'swing')
		// 	topNav.slideDown('slow', 'swing')
		// 	bottomNav.slideUp('slow', 'swing')
		// 	mainNav.css({'margin-top':'-1px','top':'auto'})
		// }

	})

	$('#mainNav').hide()
	$('#events').hide()
	$('#music').hide()
	$('#videos').hide()
	$('#aboutus').hide()

	$('li.collection-item').click( f => {
		$('#navPage').animate({width: 'toggle'},500)
		$('#mainNav').animate({width: 'toggle'}, 500)
		$('#navBottom').animate({width: 'toggle'}, 500, f => {
			$('#navBottom').css('opacity','0')
		})
	})

	$('#link2events').click( f => {
		$('#events').slideDown(1500)
	})

	$('#link2music').click( f => {
		$('#music').slideDown(1500)
	})

	$('#link2videos').click( f => {
		$('#videos').slideDown(1500)
	})
	$('#link2aboutus').click( f => {
		$('#aboutus').slideDown(1500)
	})

	$('#back2menu').click( f => {
		mainNav.css({'margin-top':'none','top':'0'})
		$('.page').hide()
		$('#navPage').animate({width: 'toggle'}, 500)
		$('#mainNav').animate({width: 'toggle'}, 500)
		$('#navBottom').css('opacity','.9')
		$('#navBottom').animate({width: 'toggle'}, 500)
		$('html, body').animate({scrollTop:$(document).height()}, 'fast');
	})

	var windoww = $(window).width()

	function onResize(windoww) {
		if (windoww < 482) {
			$('nav .brand-logo.center').removeClass('center')
			$('nav .brand-logo').addClass('right')
		} else {
			$('nav .brand-logo.right').removeClass('right')
			$('nav .brand-logo').addClass('center')
		}

		if (windoww < 371) {
			$('#mainNav .brand-logo img').css('max-width','176px')
		} else {
			$('#mainNav .brand-logo img').css('max-width','227px')
		}
	}


	onResize(windoww)


	$(window).resize( f => {

		var windoww = $(window).width() 

		onResize(windoww)


	})

	Amplitude.init({
		"songs": [
			{
				"name": "Song Name 1",
				"artist": "Artist Name",
				"album": "Album Name",
				"url": "/song/url.mp3",
				"cover_art_url": "/cover/art/url.jpg"
			},
			{
				"name": "Song Name 2",
				"artist": "Artist Name",
				"album": "Album Name",
				"url": "/song/url.mp3",
				"cover_art_url": "/cover/art/url.jpg"
			},
			{
				"name": "Song Name 3",
				"artist": "Artist Name",
				"album": "Album Name",
				"url": "/song/url.mp3",
				"cover_art_url": "/cover/art/url.jpg"
			}
		]
	})




})

