
$(function(){
    let n=0;
    let n02=0;
    let n03=0;

    // 상단내비게이션
    $('i.fa-bag-shopping').click(function(){
        if(n02==0){
            $('i.fa-bag-shopping + .sub').slideDown();
            n02=1;
        }else{
            $('i.fa-bag-shopping + .sub').slideUp();
            n02=0;
        };
        
    });
    $('i.fa-user').click(function(){
        if(n03==0){
            $('i.fa-user + .sub').slideDown();
            n03=1;
        }else{
            $('i.fa-user + .sub').slideUp();
            n03=0;
        }
    });

    // 검색창
    $('.fa-search').click(function(){
        if(n==0){
            $('header .h_inner_top #search').fadeIn().css('opacity','1').animate({'width':'175px'},700);
            // $(this).hide(600);
            n=1;
            console.log(n);
        }else{
            $('header .h_inner_top #search').fadeOut().css('opacity','0').animate({'width':'30px'},700);
            n=0;
            console.log(n);
        }
    });
    // $('header .h_inner_top #search').focusout(function(){
    //     // alert('222');
    //     $('header .h_inner_top #search');
    //     $('.fa-search').show();
    // });

    // 비주얼 슬라이드
    let txt_box = $('.v_slide .txt_box');
    let item01 = $('.v_slide .inner div.fadein').eq(0);
    let item02 = $('.v_slide .inner div.fadein').eq(1);
    let item03 = $('.v_slide .inner div.fadein').eq(2);

    txt_box.fadeIn().delay(400);
    item01.delay(1300).fadeIn();
    item02.delay(800).fadeIn();
    item03.delay(1800).fadeIn();

    // 제품 마우스 오버
    $('.product .p01').hover(function(){
        $('.product .p01 .txt_box').css('opacity','1');
    },function(){
        $('.product .p01 .txt_box').css('opacity','0');
    });
    $('.product .p02').hover(function(){
        $('.product .p02 .txt_box').css('opacity','1');
    },function(){
        $('.product .p02 .txt_box').css('opacity','0');
    });
    $('.product .p03').hover(function(){
        $('.product .p03 .txt_box').css('opacity','1');
    },function(){
        $('.product .p03 .txt_box').css('opacity','0');
    });
    $('.product .p04').hover(function(){
        $('.product .p04 .txt_box').css('opacity','1');
    },function(){
        $('.product .p04 .txt_box').css('opacity','0');
    });

    // 제품 목록 바뀌게
    $('.product .new_btn').click(function(){
        $('.product .p_btn').removeClass('on_btn');
        $('.product .inner > article').removeClass('on');
        $('.product .new_btn').addClass('on_btn');
        $('.p_new').addClass('on');
    });
    $('.product .best_btn').click(function(){
        $('.product .p_btn').removeClass('on_btn');
        $('.product .inner > article').removeClass('on');
        $('.product .best_btn').addClass('on_btn');
        $('.p_best').addClass('on');
    });
    $('.product .brand_btn').click(function(){
        $('.product .p_btn').removeClass('on_btn');
        $('.product .inner > article').removeClass('on');
        $('.product .brand_btn').addClass('on_btn');
        $('.p_brand').addClass('on');
    });
    $('.product .sench_btn').click(function(){
        $('.product .p_btn').removeClass('on_btn');
        $('.product .inner > article').removeClass('on');
        $('.product .sench_btn').addClass('on_btn');
        $('.p_sench').addClass('on');
    });

    // 베스트 마우스 오버
    $('.img01').hover(function(){
        $('.img01 img.back').css('right','-30px');
    },function(){
        $('.img01 img.back').css('right','-400px');
    });
    $('.img02').hover(function(){
        $('.img02 img.back').css('right','-30px');
    },function(){
        $('.img02 img.back').css('right','-400px');
    });
    $('.img03').hover(function(){
        $('.img03 img.back').css('right','-20px');
    },function(){
        $('.img03 img.back').css('right','-400px');
    });
    $('.img04').hover(function(){
        $('.img04 img.back').css('right','-20px');
    },function(){
        $('.img04 img.back').css('right','-400px');
    });

    // 베스트 목록 바뀌게
    $('.best .b_unisex').click(function(){
        $('.best .best_mnu li').removeClass('on_btn');
        $('.best .best_box').removeClass('on');
        $('.best .b_unisex').addClass('on_btn');
        $('.best .unisex').addClass('on');
    });
    $('.best .b_forher').click(function(){
        $('.best .best_mnu li').removeClass('on_btn');
        $('.best .best_box').removeClass('on');
        $('.best .b_forher').addClass('on_btn');
        $('.best .forher').addClass('on');
    });
    $('.best .b_forhim').click(function(){
        $('.best .best_mnu li').removeClass('on_btn');
        $('.best .best_box').removeClass('on');
        $('.best .b_forhim').addClass('on_btn');
        $('.best .forhim').addClass('on');
    });
    $('.best .b_body').click(function(){
        $('.best .best_mnu li').removeClass('on_btn');
        $('.best .best_box').removeClass('on');
        $('.best .b_body').addClass('on_btn');
        $('.best .body').addClass('on');

    });
    
});
    // 향수추천 스크롤 이벤트
    const spyEl = document.querySelectorAll('section.scroll-spy');
    spyEl.forEach(function(spyEl){
        new ScrollMagic
        .Scene({//감시할 장면을 추가
          triggerElement:spyEl,
          triggerHook:0.9 //화면의 70% 지점에서 동작
        })
        .setClassToggle(spyEl, 'show')//show클래스를 적용하거나 해체하기
        .addTo(new ScrollMagic.Controller());//컨트롤러에 장면에 할당한다.
    });
    // 패밀리사이트
    function siteUrl(url){
        if(url!=''){//만약에 url변수값이 값이 존재한다면
            window.open(url, '_self');//윈도우 창을 실행하여 url주소로 이동한다.
        }
    }

    // 탑버튼
    const topBtnEl = document.querySelector('.top_btn');

    topBtnEl.addEventListener('click',function(){
    gsap.to(window,.6,{//브라우저를 선택하여 0.6초만에
        scrollTo:0 //스크롤 꼭때기 0까지 올라간다.
    });
})

