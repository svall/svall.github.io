console.log('js connected');

$(function() {
  console.log("Dom ok");

  // page position bubble effects
  $(window).scroll(function(){
    var positionNow = $(document).scrollTop();
    // console.log(positionNow);
    var limiting = 400;
    if(positionNow <= limiting){
      // console.log("change more!!!");
      $('.bubble').animate({
        "width":"200px",
        "height": "200px",
        "fontSize": "30px",
        "lineHeight": "120px"
      }, 10);
    } if(positionNow > limiting) {
      // console.log("change less!!!");
      $('.bubble').animate({
        "width":"150px",
        "height": "150px",
        "fontSize": "20px",
        "lineHeight": "100px"
      }, 15);
    }
  });

  // action window scroll to next veiew on click on bubble
  $('#bubbleAboutMe').on('click', (event) => {
    $('body').animate({
      scrollTop: $('#bubbleAboutMe').offset().top -10
    }, 500);
    $('#modalAboutMe').css({'visibility': 'visible'});
    // $('.bubble').css({
    //   width: '150px',
    //   height: '150px',
    //   fontSize: '20px',
    //   lineHeight: '100px',
    // });
  });
  $('#bubbleProjects').on('click', (event) => {
    $('body').animate({
      scrollTop: $('#bubbleProjects').offset().top -10
    }, 500);
    $('#modalProjects').css({'visibility': 'visible'});
    // $('.bubble').css({
    //   width: '150px',
    //   height: '150px',
    //   fontSize: '20px',
    //   lineHeight: '100px',
    // });
  });
  $('#bubbleContact').on('click', (event) => {
    $('body').animate({
      scrollTop: $('#bubbleContact').offset().top -10
    }, 500);
    $('#modalContact').css({'visibility': 'visible'});
    // $('.bubble').css({
    //   width: '150px',
    //   height: '150px',
    //   fontSize: '20px',
    //   lineHeight: '100px',
    //   marginBottom: '10px'
    // });
  });
  // Modal response to hovering over different bubbles
  $('#bubbleProjects').on('mouseover', (function(event) {
    $('#modalAboutMe').css({'visibility': 'hidden'});
    $('#modalContact').css({'visibility': 'hidden'});
    $('#modalProjects').css({'visibility': 'visible'});
  }));
  $('#bubbleContact').on('mouseover', (function(event) {
    $('#modalAboutMe').css({'visibility': 'hidden'});
    $('#modalProjects').css({'visibility': 'hidden'});
    $('#modalContact').css({'visibility': 'visible'});
  }));
  $('#bubbleAboutMe').on('mouseover', (function(event) {
    $('#modalProjects').css({'visibility': 'hidden'});
    $('#modalContact').css({'visibility': 'hidden'});
    $('#modalAboutMe').css({'visibility': 'visible'});
  }));


});
