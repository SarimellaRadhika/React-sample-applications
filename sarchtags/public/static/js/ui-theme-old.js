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

});
$(".threadinside-window-close").click(function() {
    $(".threadinside-window").hide("slow");

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
$(".dynamic-overlay-slider").slideUp("1000");
$(".dynamic-overlay-slider").show();


$(".dynamic-content-2").addClass("top0px");
	//$("#dynamicarea-title").hide(1000);
});


 
$(".adjustdynamic-content-2").click(function() { 
	//$(".dynamicbox.top5px").removeClass("top5px");
		$("#dynamicarea-title").show(100);
 
  $(".dynamic-overlay-slider").slideDown("1000");
     $(".dynamic-overlay-slider").hide();


		$(".dynamic-content-2.top0px").removeClass("top0px");
});


$(".dynamic-overlay-slider-2").hide();
//$(".dynamic-content-2.top0px").hide();
//$(".dynamicbox.top5px").removeClass("top5px");
$(".dynamic-overlay-slider-open-2").click(function() {
		$(".dynamic-content-2").addClass("top0px");
 
 $(".dynamic-overlay-slider-2").slideToggle("slow"); 
 //$(".dynamic-overlay-slider-2").show(200);
 //$("#dynamicarea-title").slideToggle("slow");
  $(".dynamic-overlay-slider").hide("400"); 
  $(".dynamic-content-2").toggleClass("box0px");
	$("#dynamicarea-title").slideToggle(100);
	$(".chat-settings-dropdown").hide(200);
	 
});

$(".dynamic-overlay-slider-open-2").click(function() { 
	//$(".dynamicbox.top5px").removeClass("top5px");
		 $(".theme-main-section-heading").show(100);
		  //$("#dynamicarea-title").slideToggle("slow");
		$(".dynamic-content-2.top0px").removeClass("top0px");
	 
		   
 
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
