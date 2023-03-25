$(document).ready(function () {
  var cardImg = $('.content_card-card_img');


      cardImg.hover(function () {
          cardImg.addClass('card_hover');
        }, function () {
          cardImg.removeClass('card_hover');
        }
      );
});