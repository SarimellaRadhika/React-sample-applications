// JavaScript Document

 $(".button_collapse").on('click', function() {
   $(".colapse").slideDown();

   $(".button_collapse").hide();
   $(".collapse_bottom").show();
   $('.collapsebox').css({"border-color": "#ccc",
             "border-weight":"2px",
             "border-style":"solid"});



});
 $(".collapse_bottom").on('click', function() {
   $(".colapse").slideUp();

    $(".collapse_bottom").hide();
    $(".button_collapse").show();
    $('.collapsebox').css({"border-color": "#fff",
             "border-weight":"2px",
             "border-style":"solid"});
   });



//resize textarea
$('.resizetextbox').on('keydown', function(e){
    if(e.which == 13) {e.preventDefault();}
}).on('input', function(){
    $(this).height(1);
    var totalHeight = $(this).prop('scrollHeight') - parseInt($(this).css('padding-top')) - parseInt($(this).css('padding-bottom'));
    $(this).height(totalHeight);
});






//popover to chat
 $('#chatinput').popover();
  $('#chatinput2').popover();



// it is for slideup and slide down open thread messages
 $(".threadinside-window").hide();
$(".threadinside-window-open").click(function() {
    $(".threadinside-window").show("slow");
    $(".theme-main-section-heading-shadow").hide();
});
$(".threadinside-window-close").click(function() {
    $(".threadinside-window").hide("slow");
    $(".theme-main-section-heading-shadow").show();
});




// it is for direct messages slider
$(".directmessages-window").hide();
$(".directmessage_popup").click(function() {
    $(".directmessages-window").show("slow");
});
$(".directmessages-window-close").click(function() {
    $(".directmessages-window").hide("slow");

});


//This is for drill downs and create ticket
$(".dynamic-overlay-slider").hide();
$(".dynamicbox.top5px").removeClass("top5px");
$(".dynamic-overlay-slider-open").click(function() {
$(".dynamic-overlay-slider").show();
//$(".dynamic-content-2").addClass("top0px");
  //$("#dynamicarea-title").hide(1000);
});


$(".dynamic-overlay-slider-open.adjustdynamic-content-2").click(function() {
 
  //$(".dynamicbox.top5px").removeClass("top5px");
    //$("#dynamicarea-title").show(100);
    //$(".dynamic-content-2.top0px").removeClass("top0px");
 

});


$(".dynamic-overlay-slider-2").hide();
$(".dynamic-content-2.top0px").hide();
//$(".dynamicbox.top5px").removeClass("top5px");
$(".dynamic-overlay-slider-open-2").click(function() {
    //$(".dynamic-content-2").addClass("top0px");
 $(".dynamic-overlay-slider-2").show("scale",{}, 500); 
 //$(".dynamic-overlay-slider-2").show(200);
 //$("#dynamicarea-title").slideToggle("slow");
  $(".dynamic-overlay-slider").hide("400"); 
  
  //$(".dynamic-content-2").toggleClass("box0px");
 $(".dynamic-overlay-slider-main").addClass("center-effect");
  //$("#dynamicarea-title").slideToggle(100);
  $(".chat-settings-dropdown").hide(200);
   
});

$("#slide-close").click(function() { 
 $(".dynamic-overlay-slider-2").hide("scale",{}, 500);
 $(".dynamic-overlay-slider-main").removeClass("center-effect");
});
 
 


// for text box
    $(document).ready(function(){
    $(".searchbox-menu").hide();
    $('.searchbox-open').click(function(event){
      event.stopPropagation();
      $(".searchbox-menu").show();
    });
      $(".searchbox-menu").on("click", function (event) {
      event.stopPropagation();
      });
        $(".searchbox-menu li a").on("click", function (event) {
  $(".searchbox-menu").hide();
      });
    });

    $(document).on("click", function () {
    $(".searchbox-menu").hide();
    });



 $('ul.dropdown-menu.mega-dropdown-menu').on('click', function(event){
      // onclick list item dont close dropdown menus
      event.stopPropagation();
    });




