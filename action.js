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

const slides = document.querySelector('.slides')
slides.addEventListener('click', function(event) {
    console.log(event.target)
})


const play_btn = document.querySelectorAll('.song-right')
const iphone = document.querySelector(".iphone")
const return_btn = document.querySelector(".return")




for (let i = 0; i < play_btn.length; i++) {
    play_btn[i].addEventListener('click', function() {
        iphone.style.right = "320px";

    })
}

return_btn.addEventListener('click', function() {
    iphone.style.right = "0px";
})