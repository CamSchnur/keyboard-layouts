$(document).ready(function() {
    addLayout(100);


    $("#swapLight").click(function() {
        
        $('.area').find('.key').addClass('keyAltStyle');

    })
    $("#swapDark").click(function() {
        
        $('.area').find('.key').removeClass('keyAltStyle');

    })
    $("#layout100").click(function() 
    {        
        addLayout('100');
    })
    $("#layoutTKL").click(function() {
        
        addLayout('TKL');
    })
    $("#layout60").click(function() {
        
        addLayout('60');
    })
    function addLayout(layout)
    {
        removeAllLayouts();
        $('.keyboard').addClass('keyboard' + layout);
        
        //deal with the tenkey/numpad
        if(layout == '100')
        {
            //this model has a tenkey
            setVisible('.tenKeyArea', true);
        }
        else
        {
            //all other models do not
            setVisible('.tenKeyArea', false);
        }

        //deal with the function row
        if(layout == '75' || layout == 'TKL' || layout == '100')
        {
            //these models have a function row 
            setVisible('.functionKeyArea', true);
        }
        else
        {
            setVisible('.functionKeyArea', false);
        }
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
    function setVisible(elementName, visible)
    {
        if(visible)
        {
            $(elementName).removeClass('hiddenElement');
            $(elementName).addClass('visibleElement');
        }
        else
        {
            $(elementName).removeClass('visibleElement');
            $(elementName).addClass('hiddenElement');
        }
    }
});