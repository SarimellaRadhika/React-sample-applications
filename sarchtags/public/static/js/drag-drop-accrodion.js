
// drag and drop for my tasks page

$(function(){
  $("#one").collapse().sortable({
       connectWith: "#drop-one"
	  
 
   }); 
});

$(function(){
  $("#two").collapse().sortable({
       connectWith: "#drop-two",
	    connectWith: "#drop-one"
	  
 
   }); 
});
 
 

/*$(function(){  
   $( "#two" ).sortable({
            connectWith: "#one",
	        connectWith: "#two",			
			connectWith: "#three"
   }); 
});


$(function(){  
   $( "#three" ).sortable({
       connectWith: "#one",
	        connectWith: "#two",
			connectWith: "#three"
   }); 
});*/



// bootstrap accrodion for dragand drop assessments

$(function(){
  $( "#assessment-1" ).collapse().sortable({
       connectWith: "#drop-assessment-1"
   }); 
  
   $( "#drop-assessment-1" ).sortable({
       connectWith: "#assessment-1"
   }); 
});


$(function(){
  $( "#assessment-2" ).collapse().sortable({
       connectWith: "#drop-assessment-2"
   }); 
  
   $( "#drop-assessment-2" ).sortable({
       connectWith: "#assessment-2"
   }); 
});



$(function(){
  $( "#assessment-3" ).collapse().sortable({
       connectWith: "#drop-assessment-3"
   }); 
  
   $( "#drop-assessment-3" ).sortable({
       connectWith: "#assessment-3"
   }); 
});



$(function(){
  $( "#assessment-4" ).collapse().sortable({
       connectWith: "#drop-assessment-4"
   }); 
  
   $( "#drop-assessment-4" ).sortable({
       connectWith: "#assessment-4"
   }); 
});



 
 
 
 
// bottom to top effect for div 
$(document).ready(function(){
    $(".assessment-editor-close .iconm").click(function(){
        $("#assessment-editor").toggleClass("open");
        setTimeout(function(){
            $('.assessment-editor-close').toggleClass('active');
        }, 1000);
        return false;
    });
});
 
 