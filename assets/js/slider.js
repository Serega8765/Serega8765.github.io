$(document).ready(function () {
    var slideLeft = $('#slideLeft'),
        btnLeft = $('#btn-left'),
        slideRight = $('#slideRight'),
        btnRight = $('#btn-right'),
        hSlide = $('.slider-h1'),
        numSlide = $('.slide-numSlide'),
        slide = $('.slide');

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
        numSlide.fadeOut(function() {
            $(this).text((index + 1) + ' / ' + imgText.length)
        }).fadeIn();
        hSlide.slideUp(1);
        hSlide.html(imgText[index]).slideDown(1000);
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

});