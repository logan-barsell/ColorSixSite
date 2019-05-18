$(document).ready( f => {

	   $('.modal').modal()

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

	$('#navPage li.collection-item').click( f => {
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
		$('#aboutus').slideDown(2700)
	})

	$('#back2menu').click( f => {
		mainNav.css({'margin-top':'none','top':'0'})
		$('.page').hide()
		$('#navPage').animate({width: 'toggle'}, 500)
		$('#mainNav').animate({width: 'toggle'}, 500)
		$('#navBottom').css('opacity','.9')
		$('#navBottom').animate({width: 'toggle'}, 500)
		$('html, body').animate({scrollTop:$(document).height()}, 'fast')
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
			$('.collection .collection-item.avatar ').css('font-size','24px')
			$('#mainNav .brand-logo img').css('max-width','176px')
		} else {
			$('.collection .collection-item.avatar ').css('font-size','31px')
			$('#mainNav .brand-logo img').css('max-width','227px')
		}

	}


	onResize(windoww)


	$(window).resize( f => {

		var windoww = $(window).width() 

		onResize(windoww)


	})

    var supportsAudio = !!document.createElement('audio').canPlayType
    if (supportsAudio) {
        // initialize plyr
        var player = new Plyr('#audio1', {
            controls: [
                'restart',
                'play',
                'progress',
                'current-time',
                'duration',
                'mute',
                'volume'
            ]
        })
        // initialize playlist and controls
        var index = 0,
            playing = false,
            mediaPath = 'https://archive.org/download/mythium/',
            extension = '',
            tracks = [{
                "track": 1,
                "name": "Dirty Little Secret",
                "duration": "3:14",
                "file": "JLS_ATI"
            }, {
                "track": 2,
                "name": "Goodbye, Goodbye",
                "duration": "3:18",
                "file": "BS_TF"
            }, {
                "track": 3,
                "name": "Sweet Hole In My Head",
                "duration": "4:32",
                "file": "BS_ATKM"
            }, {
                "track": 4,
                "name": "The Bends",
                "duration": "2:51",
                "file": "BSFM_TF"
            }],
            buildPlaylist = $(tracks).each(function(key, value) {
                var trackNumber = value.track,
                    trackName = value.name,
                    trackDuration = value.duration
                if (trackNumber.toString().length === 1) {
                    trackNumber = '0' + trackNumber
                }
                $('#plList').append('<li> \
                    <div class="plItem"> \
                        <span class="plTitle">' + trackName + '</span> \
                        <span class="plLength">' + trackDuration + '</span> \
                    </div> \
                </li>')
            }),
            trackCount = tracks.length,
            npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            audio = $('#audio1').on('play', function () {
                playing = true
                npAction.text('Now Playing...')
            }).on('pause', function () {
                playing = false
                npAction.text('Paused...')
            }).on('ended', function () {
                npAction.text('Paused...')
                if ((index + 1) < trackCount) {
                    index++
                    loadTrack(index)
                    audio.play()
                } else {
                    audio.pause()
                    index = 0
                    loadTrack(index)
                }
            }).get(0),
            btnPrev = $('#btnPrev').on('click', function () {
                if ((index - 1) > -1) {
                    index--
                    loadTrack(index)
                    if (playing) {
                        audio.play()
                    }
                } else {
                    audio.pause()
                    index = 0
                    loadTrack(index)
                }
            }),
            btnNext = $('#btnNext').on('click', function () {
                if ((index + 1) < trackCount) {
                    index++
                    loadTrack(index)
                    if (playing) {
                        audio.play()
                    }
                } else {
                    audio.pause()
                    index = 0
                    loadTrack(index)
                }
            }),
            li = $('#plList li').on('click', function () {
                var id = parseInt($(this).index())
                if (id !== index) {
                    playTrack(id)
                }
            }),
            loadTrack = function (id) {
                $('.plSel').removeClass('plSel')
                $('#plList li:eq(' + id + ')').addClass('plSel')
                npTitle.text(tracks[id].name)
                index = id
                audio.src = mediaPath + tracks[id].file + extension
            },
            playTrack = function (id) {
                loadTrack(id)
                audio.play()
            }
        extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : ''
        loadTrack(index)
    } else {
        // boo hoo
        $('.column').addClass('hidden')
        var noSupport = $('#audio1').text()
        $('.container').append('<p class="no-support">' + noSupport + '</p>')
    }

})

