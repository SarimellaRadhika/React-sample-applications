$(document).ready(function(){
	$('body').on('click', '#permissionSetsList', function(){
		$.ajax({
			type: "GET",
			url: "/RBAC/getPermissionSetList",
			success: function(data){
				$('#dynamicTableData').html(data.result);
				$('#example').DataTable();
			},
		});
    });
});