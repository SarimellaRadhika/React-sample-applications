;(function() {
  'use strict';


  $(activate);


  function activate() {

    $('.scrolltabs')
      .scrollingTabs()
      .on('ready.scrtabs', function() {
        $('.tab-content').show();
      });

  }
}());