// Chat menus
$(document).ready(function(){
    $(".chat-menu").hide();
    $('.chat-plus').click(function(event){
      event.stopPropagation();
      $(".chat-menu").slideToggle("slow");
    });
      $(".chat-menu").on("click", function (event) {
      event.stopPropagation();
      });
        $(".chat-menu li a").on("click", function (event) {
  $(".chat-menu").hide("slow");
      });
    });

    $(document).on("click", function () {
    $(".chat-menu").hide("slow");
    });





// below code for on hover adding icons for thread.
/* $( ".thread-icons" ).hover(
function() {
$(this).append( $("<div class='onhover-icons threadicons'><span><ul class='nav nav-pills'><li class='dropdown'><a class='dropdown-toggle icon' data-toggle='dropdown'  role='button' aria-haspopup='true' aria-expanded='false'><i class='fa fa-commenting-o' aria-hidden='true'></i></a></li><li class='dropdown'><a class='dropdown-toggle icon' data-toggle='dropdown'  role='button' aria-haspopup='true' aria-expanded='false'><i class='fa fa-ellipsis-h' aria-hidden='true' ></i></a></li></ul></span></div>"));
},
function() {
$( this ).find( "span:last" ).remove();
}
);*/




$( ".settings-chat" ).hover(
function() {
$(this).append( $("<div class='theme-thread-hovers'><span  class='chat-reply'><a href='#' title='See more'><i class='fa fa-ellipsis-h' aria-hidden='true'></i></a> </span></div>"));
},
function() {
$( this ).find( "span:last" ).remove();
}
);





$( ".threadowner-icon" ).hover(
function() {
$(this).append( $("<div class='onhover-icons threadownericons'><span><ul class='nav nav-pills'><li class='dropdown'><a class='dropdown-toggle icon' data-toggle='dropdown'  role='button' aria-haspopup='true' aria-expanded='false'><i class='fa fa-ellipsis-h' aria-hidden='true' ></i></a></li></ul></span></div>"));
},
function() {
$( this ).find( "span:last" ).remove();
});


$( ".mymessage" ).hover(
function() {
$(this).append( $("<div class='onhover-icons mymessageicons'><span><ul class='nav nav-pills'><li class='dropdown'><a class='dropdown-toggle icon' data-toggle='dropdown'  role='button' aria-haspopup='true' aria-expanded='false'><i class='fa fa-ellipsis-h' aria-hidden='true' ></i></a></li></ul></span></div>"));
},
function() {
$( this ).find( "span:last" ).remove();
});









// for auto height text box / chat box resize
$(".resize-textbox").keyup(function (e) {
    autoheight(this);
});

function autoheight(a) {
    if (!$(a).prop('scrollTop')) {
        do {
            var b = $(a).prop('scrollHeight');
            var h = $(a).height();
            $(a).height(h - 5);
        }
        while (b && (b != $(a).prop('scrollHeight')));
    };
    $(a).height($(a).prop('scrollHeight')+0);
}
autoheight($(".resize-textbox"));



// direct messages expend collapse
$(document).ready(function(){
  $(".directmessages-list").hide();
  $(".open-directmessages").click(function(){
  $(".directmessages-list").slideToggle(function() {
    if($('.directmessages-list').css('display') == 'block'){
      $(".open-directmessages").removeClass('dir-close').addClass('dir-open');
    }else {
      $(".open-directmessages").removeClass('dir-open').addClass('dir-close');
    }
  });
  });
});


// basic popovers
$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
        placement : 'top',
        trigger : 'hover'
    });
});





// admin page / settings page accordion or leftmenus
$(function() {
    var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.sublinks').not($next).slideUp().parent().removeClass('open');
    };
  }

  var accordion = new Accordion($('#accordion'), false);

});


