$(document).ready(function() {
    $("#swapLight").click(function() {
        
        $('.area').find('.key').addClass('keyAltStyle');

    })
    $("#swapDark").click(function() {
        
        $('.area').find('.key').removeClass('keyAltStyle');

    })
});