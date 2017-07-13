
$(document).ready(function(){

    $('#commentForm').submit(function(event){
        event.preventDefault();
        var commentVal = $('#commentForm input[name=comment]').val();
        $('#commentArea').append('<li>' + commentVal + '</li>');
        $('#commentForm input[name=comment]').val('');
        return false;
    });
    
});