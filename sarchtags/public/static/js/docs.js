jQuery(function(){
  // Track downloads
  $('#download-master').click(function(){
    _trackEvent('Downloads', 'master');
  });
});

jQuery(document).ready(function($) {

  /* Docs scrollspy */
  $('body').scrollspy({
    target: '.bs-sidebar',
    offset: 0
  })

  $(window).on('load', function () {
    $('body').scrollspy('refresh')
  })

  // back to top
  setTimeout(function () {
    var $sideBar = $('.bs-sidebar')

    $sideBar.affix({
      offset: {
        top: function () {
          var offsetTop      = $sideBar.offset().top
          var sideBarMargin  = parseInt($sideBar.children(0).css('margin-top'), 10)

          return (this.top = offsetTop - sideBarMargin)
        }
      , bottom: function () {
          return (this.bottom = $('.bs-footer').outerHeight(true))
        }
      }
    })
  }, 100)

  /* Run examples */
  $('.token-example-field').tokenfield();
  var source = ['red','BLue','green','yellow','violet','brown','purple','black','white'];
  $('#tokenfield-1').tokenfield({
    autocomplete: {
      source: source,
      delay: 100
    },
    showAutocompleteOnFocus: true,
    createTokensOnBlur: true,
    delimiter: [',',' ', '-', '_']
  });

  $('#tokenfield-1').on('tokenfield:createtoken', function (e) {
    var data = e.attrs.value.toLowerCase();
    var preTokens = $(this).tokenfield('getTokensList','',false).toString().toLowerCase().split(',');
    console.log(e);
    if(jQuery.inArray( data, preTokens) !== -1) {
        e.preventDefault();
        return false;
    }
    console.log(e.target.nodeName);
    /*var addedTokens = preTokens;
    addedTokens.push(data);
    console.log(addedTokens);
    $('.ui-autocomplete li').each(function( index ) {
        let text = $(this).text();
        console.log(text);
        if(jQuery.inArray( text, addedTokens) !== -1) {
            $(this).addClass('added');
        }

    });*/
    $('.tokenfield').removeClass('focus');
    return jQuery.inArray( data, source.toString().toLowerCase().split(',')) !== -1 ? true : false;
    
  });

  $('.token-input').on('click', function(e) {
    console.log('asdfsadf');
    $('body').click();
  });

  

});