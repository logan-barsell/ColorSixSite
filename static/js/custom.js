$(document).ready( f => {

    window.scrollTo({ top: 0, behavior: 'smooth' })

	$('.modal').modal()
    
	var windowTop = $(window).scrollTop()
	
	var navPage = $('#navPage').offset().top
	var eventsPage = $('#events').offset().top
	var musicPage = $('#music').offset().top
	var videosPage = $('#videos').offset().top
	var aboutusPage = $('#aboutus').offset().top
	var scrollMarker = 0
	var topNav = $('#navTop')
	var bottomNav = $('#navBottom')
	var mainNav = $('#mainNav')
    mainNav.delay(50).show()
	// bottomNav.hide()


    // var toggle = false 




	$('#mainNav').hide()
	$('#events').hide()
	$('#music').hide()
	$('#videos').hide()
	$('#aboutus').hide()


    // var toggle2 = false

	$('#navPage li.collection-item').click( f => {
        $('#slide-cont').hide()
        $('#coverPage').hide()
		$('#navPage').animate({width: 'toggle'},500)
		$('#mainNav').animate({width: 'toggle'}, 500)
		$('#navBottom').animate({width: 'toggle'}, 500)
        // toggle2 = true

        // if ($('#navTop').is(':visible')) {
            $('#navTop').hide()
        // }
	})

	$('#link2events').click( f => {
		$('#events').slideDown(1000)
	})

	$('#link2music').click( f => {
		$('#music').slideDown(2000)
	})

	$('#link2videos').click( f => {
		$('#videos').slideDown(1500)
	})
	$('#link2aboutus').click( f => {
		$('#aboutus').slideDown(3000)
	})

	$('#back2menu').click( f => {
		mainNav.css({'margin-top':'none','top':'0'})
		$('.page').hide()
        $('#slide-cont').delay(50).fadeIn()
        $('#coverPage').delay(50).fadeIn()
		$('#navPage').animate({width: 'toggle'}, 500)
		$('#mainNav').animate({width: 'toggle'}, 500)
        $('#navBottom').animate({width: 'toggle'}, 500)
        $('#navTop').animate({width: 'toggle'}, 500)
		$('html, body').animate({scrollTop:$(document).height()}, 'fast')
        // toggle = false
        // toggle2 = false
	})

	var windoww = $(window).width()
    var windowh = $(window).height()

	function onResize(windoww) {
        var windowh = $(window).height()
        console.log(windowh)

        // if (windoww < 400 || windowh < 600) {
        //     $('#navPage').css('background-size', 'cover')
        // } else {
        //     $('#navPage').css('background-size', 'contain')
        // }

        if (windowh < 600 && windoww < 486) {
            $('#navPage').css('background-size', 'cover')
        } else {
            $('#navPage').css('background-size', 'contain')
        }

        if (windoww < 400) {
            $('#navPage').css('background-size', 'cover')
        } else {
            $('#navPage').css('background-size', 'contain')
        }


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
    console.log(supportsAudio)
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
                "duration": "3:08",
                "file": "dls"
            }, {
                "track": 2,
                "name": "Chasing Shadows",
                "duration": "3:14",
                "file": "cs"
            }, {
                "track": 3,
                "name": "Rendezvous",
                "duration": "3:25",
                "file": "rdv"
            }, {
                "track": 4,
                "name": "Kill The Lights",
                "duration": "2:48",
                "file": "ktl"
            } ],
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

            li = $('#plList li').on('click', function () {
                var id = parseInt($(this).index())
                console.log(id)
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
                console.log(mediaPath)
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




    var supportsAudio2 = document.createElement('audio').canPlayType
    console.log(supportsAudio2)
    if (supportsAudio2) {
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
        var index2 = 0,
            playing2 = false,
            mediaPath2 = '../static/css/audio/',
            extension2 = '',
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
            }
            ],
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
            npTitle2 = $('#npTitle2'),
            audio2 = $('#audio3').on('play', function () {
            	audio.pause()
                playing2 = true
            }).on('pause', function () {
                playing2 = false
            }).on('ended', function () {
                if ((index2 + 1) < trackCount2) {
                    index2++
                    loadTrack(index2)
                    audio2.play()
                } else {
                    audio2.pause()
                    index2 = 0
                    loadTrack(index2)
                }
            }).get(0),
            li2 = $('#plList2 li').on('click', function () {

                var id = parseInt($(this).index())
                if (id !== index2) {
                    playTrack2(id)
                }
            }),
            loadTrack2 = function (id) {
                $('.plSel2').removeClass('plSel2')
                $('#plList2 li:eq(' + id + ')').addClass('plSel2')
                npTitle2.text(tracks2[id].name)
                index2 = id
                audio2.src = mediaPath2 + tracks2[id].file + extension2
            },
            playTrack2 = function (id) {
                loadTrack2(id)
                audio2.play()
            }
        extension2 = audio2.canPlayType('audio/mpeg') ? '.mp3' : audio2.canPlayType('audio/ogg') ? '.ogg' : ''
        loadTrack2(index2)
    } else {
        // boo hoo
        $('.column').addClass('hidden')
        var noSupport2 = $('#audio3').text()
        $('.container').append('<p class="no-support">' + noSupport2 + '</p>')
    }

})

