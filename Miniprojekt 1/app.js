$('body').css('opacity', 0);

$(document).ready(function() {
  $('body').fadeTo(250, 1);
  $('#toIndex').css('opacity', 0);
});

$('#vaar').mouseover(function() {
  $('#vaar .h1I').slideDown(100);
  //$('#vaar').fadeTo(100, 0.75);
});
$('#sommar').mouseover(function() {
  $('#sommar .h1I').slideDown(100);
  //$('#sommar').fadeTo(100, 0.75);
});
$('#hoest').mouseover(function() {
  $('#hoest .h1I').slideDown(100);
  //$('#hoest').fadeTo(100, 0.75);
});
$('#vinter').mouseover(function() {
  $('#vinter .h1I').slideDown(100);
  //$('#vinter').fadeTo(100, 0.75);
});

$('#vaar').mouseleave(function() {
  $('#vaar .h1I').slideUp(100);
  //$('#vaar').fadeTo(100, 1);
});
$('#sommar').mouseleave(function() {
  $('#sommar .h1I').slideUp(100);
  //$('#sommar').fadeTo(100, 1);
});
$('#hoest').mouseleave(function() {
  $('#hoest .h1I').slideUp(100);
  //$('#hoest').fadeTo(100, 1);
});
$('#vinter').mouseleave(function() {
  $('#vinter .h1I').slideUp(100);
  //$('#vinter').fadeTo(100, 1);
});

$('#vaar').click(function() {
  $('body').fadeOut(250, function () {
    location.href="vaar.html";
  });
});
$('#sommar').click(function() {
  $('body').fadeOut(250, function () {
    location.href="sommar.html";
  });
});
$('#hoest').click(function() {
  $('body').fadeOut(250, function () {
    location.href="hoest.html";
  });
});
$('#vinter').click(function() {
  $('body').fadeOut(250, function () {
    location.href="vinter.html";
  });
});

$('#head').click(function() {
  $('body').fadeOut(250, function () {
    location.href="index.html";
  });
});

$('#head').mouseover(function() {
  $('#toIndex').fadeTo(250, 1);
});

$('#head').mouseleave(function() {
  $('#toIndex').fadeTo(250, 0);
});
