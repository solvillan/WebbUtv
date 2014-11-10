/* Rickard Doverfelt 2014 */
$(window).load(function() {
  $('#status').delay(250).fadeOut();
  $('#preloader').delay(250).fadeOut('slow');
  $('body').delay(250).css({'overflow':'visible'});
  $('#toIndex').delay(1250).fadeTo(250, 0);
});

$('#vaar').mouseover(function() {
  $('#vaar .h1I').slideDown(100);
});
$('#sommar').mouseover(function() {
  $('#sommar .h1I').slideDown(100);
});
$('#hoest').mouseover(function() {
  $('#hoest .h1I').slideDown(100);
});
$('#vinter').mouseover(function() {
  $('#vinter .h1I').slideDown(100);
});
$('#about').mouseover(function() {
  $('#about .h1I').slideDown(100);
});

$('#vaar').mouseleave(function() {
  $('#vaar .h1I').slideUp(100);
});
$('#sommar').mouseleave(function() {
  $('#sommar .h1I').slideUp(100);
});
$('#hoest').mouseleave(function() {
  $('#hoest .h1I').slideUp(100);
});
$('#vinter').mouseleave(function() {
  $('#vinter .h1I').slideUp(100);
});
$('#about').mouseleave(function() {
  $('#about .h1I').slideUp(100);
});

$('#vaar').click(function() {
  $('#status').fadeIn();
  $('#preloader').fadeIn('slow', function() {
    location.href="vaar.html";
  });
  $('body').css({'overflow':'hidden'});
});
$('#sommar').click(function() {
  $('#status').fadeIn();
  $('#preloader').fadeIn('slow', function() {
    location.href="sommar.html";
  });
  $('body').css({'overflow':'hidden'});
});
$('#hoest').click(function() {
  $('#status').fadeIn();
  $('#preloader').fadeIn('slow', function() {
    location.href="hoest.html";
  });
  $('body').css({'overflow':'hidden'});
});
$('#vinter').click(function() {
  $('#status').fadeIn();
  $('#preloader').fadeIn('slow', function() {
    location.href="vinter.html";
  });
  $('body').css({'overflow':'hidden'});
});
$('#about').click(function() {
  $('#status').fadeIn();
  $('#preloader').fadeIn('slow', function() {
    location.href="about.html";
  });
  $('body').css({'overflow':'hidden'});
});

$('#head').click(function() {
  $('#status').fadeIn();
  $('#preloader').fadeIn('slow', function() {
    location.href="index.html";
  });
  $('body').css({'overflow':'hidden'});
});

$('#head').mouseover(function() {
  $('#toIndex').fadeTo(250, 1);
});

$('#head').mouseleave(function() {
  $('#toIndex').fadeTo(250, 0);
});
