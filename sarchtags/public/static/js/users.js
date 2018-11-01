$('body').on('click', '#IdUsers', function(){
    $.ajax({
        type: 'GET',
        url: "/users/",
        dataType:"json",
        success : function(response){

//            $("#example").remove();
//            $("#example").DataTable({
//                "columns": [
//                { "data": "engine" },
//                { "data": "browser" },
//                { "data": "platform" },
//                { "data": "version" },
//                { "data": "grade" }
//              ]
//            });
        },error:function(error){
            console.log('error:', error);
        }
    });
});
