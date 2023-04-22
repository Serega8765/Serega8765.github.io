$(document).ready(function () {
    var eyeless = $('.btn--eyeless'),
        eyelessContent = $('.eyeless-content'),
        liMain = $('.nav-li--main'),
        btnBurger = $('.header-burger_btn'),
        nav = $('.nav--main'),
        navUl = $('.nav--main > ul'),
        closeBurger = $('.close_menu');

    var isOpen = false;

    liMain.children('ul').hide(0);

    $.merge(eyelessContent, eyeless).hover(function () {
            eyelessContent.not(eyeless).addClass('active-eyeless-content');
            
            
        }, function () {
            eyelessContent.not(eyeless).removeClass('active-eyeless-content');
        }
    );

    btnBurger.click(function (e) { 
        nav.add(navUl).stop(true, true);
        nav.fadeIn(200).css('display', 'flex');
        $('.wrap-close_burger').fadeIn(300);
        navUl.animate({width : '300px'}, 300).css('overflow', 'visible');
        console.log('Open');
    });

    closeBurger.click(function (e) { 
        nav.add(navUl).stop(true, true);
        $('.wrap-close_burger').fadeOut(200);
        navUl.animate({width : '0px'}, 300, function () {nav.fadeOut(200);}).css('overflow', 'visible');
        console.log('Close');

    });

    liMain.click(function(e){
        if(!isOpen){
            isOpen = true;
            $(this).children('ul').show(300);
            $(this).addClass('selected');
        } else{
            isOpen = false;
            liMain.children('ul').hide(300);
            liMain.removeClass('selected');
        }
    });

    $(document).click(function (e){
        if(liMain.has(e.target).length === 0){
            isOpen = false;
            liMain.children('ul').hide(300);
            liMain.removeClass('selected');
        };
    });
});