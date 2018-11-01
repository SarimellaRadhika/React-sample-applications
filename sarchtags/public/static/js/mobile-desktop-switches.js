// JavaScript Document


 /* swithing to mobile and desktop and based screen / in desktop resolution chat - dynamic content transitions   */
  
function mobileDesktopSwitches(){
    $(".open-dynamic-data").click(function(){
        $(".chatbox").addClass("in-active-chat");
  $(".chatbox").removeClass("active-chat");
 
  $(".dynamicbox").addClass("active-dynamic-data");
  $(".dynamicbox").removeClass("in-active-dynamic-data");
    });
 
 $(".open-chat").click(function(){
        $(".chatbox").removeClass("in-active-chat");
  $(".chatbox").addClass("active-chat");
  $(".dynamicbox").removeClass("active-dynamic-data");
  $(".dynamicbox").addClass("in-active-dynamic-data");
    });
}
 
 
 // sortable items inside code / sortable sub menus
 $(document).ready(function(){
    $(".dragabble-item").click(function(){
        $(this).addClass("open");
		 
    });
	
	 
});
 
 


 
 
  /* search box open in mobile view */
$(document).ready(function(){
    $(".fa-search").click(function(){
        $(".navbar-form").addClass("open");
	
    });
	
	$(".main").click(function(){
       $(".navbar-form").removeClass("open");
	 
    });
});
 
 