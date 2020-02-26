var footerAnimate = function() {
  var footer = $('#fh5co-footer');
  if ( footer.length > 0 ) {

    footer.waypoint( function( direction ) {

      if( direction === 'down' && !$(this.element).hasClass('animated') ) {

        setTimeout(function() {
          footer.find('.to-animate').each(function( k ) {
            var el = $(this);

            setTimeout ( function () {
              el.addClass('fadeIn animated');
            },  k * 200, 'easeInOutExpo' );

          });
        }, 200);


        $(this.element).addClass('animated');

      }
    } , { offset: '80%' } );

  }
};
