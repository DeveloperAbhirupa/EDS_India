$(function() {
  //Cards info
  var cards = [{
    author: "Shelton Cooper",
    quote: "Você não acha que se eu estivesse errado, eu saberia?",
    imgUrl: "https://i.imgur.com/mfkTSXu.png",
    color: "#18a0ff",
    likes: 423
  }, {
    author: "Albert Einstein",
    quote: "O verdadeiro sinal da inteligência não é conhecimento, mas imaginação.",
    imgUrl: "https://i.imgur.com/3yAyk9o.jpg",
    color: "#4C5099",
    likes: 324
  }, {
    author: "Steve Jobs",
    quote: "A única maneira de fazer um ótimo trabalho é amar o que você faz!",
    imgUrl: "https://i.imgur.com/GIijkyE.jpg",
    color: "#FFA358",
    likes: 234
  }];

  //Global variables
  var currIndex = 0;
  var fontMax = 49;
  // var currLikes =  parseInt($(".num-likes").text());
  var counter = 0;

  //Update info of each card when slide
  function changeQuote(i) {
    //Change author's image
    $(".card-navigation").css('background-image', 'url(' + cards[i].imgUrl + ')');
    //Change card background
    $(".quote-card").css('background-color', cards[i].color);
    //Change quote text
    $(".quote-text").hide().text(cards[i].quote).fadeIn(500);
    //Change quote font-size
    $(".quote-text").css('font-size', Math.round(fontMax * fontMax / $(".quote-text").text().length));
    //Change author text
    $(".quote-author").text("- " + cards[i].author);
    //Change num likes
    $(".num-likes").text(cards[i].likes);
  }

  //Slide to next card
  $('.arrow-right').click(function() {
    currIndex += 1;
    if (currIndex > cards.length - 1) {
      currIndex = 0;
    }
    changeQuote(currIndex);
  });

  //Slide to previous card
  $('.arrow-left').click(function() {
    currIndex -= 1;
    if (currIndex < 0) {
      currIndex = cards.length - 1;
    }
    changeQuote(currIndex);
  });

  //Change number of likes on click
  $(".heart-num").on('click', function() {
    var currLikes = parseInt($(".num-likes").text());
    if (counter % 2 === 0) {
      $(".like").css('color', '#F2495A');
      currLikes++;
      counter++;
    } else {
      $(".like").css('color', '#ffffff');
      currLikes--;
      counter++;
    }
    $(".num-likes").text(currLikes);
  })

});
