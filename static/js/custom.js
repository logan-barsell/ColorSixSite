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


		if (windowTop > coverPage && $('#coverPage').is(':visible')) {
			$('#coverPage').slideUp('slow', 'swing')
			topNav.slideUp('slow', 'swing')
			bottomNav.slideDown('slow', 'swing')
		}

		if (windowTop == navPage - 1 && $('#navPage').is(':visible')) {
			$('#coverPage').slideDown('slow', 'swing')
			topNav.slideDown('slow', 'swing')
			bottomNav.slideUp('slow', 'swing')
		}

	})

	$('#mainNav').hide()
	$('#events').hide()
	$('#music').hide()
	$('#videos').hide()
	$('#aboutus').hide()

	$('#navPage li.collection-item').click( f => {
		$('#navPage').animate({width: 'toggle'},500)
		$('#mainNav').animate({width: 'toggle'}, 500)
		$('#navBottom').animate({width: 'toggle'}, 500)
	})

	$('#link2events').click( f => {
		$('#events').slideDown(1500)
	})

	$('#link2music').click( f => {
		$('#music').slideDown(2500)
	})

	$('#link2videos').click( f => {
		$('#videos').slideDown(1500)
	})
	$('#link2aboutus').click( f => {
		$('#aboutus').slideDown(3500)
	})

	$('#back2menu').click( f => {
		mainNav.css({'margin-top':'none','top':'0'})
		$('.page').hide()
		$('#navPage').animate({width: 'toggle'}, 500)
		$('#mainNav').animate({width: 'toggle'}, 500)
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
            mediaPath = '../static/css/audio/',
            extension = '',
            tracks = [{
                "track": 1,
                "name": "Dirty Little Secret",
                "duration": "3:14",
                "file": "dls"
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
            	audio2.pause()
                playing = true
            }).on('pause', function () {
                playing = false
            }).on('ended', function () {
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



    var supportsAudio2 = !!document.createElement('audio2').canPlayType
    if (supportsAudio) {
    var player2 = new Plyr('#audio3', {
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
            mediaPath = '../static/css/audio/',
            extension = '',
            tracks2 = [{
                "track": 1,
                "name": "Goodbye, Goodbye",
                "duration": "3:18",
                "file": "gg"
            }, {
                "track": 2,
                "name": "Sweet Hole In My Head",
                "duration": "4:32",
                "file": "shimh"
            }, {
                "track": 3,
                "name": "The Bends",
                "duration": "2:51",
                "file": "bends"
            }],
            buildPlaylist2 = $(tracks2).each(function(key, value) {
                var trackNumber2 = value.track,
                    trackName2 = value.name,
                    trackDuration2 = value.duration
                if (trackNumber2.toString().length === 1) {
                    trackNumber2 = '0' + trackNumber2
                }
                $('#plList2').append('<li> \
                    <div class="plItem"> \
                        <span class="plTitle">' + trackName2 + '</span> \
                        <span class="plLength">' + trackDuration2 + '</span> \
                    </div> \
                </li>')
            }),
            trackCount2 = tracks2.length,
            npAction2 = $('#npAction2'),
            npTitle2 = $('#npTitle2'),
            audio2 = $('#audio3').on('play', function () {
            	audio.pause()
                playing = true
                npAction2.text('Now Playing...')
            }).on('pause', function () {
                playing = false
                npAction2.text('Paused...')
            }).on('ended', function () {
                npAction2.text('Paused...')
                if ((index + 1) < trackCount2) {
                    index++
                    loadTrack(index)
                    audio2.play()
                } else {
                    audio2.pause()
                    index = 0
                    loadTrack(index)
                }
            }).get(0),
            btnPrev = $('#btnPrev').on('click', function () {
                if ((index - 1) > -1) {
                    index--
                    loadTrack(index)
                    if (playing) {
                        audio2.play()
                    }
                } else {
                    audio2.pause()
                    index = 0
                    loadTrack(index)
                }
            }),
            btnNext = $('#btnNext').on('click', function () {
                if ((index + 1) < trackCount2) {
                    index++
                    loadTrack(index)
                    if (playing) {
                        audio2.play()
                    }
                } else {
                    audio2.pause()
                    index = 0
                    loadTrack(index)
                }
            }),
            li = $('#plList2 li').on('click', function () {
                var id = parseInt($(this).index())
                if (id !== index) {
                    playTrack(id)
                }
            }),
            loadTrack = function (id) {
                $('.plSel2').removeClass('plSel2')
                $('#plList2 li:eq(' + id + ')').addClass('plSel2')
                npTitle2.text(tracks2[id].name)
                index = id
                audio2.src = mediaPath + tracks2[id].file + extension
            },
            playTrack = function (id) {
                loadTrack(id)
                audio2.play()
            }
        extension = audio2.canPlayType('audio/mpeg') ? '.mp3' : audio2.canPlayType('audio/ogg') ? '.ogg' : ''
        loadTrack(index)
    } else {
        // boo hoo
        $('.column').addClass('hidden')
        var noSupport = $('#audio3').text()
        $('.container').append('<p class="no-support">' + noSupport + '</p>')
    }

})

