$(document).ready(function () {
    var slideLeft = $('#slideLeft'),
        btnLeft = $('#btn-left'),
        slideRight = $('#slideRight'),
        btnRight = $('#btn-right'),
        hSlide = $('.slider-h1'),
        numSlide = $('.slide-numSlide'),
        slide = $('.slide'),
        slideLine = $('.slide-line'),
        idSlideLine = "";

    var imgUrl = [
            'assets/img/slider/IMGgoldHohloma.svg',
            'assets/img/slider/IMGhistoyry.svg',
            'assets/img/slider/IMGnarod.svg',
            'assets/img/slider/IMGremeslo.svg'
        ],
        imgText = [
            'Музейно-туристический центр <br> «Золотая Хохлома»',
            'Историко-художественный <br> музей',
            'Музей народного быта — <br >Дом Семена Ложкаря',
            '<br> Музей ремёсел'
        ],
        index = 0;

    function preload(imgUrl){
        $(imgUrl).each(function() {
            $('<img />').attr('src', this).appendTo('body').css('display', 'none');
        })
    }
    preload(imgUrl);

    function changeSlide(index){
        hSlide.add(slide).add(numSlide).stop(true, true); 
        slide.css('background-image', 'url(' + imgUrl[index] + ')');
        hSlide.slideUp(1);
        hSlide.html(imgText[index]).slideDown(1000);
        if ($(window).width() > 1000){
            numSlide.fadeOut(function() {
                $(this).text((index + 1) + ' / ' + imgText.length)
            }).fadeIn();
        } else {
            idSlideLine = "#slide" + (index + 1);
            slideLine.attr('src', 'assets/img/slider/sliderLine.svg');
            $(idSlideLine).attr('src', 'assets/img/slider/sliderLineSelected.svg');
        }

        return ;
    }
        
    slideRight.add(btnRight).click(function (e) {
        if(index < imgText.length - 1){
            index++;
        }else{
            index = 0;
        }
        changeSlide(index);
    });

    slideLeft.add(btnLeft).click(function (e) {
        if(index > 0){
            index--;
        }else{
            index = 3;
        }
        changeSlide(index);
    });

    slideLine.click(function (e) {
        if ($(this).attr('src') == 'assets/img/slider/sliderLine.svg'){
            changeSlide($(this).attr('id').slice(-1) - 1);
        }
        
    });

    slide.swipe({
        swipeStatus:function(event, phase, direction, distance, duration, fingerCount, fingerData, currentDirection){
            if (phase=="end"){ 
                if (direction == 'right') {
                    if(index > 0){
                        index--;
                    }else{
                        index = 3;
                    }
                    changeSlide(index);
                }
                if (direction == 'left') {
                    if(index < imgText.length - 1){
                        index++;
                    }else{
                        index = 0;
                    }
                    changeSlide(index);
                }
            }
        }, triggerOnTouchEnd:false,
        threshold:100 // сработает через 20 пикселей
    });
});