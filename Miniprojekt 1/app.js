$('body').css('opacity', 0);

$(document).ready(function() {
  $('body').fadeTo(1000, 1);
});

$('#vaar').mouseover(function() {
  $('#vaar .h1I').css('padding-right', 15);
  $('#vaar').css('width', $('#vaar').css('width') + 10);
  $('#vaar').css('height', $('#vaar').css('height') + 10);
});
$('#sommar').mouseover(function() {
  $('#sommar .h1I').css('padding-right', 15);
});
$('#hoest').mouseover(function() {
  $('#hoest .h1I').css('padding-right', 15);
});
$('#vinter').mouseover(function() {
  $('#vinter .h1I').css('padding-right', 15);
});

$('#vaar').mouseleave(function() {
  $('#vaar .h1I').css('padding-right', 10);
});
$('#sommar').mouseleave(function() {
  $('#sommar .h1I').css('padding-right', 10);
});
$('#hoest').mouseleave(function() {
  $('#hoest .h1I').css('padding-right', 10);
});
$('#vinter').mouseleave(function() {
  $('#vinter .h1I').css('padding-right', 10);
});

$('#vaar').click(function() {
  $('body').fadeTo(1000, 0);
  location.href="vaar.html";
});
$('#sommar').click(function() {
  $('body').fadeTo(1000, 0);
  location.href="vaar.html";
});
$('#hoest').click(function() {
  $('body').fadeTo(1000, 0);
  location.href="vaar.html";
});
$('#vinter').click(function() {
  $('body').fadeTo(1000, 0);
  location.href="vaar.html";
});
