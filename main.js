$('.featureParent').click( function (e) { //mobile parent clicked button
  
    e.target.classList.remove('collapsed');
    e.target.classList.add('expanded');  
});

$('.featureParent img').click(function(e) { //close button in mobile parent clicked

    e.stopPropagation();
    e.target.parentNode.classList.remove('expanded');
    e.target.parentNode.classList.add('collapsed');   
});

function isNavInViewport() {

    var elementTop = $('.headermainwrap').offset().top;
    var elementBottom = elementTop + $('.headermainwrap').outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    if( (elementBottom > viewportTop)  &&  (elementTop < viewportBottom)) {

        $('.stickToTop').css({
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            display : 'none',
            transition : 'all 0.5s ease'
        });

        $('.stickToTop .middleLogo img').css({
            transform : 'scale(0.1)',
            height: '10px',
            display : 'block',
            transition : 'all 0.5s ease'
        });
    }
    else {

        $('.stickToTop').css({
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display : 'block',
            transition : 'all 0.5s ease'
        });

        $('.stickToTop .middleLogo img').css({
            transform : 'scale(1)',
            height: '40px',
            display : 'block',
            transition : 'all 0.5s ease'
        });
    }
}

$(window).on('scroll', function() {
    isNavInViewport();
});


//mobile navigation menu open on click
$('.mobileResponsiveNav div').click(function() {

    var navListDisplay = $('.mobileResponsiveNav .navItems').css('display');

    if( navListDisplay === 'none' ){       
        $('.mobileResponsiveNav ul').fadeIn();
    }else {        
        $('.mobileResponsiveNav ul').fadeOut();       
    }    
});

//fade nav menu on any item click
$('.mobileResponsiveNav .navItems').click(function() {
    $('.mobileResponsiveNav ul').fadeOut(); 
});
