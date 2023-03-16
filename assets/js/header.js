$(document).ready(function () {
    var eyeless = $('.btn--eyeless'),
        eyelessContent = $('.eyeless-content'),
        liMain = $('.nav-li--main');

    var isOpen = false;

    liMain.children('ul').hide(0);

    $.merge(eyelessContent, eyeless).hover(function () {
            eyelessContent.not(eyeless).addClass('active-eyeless-content');
            
            
        }, function () {
            eyelessContent.not(eyeless).removeClass('active-eyeless-content');
        }
    );

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