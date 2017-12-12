//Adopted from http://www.josebrowne.com/open/tutorial-easy-css-animations-with-animate-css
//By Ahmad Al Marzook

$(document).ready(function(){
    $('.nav-item').each(function() {
        animationHover(this, 'pulse');
    });
	
	function animationHover(element, animation){
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated ' + animation);        
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);         
        });
}
	
});

