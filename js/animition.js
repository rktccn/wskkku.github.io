//视察效果(速率，起始点，结束点)

function parallax(rate, s, e) {
    var ParallaxS = document.querySelector('.parallax-crolling')

    document.addEventListener('scroll', function () {
        var start = s === undefined ? 0 : s
        var end = e === undefined ? document.documentElement.scrollHeight : e
        if (window.pageYOffset >= start && window.pageYOffset <= end)
            var height = (window.pageYOffset - start) * rate
        ParallaxS.style.transform = 'translateY(' + height + 'px)'
    })
}
