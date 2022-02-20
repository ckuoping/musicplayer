// play and next song
const previous = document.querySelector('#pre')
const play = document.querySelector('#play')
const next = document.querySelector('#next')

// current song information
const title = document.querySelector('#title')
const artist = document.querySelector('#artist')

// volume
const recent_volume = document.querySelector('#volume_control')
const volume_show = document.querySelector('#volume_show')

// duration
const slider = document.querySelector('#duration_slider')

let timer
let index_no = 0
let playing_song = false

let track = document.createElement('audio')

let All_song = [{
        name: "Drifting Forever",
        path: "./music/1.mp3",
        singer: "Ryan Jones"
    },
    {
        name: "Beginning",
        path: "./music/2.mp3",
        singer: "Ryan Jones"
    },
    {
        name: "Nothern Lights",
        path: "./music/3.mp3",
        singer: "Ryan Jones"
    },
    {
        name: "Sundown",
        path: "./music/4.mp3",
        singer: "Ryan Jones"
    }
]


// caroudel effect
$('.owl-carousel').owlCarousel({
    center: true,
    item: 1,
    loop: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        10: {
            items: 2

        }
    }
})


// 換頁顯示歌曲
const play_btn = document.querySelectorAll('.song-right')
const iphone = document.querySelector(".iphone")
const return_btn = document.querySelector(".return")


for (let i = 0; i < play_btn.length; i++) {
    play_btn[i].addEventListener('click', function() {
        iphone.classList.add("shadow-for-iphone")
        $(".iphone").animate({ right: "350px" }, 500);
        // iphone.style.right = "320px";
        title.innerHTML = All_song[i].name
        artist.innerHTML = All_song[i].singer
        index_no = i
        console.log(index_no)
        load_track(index_no)
    })
}

return_btn.addEventListener('click', function() {
    $(".iphone").animate({ right: "0px" }, 500);
    // iphone.style.right = "0px";
    pausesong()
})


// console.log(iphone.getBoundingClientRect.x)
// if (iphone.style.right == "320px") {
//     console.log("great")
// }

// 播放音樂

function load_track(index_no) {
    // clearInterval(timer)
    reset_slider()
    track.src = All_song[index_no].path
    title.innerHTML = All_song[index_no].name
    artist.innerHTML = All_song[index_no].singer
    track.load()

    timer = setInterval(range_slider, 1000)
}


function mute_sound() {
    track.volume = 0
    recent_volume.value = 0
    volume_show.innerHTML = 0

}

function reset_slider() {
    slider.value = 0
}

function just_play() {
    if (playing_song == false) {
        playsong()
    } else {
        pausesong()
    }
}

function playsong() {
    track.play()
    playing_song = true
    play.innerHTML = '<i class="fas fa-pause"></i>'
}

function pausesong() {
    track.pause()
    playing_song = false
    play.innerHTML = '<i class="fas fa-play"></i>'
}

function next_song() {
    if (index_no < All_song.length - 1) {
        index_no += 1
    } else {
        index_no = 0
    }
    load_track(index_no)
    playsong()
}

function previous_song() {
    if (index_no > 0) {
        index_no -= 1
    } else if (index_no == 0) {
        index_no = All_song.length - 1
    }
    load_track(index_no)
    playsong()
}

function volume_change() {
    volume_show.innerHTML = recent_volume.value
    track.volume = recent_volume.value / 100

}

function change_duration() {
    let slider_position = track.duration * (slider.value / 100)
    track.currentTime = slider_position
}

function range_slider() {
    let position = 0
    if (!isNaN(track.duration)) {
        position = track.currentTime * (100 / track.duration);
        slider.value = position;
    }


}