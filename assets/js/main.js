// 최상단 배너
const MainTopSwiper = new Swiper(".top-banner",{
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 4000,
    },
})

// 스크롤시 헤더
$(window).scroll(function(){
    curr = $(this).scrollTop();
    target = $('.header').offset().top;

    if(curr >= target){
        if(curr > 0){
            $('.header').addClass('fixed');
        } else{
            $('.header').removeClass('fixed');
        }
    }
})


// 헤더 메뉴
$('.open-all').click(function(){
    $('.allmenu-title').addClass('on');
    $('.allmenu-area').slideDown();
})
$('.close-all').click(function(){
    $('.allmenu-title').removeClass('on');
    $('.allmenu-area').slideUp();
})

// GNB 열고닫기
$('.gnb-btn').click(function(){
    $('body').addClass('dimmed');
    $('.gnb-area').addClass('on');
})
$('.gnb-close').click(function(){
    $('body').removeClass('dimmed');
    $('.gnb-area').removeClass('on');
})

// gnb 바깥영역 클릭시 닫기
$(document).click(function(e){
    if($('.gnb-area').hasClass('on') == 1){
        if(
            $('.gnb-area').has(e.target).length == 0 && 
            $('.gnb-btn').is(e.target) == 0
        ){
            $('body').removeClass('dimmed');
            $('.gnb-area').removeClass('on');
        }
    }
})

// GNB 아코디언 메뉴
$('.gnb .nav').click(function(){
    $(this).toggleClass('on');
    $(this).next().toggleClass('on');
    $(this).next().slideToggle();
})

// 검색창 열고 닫기
$('.search-btn').click(function(){
    $('body').addClass('dimmed');
    $('.search-area').addClass('on');
})
$('.search-close').click(function(){
    $('body').removeClass('dimmed');
    $('.search-area').removeClass('on');
})

// 메인 비주얼 슬라이더
const MainVisual = new Swiper(".sc-visual .swiper",{
    effect:"fade",
    loop:true,
    pagination:{
        el:".pagination"
    },
    autoplay:{
        delay:4000,
    }
})

// BEST 탭
$('.tab-item').click(function(e){
    e.preventDefault();
    tabCon = $(this).data('tab');

    $(this).addClass('on').siblings().removeClass('on');
    $(tabCon).addClass('on').siblings().removeClass('on');
})

// 상품 영역 슬라이더
const productSlide1 = new Swiper(".product-area .swiper1",{
    slidesPerView: 2.1,
    spaceBetween: 10,
    freeMode: true,
})
const productSlide2 = new Swiper(".product-area .swiper2",{
    slidesPerView: 2.1,
    spaceBetween: 10,
    freeMode: true,
})
const productSlide3 = new Swiper(".product-area .swiper3",{
    slidesPerView: 2.1,
    spaceBetween: 10,
    freeMode: true,
})

// 퀵메뉴
let lastScroll = 0;
curr = $(this).scrollTop();

$(window).scroll(function(){
    
    if(curr < lastScroll){
        $('.quick-menu').addClass('on');
    } else {
        $('.quick-menu').removeClass('on');
    }
    lastScroll = curr;
})
// 맨위로 버튼
$('.top-btn').click(function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})
