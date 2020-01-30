// shields.js

$('.service-info').liteAccordion({
  theme: 'stitch',
  rounded: true
});

$('a.smooth').smoothScroll({preventDefault: false});

var fixedNav = $('div.fixed-nav');
var $window = $(window);
$window.scroll(function() {
  if($window.scrollTop() >= 130 && !fixedNav.is(':visible')) {
    fixedNav.show();
  } else if ($window.scrollTop() < 130 && fixedNav.is(':visible')) {
    fixedNav.hide();
  }   
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-47706312-1', 'shieldsentertainment.co.uk');
ga('send', 'pageview');

// Update copyright date
$(document).ready(function() {
  $('#copy-year').text(new Date().getFullYear());
});