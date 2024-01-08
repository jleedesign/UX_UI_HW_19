console.log("Your index.js file is loaded correctly!");

$(html).ready(function() {
    $('#sec-2').click (function() {
      console.log("You clicked on #myID");
      $('html, body').animate({scrollTop: $('.myWork').offset().top }, 'slow');
      return false;
    });
  });

const scrollToBtn = $('.arrow');
const scrollToEl = $('.myWork');
scrollToBtn.click(() => {
  $('.arrow').animate(
    {
      scrollTop: scrollToEl.offset().top,
    },
    800 //speed
  );
});

function div arrow-align()
{
  var height = document.body.scrollHeight;
  window.scroll(0 , height);
}