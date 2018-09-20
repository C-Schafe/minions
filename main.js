let n = 0
let audio = document.createElement('audio');
audio.src = 'http://pfcp06i4y.bkt.clouddn.com/YMCA.mp3'
function animationStart(){
    let code = window.code
    let duration = 25
    let speed = 'medium'
    function writeCode(code,fn){
        let container = document.querySelector('#code')
        let style = document.querySelector('#styleTag')
        let timer = setTimeout(function fn(){
            n+=1
            container.innerHTML = Prism.highlight(code.substring(0, n), Prism.languages.css);
            style.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if(n < code.length){
                setTimeout(fn,duration)
            }
        },duration)
    }
    $('.actions').on('click', '.action', function(e){
        $(e.currentTarget).addClass('active').siblings().removeClass('active')
        speed = $(e.currentTarget).attr('speed-data')
        console.log(speed);
        switch (speed) {
            case 'slow':
                duration = 50
                break;
            case 'medium':
                duration = 25
                break;
            case 'fast':
                duration = 1
                break;
            case 'over':
                let length = code.length
                n = length
                break
        }
    })
    $('.hide-code').on('click',()=>{
        $('.code-wrapper').addClass('hide')
    })
    $('.show-code').on('click',()=>{
        $('.code-wrapper').removeClass('hide')
    })
    $('.restart').on('click',()=>{
        n = 0
        $('#styleTag').empty()
        $('#code').empty()
        animationStart()
        audio.play()
    })
    writeCode(code)
}
$('.start').on('click',()=>{
    $('.start').addClass('clicked')
    $('.code-wrapper').addClass('active')
    $('.show-code').addClass('active')
    animationStart()
    audio.play()
})