$(document).ready(function() {
 	console.log("Script included!");

 	$('ul li').click(function() {
 	$(this).addClass('highlight');
	});

	$('ul li').hover(
		function() {
 			$(this).addClass('active');
 		},
 		function() {
 			$(this).removeClass('active');	
	});

	$('td p').hover(
		function() {
 			$(this).addClass('active');
 		},
 		function() {
 			$(this).removeClass('active');	
	});

	$('td p').click(function() {
 	$(this).wrap("<strike>");
	});

	$('#button').click(function() {
 	$('img').fadeOut();
	});

});
