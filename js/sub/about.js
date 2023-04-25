function mobile(){

    
}//mobile

function pc(){

}//pc



function common(){

    function blinkBox(){
        let scr = $(window).scrollTop();
        let destination =  $('.s6').offset().top - 200;
        if(destination <= scr){
            $('.s6 .txtBox').addClass('active');
        }else{
            $('.s6 .txtBox').removeClass('active');
        }
    }

    function fadeWord(){
        let scr = $(window).scrollTop();
        let destination =  $('.s4').offset().top;

        if(destination <= scr){
            $('.slogan').addClass('active');
        }else{
            $('.slogan').removeClass('active');
        }
        
    }//fadeWord

    $(window).scroll(fadeWord).scroll(blinkBox);

    


}//common 

common();