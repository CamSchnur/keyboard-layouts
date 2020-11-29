$(document).ready(function() {
    applyLayout(100);


    $("#swapLight").click(function() {
        
        $('.area').find('.key').addClass('keyAltStyle');

    })
    $("#swapDark").click(function() {
        
        $('.area').find('.key').removeClass('keyAltStyle');

    })
    $("#layout100").click(function() {
        removeAllLayouts();
        addLayout(100);
       // $('.keyboard').addClass('keyboard100');
       // $('.keyboard').find('.tenKeyArea').removeClass('hiddenElement');
        //$('.keyboard').find('.tenKeyArea').addClass('visibleElement');

    })
    $("#layoutTKL").click(function() {
        removeAllLayouts();
        addLayout('TKL');
       // $('.keyboard').addClass('keyboardTKL');
       // $('.tenKeyArea').removeClass('visibleElement');
       // $('.tenKeyArea').addClass('hiddenElement');
    })
    function applyLayout(layout)
    {
        $('.keyboard').addClass('keyboard' + layout);
    }
    function removeLayout(layout)
    {
        $('.keyboard').removeClass('keyboard' + layout);
    }
    function removeAllLayouts()
    {
        removeLayout('100');
        removeLayout('TKL');
    }
    
});