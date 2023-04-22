$(document).ready(function () {
  var cardImg = $('.content_card-card_img'),
      newsBlock = $('.short_news-block'),
      newsLine = $('.news-line'),
      afishaText = $('.afisha-content--text'),
      newsText = [$('#news1'), $('#news2'), $('#news3'), $('#news4')],
      index = 1,
      lenGen = 0,
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
    obj.find('p').each(function( index, element ) {
      txt = $(this).text().split(" ");
      txt = jQuery.grep(txt, function( a ) {
        return a !== '';
      });

      if (lenGen + txt.length < len){
        lenGen = lenGen + txt.length;
        $(this).text(txt.join(' '));
      } else {
        txt = txt.slice(0, len - lenGen);
        if (txt == 0){
          $(this).css('display', 'none');
        };
        lenGen = lenGen + txt.length;
        $(this).text(txt.join(' ') + '...');
      }
    });
    lenGen = 0;
  }

  cutter(afishaText, 50);

  if ($(window).width() < 1401){
    cutter(afishaText, 45);
  }

  if ($(window).width() < 1001 && $(window).width() > 890){
    cutter(afishaText, 35);
    $.each(newsText, function (index, el){
      cutter($(this), 25);
    });
  }

  if ($(window).width() < 890  && $(window).width() > 769){
    $.each(newsText, function (index, el){
      cutter($(this), 20);
    });
  }

  if ($(window).width() < 769 && $(window).width() > 731){
    cutter(afishaText, 21);
  }

  if ($(window).width() < 731 && $(window).width() > 551){
    cutter(afishaText, 35);
    $.each(newsText, function (index, el){
      cutter($(this), 15);
    });
  }

  if ($(window).width() < 551){
    $.each(newsText, function (index, el){
      cutter($(this), 40);
    });
  }

  if ($(window).width() < 481){
    cutter(afishaText, 30);
    $.each(newsText, function (index, el){
      cutter($(this), 31);
    });
  }

  if ($(window).width() < 456){
    $.each(newsText, function (index, el){
      cutter($(this), 25);
    });
  }

  if ($(window).width() < 361){
    cutter(afishaText, 25);
    $.each(newsText, function (index, el){
      cutter($(this), 20);
    });
  }
  
  
});

