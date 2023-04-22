$(document).ready(function () {
  var cardImg = $('.content_card-card_img'),
      newsBlock = $('.short_news-block'),
      newsLine = $('.news-line'),
      afishaText = $('.afisha-content--text'),
      index = 1,
      idNewsLine = "",
      txt = "";


  cardImg.hover(function () {
      cardImg.addClass('card_hover');
    }, function () {
      cardImg.removeClass('card_hover');
    }
  );

  function changeNews(index){
    newsBlock.stop(true, true); 

    idNewsLine = "#newsLine" + (index);
    newsBlock.fadeOut(0);
    $('#news' + index).fadeIn(1000);

    newsLine.attr('src', 'assets/img/slider/sliderLine.svg');
    $(idNewsLine).attr('src', 'assets/img/slider/sliderLineSelected.svg');
  }

  newsLine.click(function (e) {
    if ($(this).attr('src') !== 'assets/img/slider/sliderLineSelected.svg'){
      index = $(this).attr('id').slice(-1); 

      changeNews(index);
    }
  });
  if ($(window).width() < 551){
    newsBlock.hide();
    $('#news1').show();

    $('.content-news').swipe({
      swipeStatus:function(event, phase, direction, distance, duration, fingerCount, fingerData, currentDirection){
          if (phase=="end"){ 
              if (direction == 'right') {
                  if(index > 1){
                      index--;
                  }else{
                      index = 4;
                  }
                  changeNews(index);
              }
              if (direction == 'left') {
                  if(index < 4){
                      index++;
                  }else{
                      index = 1;
                  }
                  changeNews(index);
              }
          }
      }, triggerOnTouchEnd:false,
      threshold:100 // сработает через 20 пикселей
    });
  };

  function cutter(obj, len){
    txt = obj.find('p').;
    console.log(txt.length)
    txt = jQuery.grep(txt, function( a ) {
      return a !== '';
    });
    txt = txt.slice(0, len);
    txt = txt.join(" ");

    //obj.text(txt + "...");
  }



  if ($(window).width() > 1000){
    cutter(afishaText, 50);
  }
});

