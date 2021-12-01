function init() {
    // get the marquee__wrapper element
    const marqueeWrapper = document.querySelector('.marquee__wrapper')
    // animate it to move left 50% of the screen width in 5 seconds
    gsap.to(marqueeWrapper, {duration: 5,
    x: '-10%',
    delay: 2,
    ease: 'linear',
    repeat: -1,
    })

}







init()
console.log('ok')