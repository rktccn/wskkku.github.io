//视察效果(速率，起始点，结束点)

function parallax(rate, s, e, t) {
    var ParallaxS = document.querySelector('.parallax-crolling')
    ParallaxS.style.position = 'relative'

    var start = s === undefined ? 0 : s
    var end = e === undefined ? document.documentElement.scrollHeight : e
    var top = t === undefined ? 0 : t

    var boxTop = ParallaxS.offsetTop

    document.addEventListener('scroll', function () {
        if (window.pageYOffset >= start && window.pageYOffset <= end)
            var height = (window.pageYOffset - start) * rate
        ParallaxS.style.top = top + height + 'px'
        ParallaxS.style.transitionDuration = '0s'
        console.log(ParallaxS.style.top);
    })
}
