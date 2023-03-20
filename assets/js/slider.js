$(document).ready(function () {
    var slideLeft = $('#slideLeft'),
        slideRight = $('#slideRight'),
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

    function changeSlide(index){
        slide.css('background-image', 'url(' + imgUrl[index] + ')');
        hSlide.html(imgText[index]);
        numSlide.text((index + 1) + ' / ' + imgText.length);
        return
    }
        
    slideRight.click(function (e) {
        if(index < imgText.length - 1){
            index++;
        }else{
            index = 0;
        }
        changeSlide(index);

        console.log(index);
    });

    slideLeft.click(function (e) {
        if(index > 0){
            index--;
        }else{
            index = 3;
        }
        changeSlide(index);
        console.log(index);
    });

});