function mobile(){
$('.mainSlide').slick({
    'arrows' : false,
    'autoplay' : true,
    'fade':true,
});

}

function pc(){
    
    let figData = [
        {
            title : `ABOUT<br>US`,
            description : `더 상자의 소개입니다.<br>
            더 상자가 걸어온 길과 더 상자만이 가지고 있는<br>
            핵심 가치와 비전이 지금의 더 상자를 만들었습니다.`,
            image: 'main-about.jpg'
        },

        {
            title : `FACILITY<br>INTRODUCTION`,
            description : `더 상자의 소개입니다.<br>
            더 상자가 걸어온 길과 더 상자만이 가지고 있는<br>
            핵심 가치와 비전이 지금의 더 상자를 만들었습니다.`,
            image: 'main-intro.jpg'

        },

        {
            title : `PRODUCTION GUIDE<br>OF PACKAGE`,
            description : `더 상자의 소개입니다.<br>
            더 상자가 걸어온 길과 더 상자만이 가지고 있는<br>
            핵심 가치와 비전이 지금의 더 상자를 만들었습니다.`,
            image:'main-package.jpg'
        },

        {
            title : `MENUFACTURED<br>ITEM`,
            description : `더 상자의 소개입니다.<br>
            더 상자가 걸어온 길과 더 상자만이 가지고 있는<br>
            핵심 가치와 비전이 지금의 더 상자를 만들었습니다.`,
            image:'main-item.jpg'
        },

        {
            title : `CONTACT<br>US`,
            description : `더 상자의 소개입니다.<br>
            더 상자가 걸어온 길과 더 상자만이 가지고 있는<br>
            핵심 가치와 비전이 지금의 더 상자를 만들었습니다.`,
            image:'main-contact.jpg'
        },
        {
            title : `DIRECTION TO<br>THE SANGJA`,
            description : `더 상자의 소개입니다.<br>
            더 상자가 걸어온 길과 더 상자만이 가지고 있는<br>
            핵심 가치와 비전이 지금의 더 상자를 만들었습니다.`,
            image:'main-direction.jpg'
        },
    ]


    $('nav .gnb li').on('mouseover',function(){
        let i = $(this).index();
        setTimeout(function(){
            let tit = figData[i].title;
            let txt = figData[i].description;

            $('figcaption h2').html(tit);
            $('figcaption p').html(txt);
            $('figcaption').stop().fadeIn(1000);
            
            $('.mainSlide').children().eq(i+1).stop().fadeIn()
            .siblings().stop().fadeOut();

        },200);
        
    }).on('mouseout',function(){
        $('figcaption').stop().fadeOut();
       
    });

    $('.gnb').on('mouseout',function(){
        $('.mainSlide').children().eq(0).stop().fadeIn()
        .siblings().stop().fadeOut();
    })

}

function common(){
    function clock(){

        let now = new Date();
    
        let hr = now.getHours();
        let min = now.getMinutes();
    
        let mon = now.getMonth();
        let date = now.getDate();
        let day = now.getDay();
    
        let dayList = ['일','월','화','수','목','금','토'];
    
    
        if(min<10){
            min = '0' + min;
        }
    
        if(hr>12){
            $('.state').text('오후');
            hr -= 12;
        }else{
            $('.state').text('오전');
        }
    
        if(hr<10){
            hr = '0' + hr;
        }
    
        $('.mon').text(mon + 1);
        $('.date').text(date);
        $('.day').text(dayList[day])
    
        $('.hr').text(hr);
        $('.min').text(min);
    
    }
    clock();
    setInterval(clock,1000);
}

common();

let winWidth = $(window).width();
if(winWidth >= 1200){

    pc()
}else{
    mobile();
}