// dropdown down onhover open only

 (function($){
        $('nav .dropdown').hover(
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideDown("300");
            $(this).toggleClass('open');
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideUp("fast");
            $(this).toggleClass('open');
        }
    );
    })(jQuery);







    // This is for drop-down and drop-up depends on scroll (Used in Chat Collaboration)
  $(document).on("shown.bs.dropdown", ".drp", function () {
    // calculate the required sizes, spaces
    var $ul = $(this).children(".dropdown-menu");
    var $button = $(this).children(".dropdown-toggle");
    var ulOffset = $ul.offset();
    // how much space would be left on the top if the dropdown opened that direction
    var spaceUp = (ulOffset.top - $button.height() - $ul.height()) - $(window).scrollTop();
    // how much space is left at the bottom
    var spaceDown = $(window).scrollTop() + $(window).height() - (ulOffset.top + $ul.height());
    // switch to dropup only if there is no space at the bottom AND there is space at the top, or there isn't either but it would be still better fit
    if (spaceDown < 0 && (spaceUp >= 0 || spaceUp > spaceDown))
      $(this).addClass("dropup");
}).on("hidden.bs.dropdown", ".drp", function() {
    // always reset after close
    $(this).removeClass("dropup");
});


// This is for conversation drop-down prevent for desappear
/*
    $('.theme-thread-settings-menu').click(function(e) {
    e.stopPropagation();
});*/




// Below script for conversation setting dropdown

$('.chat-settings-dropdown').hide();

$('html').click(function() {
    $('.chat-settings-dropdown').hide();
  $(".iconsontreads").removeClass("show");
  //$(".iconsontreads div > span > ul >li.active").removeClass("active");
 });


 $('.threadicons').click(function(e){
     e.stopPropagation();
 });



$('.settings-menu').click(function(e) {

  var $ul = $(this);
    var $button = $(this);
    var ulOffset = $ul.offset();
    // how much space would be left on the top if the dropdown opened that direction
    var spaceUp = (ulOffset.top - $button.height() - $ul.height()) - $(window).scrollTop();
    // how much space is left at the bottom
    var spaceDown = $(window).scrollTop() + $(window).height() - (ulOffset.top + $ul.height());
    // switch to dropup only if there is no space at the bottom AND there is space at the top, or there isn't either but it would be still better fit
  console.log(spaceUp+' - '+spaceDown);
    if (spaceUp <= spaceDown) { console.log(1);
    $(this).closest('div').find('.chat-settings-dropdown').removeClass('drp-up').addClass('drp-down');
  } else { console.log(2);
    $(this).closest('div').find('.chat-settings-dropdown').removeClass('drp-down').addClass('drp-up');
  }


 $(this).closest('div').find('.chat-settings-dropdown').toggle();
  var selector = $(this).closest(".iconsontreads");
  if(selector.hasClass("show")){
    selector.removeClass("show");
  } else {
    selector.addClass("show");
  }

 });

// Above script for conversation setting dropdown END
   $(".settings-menu").click(function () {
    if ($(".drp").hasClass('open')) {
      $(".drp").removeClass("open");
    } else {
      $(".drp").removeClass("open");
    }
  });



/************************ reports expend collapse modifications ****/
/*$(document).ready(function(){
        // Add minus icon for collapse element which is open by default
        $(".collapse.in").each(function(){
          $(this).siblings(".panel-heading").find(".fa").addClass("fa-angle-down").removeClass("fa-caret-right");
        });
        
        // Toggle plus minus icon on show hide of collapse element
        $(".collapse").on('show.bs.collapse', function(){
          $(this).parent().find(".fa").removeClass("fa-angle-right").addClass("fa-angle-down");
        }).on('hide.bs.collapse', function(){
          $(this).parent().find(".fa").removeClass("fa-angle-down").addClass("fa-angle-right");
        });
    });

*/

 

    
// direct messages slider
$(".directmessages-window").hide();
$(".directmessages-window-open").click(function() {
    $(".directmessages-window").show("slow");
   
});
$(".directmessages-window-close").click(function() {
    $(".directmessages-window").hide("slow");
   
});



