console.log('js connected');

$(function() {
  console.log("Dom ok");

  // action window scroll to next veiew - About Me
  $('#bubbleAboutMe').on('click', (event) => {
    $('body').animate({
      scrollTop: $('#bubbleAboutMe').offset().top -50
    }, 500);
    $('#modalAboutMe').css({'visibility': 'visible'});
    // About Me modal activation
    // $('#bubbleAboutMe').on('mouseover', (function(event) {
    //   // console.log('on about me bubble');
    //   $('#modalAboutMe').css({'visibility': 'visible'});
    // }));
    // $('#bubbleAboutMe').on('mouseout', (function(event) {
    //   // console.log('on about me bubble');
    //   $('#modalAboutMe').css({'visibility': 'hidden'});
    // }));
    });
    $('#bubbleAboutMe').on('mouseover', (function(event) {
      // console.log('on about me bubble');
      $('#modalAboutMe').css({'visibility': 'visible'});
    }));
      // $('#bubbleAboutMe').on('mouseout', (function(event) {
      //   // console.log('on about me bubble');
      //   $('#modalAboutMe').css({'visibility': 'hidden'});
      // }));
    $('#bubbleProjects').on('mouseover', (function(event) {
      // console.log('on about me bubble');
      $('#modalAboutMe').css({'visibility': 'hidden'});
    }));



  // action window scroll to next veiew - Projects
  // $('#bubbleProjects').on('click', (event) => {
  //   $('body').animate({
  //     scrollTop: $('#bubbleProjects').offset().top -50
  //   }, 500);
  //   // Projects modal activation
  //   $('#bubbleProjects').on('mouseover', (function(event) {
  //     // console.log('on projects bubble');
  //     $('#modalProjects').css({'visibility': 'visible'});
  //   }));
  //   $('#bubbleAboutMe').on('mouseout', (function(event) {
  //     // console.log('on about me bubble');
  //     $('#modalAboutMe').css({'visibility': 'hidden'});
  //   }));
    // $('#bubbleProjects').on('mouseout', (function(event) {
    //   // console.log('on projects bubble');
    //   $('#modalProjects').css({'visibility': 'hidden'});
    // }));
    // $('#bubbleProjects').on('mouseover', (function(event) {
    //   // console.log('on about me bubble');
    //   $('#modalAboutMe').css({'visibility': 'hidden'});
    // }));
  // });

  // // action window scroll to next veiew - Contact
  // $('#bubbleContact').on('click', (event) => {
  //   $('body').animate({
  //     scrollTop: $('#bubbleAboutMe').offset().top -50
  //   }, 500);
  //   $('#modalContact').css({'visibility': 'visible'});
  //   // Contact modal activation
  //   $('#bubbleContact').on('mouseover', (function(event) {
  //     // console.log('on contact bubble');
  //     $('#modalContact').css({'visibility': 'visible'});
  //   }));
  //   $('#bubbleContact').on('mouseout', (function(event) {
  //     // console.log('on contact bubble');
  //     $('#modalContact').css({'visibility': 'hidden'});
  //   }));
    // $('#bubbleContact').on('mouseover', (function(event) {
    //   // console.log('on about me bubble');
    //   $('#modalAboutMe').css({'visibility': 'hidden'});
    // }));
  // });

});
