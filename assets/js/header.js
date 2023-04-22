$(document).ready(function () {
    var eyeless = $('.btn--eyeless'),
        eyelessContent = $('.eyeless-content'),
        liMain = $('.nav-li--main'),
        btnBurger = $('.header-burger_btn'),
        nav = $('.nav--main'),
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
        nav.add(nav.find('ul')).stop(true, true);
        nav.fadeIn(200).css('display', 'flex');
        closeBurger.fadeIn(300);
        nav.find('ul').animate({width : '300px'}, 300).css('overflow', 'visible');
    });

    closeBurger.add(nav).click(function (e) {
        if ((e.target.className == 'nav--main') ||
           (e.target.className == 'close_menu')){
            e.stopPropagation();
            nav.add(nav.find('ul')).stop(true, true);
            closeBurger.fadeOut(200);
            nav.find('ul').animate({width : '0px'}, 300, function () {nav.fadeOut(200);}).css('overflow', 'visible');    
           }
    });

    liMain.click(function(e){
        if(!isOpen){
            isOpen = true;
            liMain.stop(true, true)
            $(this).children('ul').show(300);
            $(this).addClass('selected');
        } else{
            isOpen = false;
            liMain.children('ul').stop(true, true)
            liMain.children('ul').hide(300);
            liMain.removeClass('selected');
        }
    });

    $(document).click(function (e){
        if(liMain.has(e.target).length === 0){
            isOpen = false;
            liMain.children('ul').stop(true, true)
            liMain.children('ul').hide(300);
            liMain.removeClass('selected');
        };
    });
});