$('.SeeMore2').click(function(){
    var $this = $(this);
    $this.toggleClass('SeeMore2');
    if($this.hasClass('SeeMore2')){
      $this.text('View more');      
    } else {
      $this.text('View less');
    }
  });
  
  $('.SeeMore3').click(function(){
    var $this = $(this);
    $this.toggleClass('SeeMore3');
    if($this.hasClass('SeeMore3')){
      $this.text('Read more');      
    } else {
      $this.text('Read less');
    }
  });
  
  $('.SeeMore4').click(function(){
    var $this = $(this);
    $this.toggleClass('SeeMore4');
    if($this.hasClass('SeeMore4')){
      $this.text('See more');      
    } else {
      $this.text('See less');
    }
  });
  

$(function ($) {
    //accordion
    $('.morefollow').on('click', function(event){ 
        $(".slider-main-inviteusers").animate({ scrollTop: $('#nffollowers').position().top + 17 }, 800);   
    });
  $('.tokenfield').click(function(){
    $(this).find('input').focus();
  });
    
});




/************* Panel movements *************/
$(document).ready(function(){
           $(function() {
        $('div.split-pane').splitPane();
        /*$('button:first').on('click', function() {
          $('div.split-pane').splitPane('lastComponentSize', 10);
        });
        $('button:last').on('click', function() {
          $('div.split-pane').splitPane('firstComponentSize', 0);
        });
        */
      });

});


/**************************** Panel responsive ***************************/
$(document).ready(function(){ 
$('li.seven span.pull-right').hide();  //added for infobar enhancement
   //       $('#sh-ser').click(function() {
   //    $(".universal-search").show();
   //  });
  $(".pretty-split-pane-frame, .adjust-colum-right").mouseout(function(){

   // console.log('console.log',parseInt($(".adjust-colum-right").width())) 
   // Added for Infobar Enhancement
    if((parseInt($(".adjust-colum-right").width()) < 700)) 
    { 
    $(".infobar-dropdown .navbar-nav > li.seven").hide().prependTo(".overflow").show().addClass("dropdown-submenu info-submenu");
       
   $('li.seven span.r-t').html('Files (4)');
   $("li.seven svg.flip").hide();  
    $('li.seven span.pull-right').show();
             
    }
    
                    if((parseInt($(".adjust-colum-right").width()) > 700)) 
                {
                    $('.overflow li.seven').hide().removeClass("dropdown-submenu info-submenu").insertBefore('#menu_ul li:last-child').not("ul.submenu li").show();
                    
                     $('li.seven span.r-t').html("4");
                     $("#menu_ul li svg.flip").show();                   
                     $('li.seven span.pull-right').hide();
                }
    //Infobar Enhancement ends
    if (parseInt($(".adjust-colum-right").width())<=420) {  

            $('.workarea-container').addClass('mobile-view'); 
            $('.workarea-container').removeClass('all'); 
            $('.workarea-container').removeClass('medium-view');

            $('.info-msg .popover.right').addClass('right-behave');
            $('.info-msg .popover.right').addClass('rt-arrow');

            $('.info-msg .popover.left').addClass('left-behave');
            $('.info-msg .popover.left').addClass('lt-arrow');

            if($('#info-message').attr('data-placement')==='left'){
              $('.info-msg .popover-content').addClass('responsive-pop');
            }
            
                 
            //$(".infobar-dropdown .navbar-nav > li.seven").hide().prependTo(".overflow").show();
            
        
            

            

        } 

       else if((parseInt($(".adjust-colum-right").width()) >= 421) &&  (parseInt($(".adjust-colum-right").width()) < 600))
        {
                 $('.workarea-container').addClass('medium-view'); 
                 $('.workarea-container').removeClass('mobile-view');  
                 $('.workarea-container').removeClass('all');
                 
                 
                 
                
        } 

        else { 
               $('.workarea-container').addClass('all'); 
               $('.workarea-container').removeClass('mobile-view'); 
              // $('.workarea-container').addClass('thisis420');
              $('.workarea-container').removeClass('medium-view');

              $('.info-msg .popover.right').removeClass('right-behave');
              $('.info-msg .popover.right').removeClass('rt-arrow');

              $('.info-msg .popover.left').removeClass('left-behave');
              $('.info-msg .popover.left').removeClass('lt-arrow'); 

              $('.info-msg .popover-content').removeClass('responsive-pop');            
               
              
              
            
             } 
    });
  });

  
  
