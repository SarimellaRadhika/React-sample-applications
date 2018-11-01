// JavaScript Document


// for mytask list drag and drop code 
$( function() {
$(".drag-drop-datacollection li").click(function() {
    $(this).toggleClass("selected");
});

$(".drag-drop-datacollection li.selected").click(function() {
    $(this).removeClass("selected");
});
 
/*$("body").click(function() {
    $(".drag-drop-datacollection li.selected").removeClass("selected");
});
*/


 
$("#drag-drop1, #drag-drop2, #drag-drop3, #drag-drop4, #drag-drop5").sortable({
    connectWith: "#drag-drop1, #drag-drop2, #drag-drop3, #drag-drop4, #drag-drop5",
    start: function(e, info) {
        info.item.siblings(".selected").appendTo(info.item);
    },
    stop: function(e, info) {
        info.item.after(info.item.find("li"))
    }
	
})
});


$( function() {
    $( "#sortable1, #sortable2, #sortable3, #sortable4" ).sortable({
      connectWith: ".connectedSortable",
	   disconnectWith: "h3"
    }).disableSelection();
  } );
// above code is mytask list drag and drop


/*$( function() {
	
    $( "#drag-drop1, #drag-drop2, #drag-drop3, #drag-drop4, #drag-drop5 " ).sortable({
      connectWith: ".connectedSortable",
	   disconnectWith: "h3"
    }).disableSelection();
  } );*/
// above code is mytask list drag and drop







//this is for uploaded files delete code(means file name last x icon purpose)
    $(document).ready(function(){
    $(".uploadedfiles-list span").click(function(){
    $(this).parent().remove();
   });

})



//dropdownmenu with searchbox  & filters
/*$(document).ready(function () {
    var mySelect = $('#first-disabled2');

    $('#special').on('click', function () {
      mySelect.find('option:selected').prop('disabled', true);
      mySelect.selectpicker('refresh');
    });

    $('#special2').on('click', function () {
      mySelect.find('option:disabled').prop('disabled', false);
      mySelect.selectpicker('refresh');
    });

    $('#basic2').selectpicker({
      liveSearch: true,
      maxOptions: 1
    });
  });*/
  
  
  
  
  
  




 /* This is for leftside nav inside dropdown section*/
   $(function(){
  $(".dropdown-menu li a").click(function(){
  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
});
  }) 
  
  
  
  $(".breadcrumbnew .dropdown-menu li a").click(function(){
  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
});
  
  
 
    $(document).ready(function () {
        $(".breadcrumbnew ul li.dropdown ul.dropdown-menu li").click(function (event) {
            event.toElement.parentElement.click();
        })
    })
 
    $(document).ready(function () {
			$(".new-breadcrumb li.dropdown  a").click(function(){
			$(".dropdown a").addClass('downdropdownarrow');  
     });
 
 
 	$(".new-breadcrumb li.dropdown  ").click(function(){
			$(".dropdown a").addClass('downdropdownarrow');  
     });
})  
  
  
  // click on dropdown item value will insert in searchbox
$('.listofcustomers li a').click(function() {
  var value = $(this).text();
  var input = $('#searchlist');
  var ddlist = $('#dropdownMenuLink');
  input.val(value);
  ddlist.text(value);
  return false;
});
  
  
  
  
/*below code for form wizard accrodian in datacollection */
//<![CDATA[
/*  $(function(){
$('#form-wizard-data-collection')
 .accordion({active: 0}); 
$('a.withinTab').click(function() {
    var dest = $($(this).attr('href')); // Link target
    var tab = dest.closest('.ui-accordion-content').prev('.ui-accordion-header'); // Its tab
    $('#form-wizard-data-collection').accordion('option',
        {active: tab.parent().children('.ui-accordion-header').index(tab)});
});
}) */

//]]> 



/*
$(function() {
    $( "#form-wizard-data-collection" ).accordion({
        active: 0,
		
        collapsible: true,
        heightStyle: "ui-state-active",
        navigation: true,
        header: ".ui-accordion-header"
     });
})*/
	 
	 
/* above closed data collection code  */
/*   active: false,
        collapsible: true,
        heightStyle: "content",
        navigation: true,*/
 

$(function() {

    $(document).on('show','.accordion', function (e) {
         //$('.accordion-heading i').toggleClass(' ');
         $(e.target).prev('.accordion-heading').addClass('accordion-opened');
    });
    
    $(document).on('hide','.accordion', function (e) {
        $(this).find('.accordion-heading').not($(e.target)).removeClass('accordion-opened');
        //$('.accordion-heading i').toggleClass('fa-chevron-right fa-chevron-down');
    });

})



/* this code for projects / assesements sections drag and drop, movable items*/
 
  
  
  /* see more... & see less */
  $(document).ready(function(){
 $(".morecontent").hide();
    $("#seemore").click(function(){
        $(".morecontent").show(100);
          $("#seemore").hide();

   });

 
    $("#seeless").click(function(){
     $(".morecontent").hide(100);       
	 $("#seemore").show();

   });
  })
  



/* it is for assessment and related popup edit */
  $(document).ready(function(){ 
    $(".assessmenteditsection-add").click(function(){
     $(".assessmenteditsection").addClass('open');      
    });
	 $(".assessmenteditsection-remove").click(function(){
 $(".assessmenteditsection").removeClass('open');   
	    });  
 
 
/* $(document).ready(function(){ 
    $("#assessmenteditsection-one-editlink").click(function(){
     $("#assessmenteditsection-one-editbox").addClass('open');      
    });
	 $("#assessmenteditsection-one-editboxclose").click(function(){
 $("#assessmenteditsection-one-editbox").removeClass('open');   
	    });  */
 
 
		
 
   $(document).ready(function(){ 
    $(".panel-heading").click(function(){
		$(".panel-heading.active").removeClass("active");
     $(this).addClass("active");
	  });
  });
  
  
  
  /* default on page load add class to page-container in mobile close left nav- in desktop open that left nav onload */
  $(function(){ 
  
  if ( $(window).width() > 1024) { 
        $('.page-container').addClass('pin-it');  
        } else {  
       $('.page-container').addClass('iconic-view'); 
    } 
    });
}); 



//below function for add diabled class for chat-send icon
 

// for dropdown 
	 $('ul.dropdown-menu.mega-dropdown-menu').on('click', function(event){
			// onclick list item dont close dropdown menus
			event.stopPropagation();
		});
 
 