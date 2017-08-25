var transparentDemo = true;
var fixedTop = false;

$(window).scroll(function(e) {
  oVal = ($(window).scrollTop() / 170);
  $(".blur").css("opacity", oVal);

});

/* Scroll Animations */
// Cache reference to window and animation items
var $anim_elements = $(".scroll-anim");
var $window = $(window);

$(document).ready( function(){

  $anim_elements = $(".scroll-anim");

  $window.on('scroll', checkViewPortFocus);
  $window.on('scroll resize', checkViewPortFocus);

  // Trigger a window scroll event
  $window.trigger('scroll');

  console.log($anim_elements.length);
});

function checkViewPortFocus() {

  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  if ( $anim_elements.length == 0 ) {
    $anim_elements = $(".scroll-anim");
    console.log($anim_elements.length);
  } else {
    $($anim_elements).each( function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
        $element.addClass('in-view');
        //console.log('checkViewPortFocus true');
      } else {
        $element.removeClass('in-view');
        //console.log('checkViewPortFocus false');
      }
    });
  }
}
