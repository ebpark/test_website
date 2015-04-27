
// Enables the Blue Square to follow the mouse cursor
$(document).on('mousemove', function(e){
    $('#follow').css({
       left:  e.pageX + 0,  // Set "0" to any other integer to offset its position 
       top:   e.pageY + 0   // Ditto
    });
});

// Animates orange square when mouse is clicked anywhere on the page
$(document).click(function(e) {
	$('#move').animate({left: "-=100px", top: "-=100px"}, 1000);
	$('#move').animate({left: "+=100px", top: "+=100px"}, 1000);
});