$(document).ready(function(){
 var item_width = $('#menu_ul li').not('ul.submenu > li').width();
 var item_count = ($( "#menu_ul li" ).not('ul.submenu > li').length);
 var nav_width_og = $('.menu').width();
 var nav_width = $('.menu').width();
  
 if (item_count > 8){
     $('#more').appendTo('body');
  $('#more').hide();
}
  
 for(var i = 0; i < item_count; i++) {
  nav_width = $('.menu').width();
item_width = $('#menu_ul li').not('ul.submenu > li').width();
item_count = ($( "#menu_ul li" ).not('ul.submenu > li').length); 
   
 if (item_count > 8){
$('#menu_ul li').not('#more, ul.submenu > li').last().appendTo($('.overflow'));
  
  $('#more').appendTo($('#menu_ul'));
  $('#more').show();
}
 }

 
$(window).resize(function(){ 
  
nav_width = $('.menu').width();
item_width = $('#menu_ul li').not('ul.submenu > li').width();
item_count = ($( "#menu_ul li" ).not('ul.submenu > li').length);

if (item_count > 8){
$('#menu_ul li').not('#more, ul.submenu > li').last().appendTo($('.overflow'));
  
  $('#more').appendTo($('#menu_ul'));
  $('#more').show();
}
  
// if (nav_width>(item_width*item_count)+(item_width-1)){
//  $('.overflow li').not('ul.submenu > li').last().appendTo($('#menu_ul'));
  
//   $('#more').appendTo($('#menu_ul'));
// }
   
if (item_count > 8){
     $('#more').appendTo('body');
  $('#more').hide();
}
  
});
  
  $('#more').click(function(){  
   $('.overflow').slideToggle("fast"); 
  });
  });
 
 $('body').on("click", function(event){
        var $trigger = $("#more");
        if($trigger !== event.target && !$trigger.has(event.target).length){
            $(".overflow").slideUp("fast");
        }            
    });
  
  
  
//************************ responsive tabs in Global search *******************//

// it is for tabs responsive, in mobile screens add more and tabs will show like more dropdowns


/*

 //for global search more tab inside list
var autocollapse = function() {  


  var tabs11 = $('#tabsbox');

  var tabsHeight = tabs11.innerHeight();  
  if (tabsHeight >= 50) {
    while(tabsHeight > 50) {
      //console.log("new"+tabsHeight);      
      var children = tabs11.children('li:not(:last-child)');
      var count = children.size();
      //alert(count);

      $(children[count-1]).prependTo('#collapsed');      
      tabsHeight = tabs11.innerHeight();

    }

  }
  else {
    while(tabsHeight < 50 && (tabs11.children('li').size()>0)) {      
      var collapsed = $('#collapsed').children('li');
      console.log('ddd',collapsed,collapsed.size())
      var count = collapsed.size();
      //console.log('dddddddddd out',count)
      if(count === 0)
      {
       // console.log('dddddddddd',count)
        $("#lastTab").hide();
        break;
      }else{
        $("#lastTab").show();
     
      }

 
    $(collapsed[0]).insertBefore(tabs11.children('li:last-child'));
      tabsHeight = tabs11.innerHeight();

    }
    if (tabsHeight>50) { // double chk height again
      autocollapse();
    }
    

  }  
};


*/


