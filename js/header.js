

$('.navbar').click(function(){

    $('.navbar').toggleClass('active');
    $('nav').fadeToggle();

$('nav .imgBox').slick({
    'arrows' : false,
    'fade' : true,
    'autoplay' : true
});
})
