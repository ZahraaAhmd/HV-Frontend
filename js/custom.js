/**** 
 * slack slider  
 * features slider 
 */

$('.media-slider').slick({
    dots: false,
    arrows: false,
    
    slidesToShow:3,
    slidesToScroll: 1,
    responsive: [
        
        {
            breakpoint: 992,
            settings: {
                centerMode:true,

                slidesToShow:2,
            }
        },
        {
            breakpoint:768,
            settings: {
                centerMode:true,
                centerPadding: '20%',
                slidesToShow:1,
            }
        }
        ,
        {
            breakpoint:576,
            settings: {
                centerMode:true,
                centerPadding: '10%',
                slidesToShow:1,
            }
        }
    ]
});

$(document).ready(function() {
	$('.carousel').carousel().on('slide.bs.carousel',function(){
		$('.carousel-item').find('video').each(function(){
			this.pause();
		});
	});	
	$('.carousel').carousel().on('slide.bs.carousel',function(){
		$('.carousel-item active').find('video').each(function(){
			this.play();
		});
	});	
    $('.carousel video').on('play', function (e) {
        $(".carousel").carousel('pause');
    });
    $('.carousel video').on('stop pause ended', function (e) {
        $(".carousel").carousel();
    });
})