/*---------custome aditing----*/
//for global search more tab inside list
var autocollapse = function() {  


  var tabs11 = $('#tabsbox');

  var tabsHeight = tabs11.innerHeight();  
  if (tabsHeight >= 50) {
    while(tabsHeight > 50) {
      //console.log("new"+tabsHeight);      
      var children = tabs11.children('li:not(:last-child)');
      var count = children.size();
      //alert(count);

      $(children[count-1]).prependTo('#collapsed');      
      tabsHeight = tabs11.innerHeight();

    }

  }
  else {
    while(tabsHeight < 50 && (tabs11.children('li').size()>0)) {      
      var collapsed = $('#collapsed').children('li');
      console.log('ddd',collapsed,collapsed.size())
      var count = collapsed.size();
      //console.log('dddddddddd out',count)
      if(count === 0)
      {
       // console.log('dddddddddd',count)
        $("#lastTab").hide();
      
        break;
      }else{
        $("#lastTab").show();
      $("#lastTab").find("li").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parents('#tabsbox').find('li').removeClass('active');
      });
      
      $('#tabsbox li:not(:last-child)').click(function(){
       $('.dropdown-menu').find('li').removeClass('active'); 
      });
     
      }

 
    $(collapsed[0]).insertBefore(tabs11.children('li:last-child'));
      tabsHeight = tabs11.innerHeight();

    }
    if (tabsHeight>50) { // double chk height again
      autocollapse();
    }
  }  
};

/*--------------End custome editing------*/
$(document).ready(function() {
    autocollapse(); // when document first loads

   $(".pretty-split-pane-frame, .adjust-colum-right").on('mouseout', autocollapse); // when window is resized
});


/*----------Confrm message popover----*/


$(document).ready(function () {
    var content = [
        '<div class="popover-content">',
        'This action cannot be undone Are you sure you want to continue? ',
        '<ul class="pop-menus">',
        '<li><a href="" title="cancel">Cancel</a></li>',
        '<li><a href="" title="continue">Continue <i class="fa fa-chevron-right"></i></a></li>',
        '</ul>',
        '</div>'
        ].join('');
 
 $('#info-message').popover({

        content: content,
        html: true   
 });

});



// global search input purpose used this


$(document).ready(function(){
 $('.search-clear').hide();

 $('.search-icon').on('click',function()
{
     // $('.search-box2').show(500);
     //  $('.search-box2').css.width(500);
       $('.search-box-global').addClass('clickclass');
       $('.global-search-area .search-icon').addClass('expandmode');
         $('.search-clear').show();
});

});

// below script is for global search expand and collapse 

     $("#exp-colsp").click(function(){
       
       $("#collapse-card").toggleClass("active ");  
       $(this).find('i').toggleClass('fa fa-expand fa fa-compress');
       
     });

$('.dynamic-overlay-slider-smoothscroller').scroll(function(){
  
    if($(this).scrollTop() > 53){
       
      $('.search-exand-view-mode .nextpre').addClass('fixings1');

    }
    else{
      $('.search-exand-view-mode .nextpre').removeClass('fixings1');
    }
  });





$('.search-exand-view-mode').hide();

$(document).ready(function(){
$('a#expands').click(function(){
  $('.search-exand-view-mode').show();
  $('#search-list').hide();
});
  $('a#exp-colsp').click(function(){
  $('.search-exand-view-mode').hide();
  $('#search-list').show();
  });
});

/*----------Expand table--------*/
$(document).ready(function(){
$(".task-dependency-table tbody tr").hide().slice(0, 4).show();
$(".show-all-rows").click(function() {
    $(".task-dependency-table tbody tr", $(this).prev()).show();
});
});


/*----add members----*/
$(document).ready(function(){

  $('#add-user-icon,.other-followers h4').click(function(){
    $('.universal-search').show();
  });
});


/*----user carousel----*/

$('#user-helper-carousel').carousel({
  interval:false
});

$('#user-helper-carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
});

