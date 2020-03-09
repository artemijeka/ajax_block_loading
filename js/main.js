/* Технология AJAX */

$(function() {
	var sectionHeight = $('#section-1').height();
	var i = 1;
	$(window).scroll(function(event) {
		var scrollTop = $(this).scrollTop();
		console.log(i*sectionHeight);
		console.log(scrollTop);
		if (scrollTop == i*sectionHeight) {			
			console.log(sectionHeight);
			console.log(i*sectionHeight);
			var $newSectionWrap = $('<div></div>');
			$newSectionWrap.load('./sections.html #section-'+(i+2)+'');
			$('#sections').append($newSectionWrap);
			i++;
		}

	});

});