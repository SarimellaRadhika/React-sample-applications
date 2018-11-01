// Add Horizontal Tabs to jquery
function showArrowsForChevron(){
(function ($){
  
    // Variable creation
    var $elem = $(this),
    widthOfReducedList = $('.nav-tabs-horizontal').width(),
    widthOfList = 0,
    currentPos = 0,
    adjustScroll = function () {
      widthOfList = 0;
      $('.nav-tabs-horizontal  li').each(function(index, item) {
        widthOfList += $(item).width();
      });

      widthAvailale = $elem.width();

      if (widthOfList > widthAvailale) {
        $('.scroller').show();
        updateArrowStyle(currentPos);
        widthOfReducedList = $('.nav-tabs-horizontal').width();
      } else {
        $('.scroller').hide();
      }
    },
    scrollLeft = function () {
      $('.nav-tabs-horizontal').animate({
          scrollLeft: currentPos - widthOfReducedList
      }, 500);

      if (currentPos - widthOfReducedList > 0) {
        currentPos -= widthOfReducedList;
      } else {
        currentPos = 0;
      }
    },
    scrollRight = function () {
      $('.nav-tabs-horizontal').animate({
        scrollLeft: currentPos + widthOfReducedList
      }, 500);

      if ( (currentPos + widthOfReducedList) < (widthOfList - widthOfReducedList)) {
        currentPos += widthOfReducedList;
      } else {
        currentPos = (widthOfList - widthOfReducedList);
      }
    },
    manualScroll = function () {
      currentPos = $('.nav-tabs-horizontal').scrollLeft();

      updateArrowStyle(currentPos);
    },
    updateArrowStyle = function (position) {
      if (position >= (widthOfList - widthOfReducedList)) {
        $('.arrow-right').addClass('disabled');
      } else {
        $('.arrow-right').removeClass('disabled');
      };

      if (position <= 0) {
        $('.arrow-left').addClass('disabled');
      } else {
        $('.arrow-left').removeClass('disabled');
      };
    };

    // Event binding
    $(window).resize( function () {
      adjustScroll();
    });

    $('.arrow-left').on('click', function (){
      scrollLeft();
    });

    $('.arrow-right').on('click', function (){
      scrollRight();
    });

    $('.nav-tabs-horizontal').scroll( function (){
      manualScroll();

    });

    // Initial Call
    adjustScroll();

  

 })(jQuery);

}