var checkitem = function() {
  var $this;
  $this = $("#user-helper-carousel");
  if ($("#user-helper-carousel .carousel-inner .item:first").hasClass("active")) {
    $this.children("a.left").css({"cursor":"text"}).find('g.left-a').attr("fill","#E4E4E6");
    $this.children("a.right").css("cursor","pointer").find('g.right-a').attr("fill","#9A9A9A");


  } else if ($("#user-helper-carousel .carousel-inner .item:last").hasClass("active")) {
    $this.children("a.right").css({"cursor":"text"}).find('g.right-a').attr("fill","#E4E4E6");
    $this.children("a.left").css("cursor","pointer").find('g.left-a').attr("fill","#9A9A9A");

  } 

  else if ($("#user-helper-carousel .carousel-inner .item").not(':first').not(':last').hasClass("active")) {
    $this.children("a.right").css("cursor","pointer").find('g.right-a').attr("fill","#9A9A9A");
    $this.children("a.left").css("cursor","pointer").find('g.left-a').attr("fill","#9A9A9A");

  } 

  else {
    $this.children(".carousel-control").show();
  }
};

checkitem();

$("#user-helper-carousel").on("slid.bs.carousel", "", checkitem);

/*--end user carousel---*/


/*----hide add comment anchor link---*/
$(document).ready(function(){
  $('a.cm-anchor').click(function(){
    $(this).hide();
    $('.conv-box .add-comments').addClass('top-border-g');
  });
});
 











//autocollapse

//  var autocollapse = function (tab) {
    
//     var tabs = $(tab);
//     var tabsHeight = tabs.innerHeight();
     
//    if (tabsHeight >= 50) {
//         $(tab + ' .lastTab').removeClass('hide');

//         while (tabsHeight > 50) {

//             var children = tabs.children(tab + ' li:not(:last-child)');
//             var count = children.size();
//             $(children[count - 1]).prependTo(tab + ' .collapsed');

//             tabsHeight = tabs.innerHeight();
//         }
//     }
//     else {
//         var collapsed = $(tab + ' .collapsed').children(tab + ' li');
//         while (tabsHeight < 50 && (tabs.children(tab + ' li').size() > 0) && collapsed.size() > 0) {
      
      
//    //$("#mytaskres1").find("li").click(function(){
// //       $(this).addClass('active').siblings().removeClass('active');
// //       $(this).parents('#mytaskres1').find('li').removeClass('active');
// //     });
// //     
// //     $('#mytaskres1 li:not(:last-child)').click(function(){
// //      $('.dropdown-menu').find('li').removeClass('active'); 
// //     });
      
      
//             var collapsed = $(tab + ' .collapsed').children('li');
//             var count = collapsed.size();
//      $(tab + ' .lastTab').addClass('hide');
//      console.log(count);
//             $(collapsed[0]).insertBefore(tabs.children(tab + ' li:last-child'));
//             tabsHeight = tabs.innerHeight();
//         }

//         if (tabsHeight > 50) { 
//             autocollapse(tab);
//         }
//     }

// };

 
// $(".pretty-split-pane-frame, .adjust-colum-right").mousemove(function(){
  
//     autocollapse('#project-details-inner-tabs'); 
//     autocollapse('#project-details-newone'); 
//  //autocollapse('#project-details-newtab'); 
//  autocollapse('#mytaskres');
//  autocollapse('#mytaskres1');
//  autocollapse('#mytaskres12');
    
  

//  $(document).ready(function(){
   
//     autocollapse('#project-details-inner-tabs'); 
//     autocollapse('#project-details-newone'); 
//  //autocollapse('#project-details-newtab');
//  autocollapse('#mytaskres');
//   autocollapse('#mytaskres1');
//    autocollapse('#mytaskres12');
   
   
 
// });

// });







/*---MasP Channel Animation---*/
$('.Masp-Channel').hide();
$('.users-list-innerdiv').click(function(){
  $('.Masp-Channel').show('slide', {direction: 'right'}, 300);
});

$('.hide-masp-channel').click(function(){
  $('.Masp-Channel').hide('slide', {direction: 'right'}, 300);
});

/*--masp channel animation with opacity--*/
$('.hide-masp-channel-opc').click(function(){
  $('.Masp-Channel').fadeOut(600);
});

