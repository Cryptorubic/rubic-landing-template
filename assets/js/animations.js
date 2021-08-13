$(document).ready(function (){

    const target = $('.parallax-window')[0];
    var ua = navigator.userAgent.toLowerCase();
    console.log(ua)
    if (ua.indexOf('safari') != -1) {
        if (ua.indexOf('chrome') > -1) {
            window.addEventListener('scroll', function (e){
                let scrolled = window.scrollY;
                let rate = scrolled * 0.5;
                console.log(rate)
                target.style.transform = 'translate3d(0px, ' + rate + 'px, 0px)';
            })
        } else {
            target.style.position = 'fixed';
            target.style.zIndex = '-2';
        }
    }

    let bannerButton = $('#banner > button');
    let tradeButton = $('.trade-inner > button');
    let subscribeButton = $('.subs-input > button');
    let footerLink = $('.footer-link');
    let footerSocial = $('.logos a');
    let moonButton = $('.navbar-container > button');
    let form = $('#form')[0];
    let formCloser = $('.form-closer');
    let input_for_alert = $('.subs-input > input')[0];
    let buttonImg = $('#banner > button > img')[0];

    // bannerButton.hover(function (){
    //     bannerButton[0].style.boxShadow =  '0px 10px 50px 0px rgba(34, 221, 59, 0.25)';
    //
    //     anime({
    //         targets: buttonImg,
    //         translateX: 10,
    //         easing: 'linear',
    //         duration: 300
    //     })
    // }, function (){
    //     anime({
    //         targets: buttonImg,
    //         easing: 'linear',
    //         translateX: 0,
    //         duration: 500
    //     })
    //     anime({
    //         targets: bannerButton[0],
    //         translateY: 0,
    //         easing: 'linear',
    //         duration: 30
    //     })
    // })
    bannerButton.click(function (){
        bannerButton[0].style.boxShadow =  '0px 10px 50px 0px rgba(34, 221, 59, 0.25)';

        anime({
            targets: bannerButton[0],
            translateY: -2,
            easing: 'linear',
            duration: 30
        })
    })
    // tradeButton.hover(function (){
    //     tradeButton[0].style.boxShadow =  '0px 10px 50px rgba(34, 221, 75, 0.4)';
    //
    //
    // }, function (){
    //     tradeButton[0].style.boxShadow =  '0px 5px 30px rgba(34, 221, 75, 0.2)';
    //     anime({
    //         targets: tradeButton[0],
    //         translateY: 0,
    //         easing: 'linear',
    //         duration: 30
    //     })
    // })
    tradeButton.click(function (){
        tradeButton[0].style.boxShadow =  '0px 10px 50px 0px rgba(34, 221, 59, 0.25)';
        form.style.display = 'block';
        anime({
            targets: tradeButton[0],
            translateY: -2,
            easing: 'linear',
            duration: 30
        })
        anime({
            targets: form,
            opacity: 1,
            easing: 'linear',
            duration: 500
        })

    })
    // subscribeButton.hover(function (){
    //     subscribeButton[0].style.boxShadow =  '0px 10px 50px rgba(34, 221, 75, 0.4)';
    //
    // }, function (){
    //     subscribeButton[0].style.background = 'linear-gradient(113.38deg, #30DA60 31.59%, #0083FF 178.87%)';
    //
    //     subscribeButton[0].style.boxShadow =  '0px 5px 30px rgba(34, 221, 75, 0.2)';
    // })
    subscribeButton.click(function (){
        subscribeButton[0].style.boxShadow =  '0px 10px 50px 0px rgba(34, 221, 59, 0.25)';
        subscribeButton[0].style.background = 'linear-gradient(0deg, rgba(29, 32, 64, 0.1), rgba(29, 32, 64, 0.1)), linear-gradient(113.38deg, #30DA60 31.59%, #0083FF 178.87%)';
        console.log(input_for_alert.value)
        if(input_for_alert.value.length < 10){
            subscribeButton[0].parentElement.nextElementSibling.style.display = 'inline';
        } else {
            subscribeButton[0].parentElement.nextElementSibling.innerHTML = 'You have been successfully subscribed to our newsletter. Thanks.';
            subscribeButton[0].parentElement.nextElementSibling.style.color = '#006D1F';
            subscribeButton[0].parentElement.nextElementSibling.style.display = 'inline';

        }
    })
    footerLink.hover(function (){
       this.style.transitionDuration = '100ms';
       this.style.maxWidth = '214px';
    }, function (){
        this.style.maxWidth = '211px';
        this.style.opacity = '1';
    })
    footerLink.click(function (){
        this.style.transitionDuration = '500ms';
        this.style.maxWidth = '214px';
        this.style.opacity = '0.5';
    })
    footerSocial.hover(function (){
       this.style.transitionDuration = '500ms';
       this.style.opacity = '0.66';

    }, function (){
        this.style.opacity = '1';
    })
    footerSocial.click(function (){
        this.style.transitionDuration = '500ms';
        this.style.opacity = '0.33';
    })
    moonButton.hover(function (){
        this.firstElementChild.firstElementChild.style.transitionDuration = '500ms';
        if(!isDark){
            this.firstElementChild.firstElementChild.style.fill = 'white';
        } else{
            this.lastElementChild.firstElementChild.style.fill = '#FFC700';
        }

    }, function (){
        if(!isDark){
            this.firstElementChild.firstElementChild.style.fill = 'black';
        } else{
            this.lastElementChild.firstElementChild.style.fill = 'white';
            this.style.opacity = '1';
        }
    })
    moonButton.click(function (){
        if(!isDark){
            this.firstElementChild.firstElementChild.style.fill = 'white';
        } else {
            this.style.opacity = '0.66';
        }
        ChangeTheme();
    })
    formCloser.click(function (){
        console.log(123)
        anime({
            targets: form,
            opacity: 0,
            easing: 'linear',
            duration: 500,
            complete: function (){
                form.style.display = 'none';
            }
        })

    })



})
isDark = true;

let r = document.querySelector(':root');
let body = $('body')[0];
function ChangeTheme(){
    if(isDark){
        $('html').attr('data-theme', 'day');



        isDark = false;
    } else {

        $('html').attr('data-theme', 'night')
        isDark = true;
    }


}
