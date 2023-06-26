

$('#link').on('keyup blur', function(event) {
    // console.log("Val: " + $('#link').val());

    if($('#link').val()!=""){
        console.log("Empty");
        $('#labelE').hide();    
    }else{
        $('#labelE').show();  
    }
});