$(document).ready(function(){
$(".ticket-table tbody tr").hide().slice(0, 6).show();
$(".show-all-rows").click(function() {
    $(".ticket-table tbody tr").show();
});
});

 
/*---widget smooth scroll---*/


$(document).ready(function(){   
  $(".overflow li a").on('click', function(event) {

    $('#state-of-conver').addClass('bg-cream');
      setTimeout(function () {
      $('#state-of-conver').removeClass('bg-cream');
    }, 2000);

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('.dynamic-content-2 .all-scrollbar').animate({
        scrollTop: $(hash).offset().top-100}, 500, function(){
        window.location.hash = hash;
      });
    } 
  });
});










/*-- dropdown for queue in conversation --*/

  $('.conv-link').click(function(){  
   $('.queue-type-dropdown ').slideToggle("fast"); 

  });
 $('body').on("click", function(event){
        var $triggerclose = $(".chan");
        if($triggerclose !== event.target && !$triggerclose.has(event.target).length){
            $(".queue-type-dropdown").slideUp("fast");
        }            
    });



// dropdown down onhover for major incidents to show details of progress
 (function($){
        $('.progress-icons .dropdown').hover(
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideDown("fast");
            $(this).toggleClass('open');
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideUp("fast");
            $(this).toggleClass('open');
        }
    );
    })(jQuery);

$('.progress-icons').hover(function(e) {

  var $ul = $(this);
    var $button = $(this);
    var ulOffset = $ul.offset();
    // how much space would be left on the top if the dropdown opened that direction
    var spaceUp = (ulOffset.top - $button.height() - $ul.height()) - $(window).scrollTop();
    // how much space is left at the bottom
    var spaceDown = $(window).scrollTop() + $(window).height() - (ulOffset.top + $ul.height());
    // switch to dropup only if there is no space at the bottom AND there is space at the top, or there isn't either but it would be still better fit
    console.log(spaceUp,spaceDown,'space')
  console.log(spaceUp+' - '+spaceDown);
    if (spaceUp < spaceDown) { console.log(1);
    $(this).closest('div').find('.dropdown-menu').removeClass('top-menu');
  } else { console.log(2);
    $(this).closest('div').find('.dropdown-menu').addClass('top-menu');
  }



 });

/*---add scrollbar on focus----*/
$(document).ready(function(){
  $('#click-scrl textarea').focus(function(){
    $(this).addClass('all-scrollbar');
  });
});


/*----form elements effect---*/
$('.go-form-group input, .go-form-group textarea').on('focus blur', function (e) {
      $(this).parents('.go-form-group').toggleClass('active', (e.type === 'focus' || this.value.length > 0));
    }).trigger('blur');



$('.conv-sort').click(function () {
  $(this).next('ul.sorting-conv').slideToggle("fast");
  $(this).toggleClass("active");

});

$('body').on("click", function (event) {
  var $triggerclose = $(".sorting-conversation");
  if ($triggerclose !== event.target && !$triggerclose.has(event.target).length) {
    $(".sorting-conv").slideUp("fast");
    $(".conv-sort").removeClass("active");
  }
});

/*--Filters---*/

 $(".show-more-content").click(function(e) {
    $(".conv-filter-main").stop().slideToggle("slow", complete);
    e.stopPropagation();
    function complete(){

      $("body").click(function(e) {
      var $triggerclose = $(".conv-filter-main");
      if ($triggerclose !== event.target && !$triggerclose.has(event.target).length) {
      $(".conv-filter-main").slideUp("fast");
      }
      });
    }
    $('ul.sorting-conv').slideUp("fast");
  });

 
 


/*--magnifier search--*/

var removeClass = true;
$(".magnifier-src").click(function () {
    $(".search-gl").toggleClass('width-200').focus();
    $("svg.searc-cls").css("display","block");
    removeClass = false;
});

$("html").click(function () {
    if (removeClass) {
        $(".search-gl").removeClass('width-200');
        $("svg.searc-cls").css("display","none");
    }
    removeClass = true;
});