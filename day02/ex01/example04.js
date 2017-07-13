

$(document).ready(function(){
    alert("jQuery dom ready");
    $('#divAction').click(function(){
        // $(this).addClass('color_blue');
        // $(this).removeClass('color_blue');
        $(this).toggleClass('color_blue');
    });
    
    $('.divClass').click(function(){
    
    });
});