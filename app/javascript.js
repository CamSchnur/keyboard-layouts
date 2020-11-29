$(document).ready(function() {
    addLayout('100');

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
    $("#layout65").click(function() {
        
        addLayout('65');
    })
    function addLayout(layout)
    {
        removeAllLayouts();
        $('.keyboard').addClass('keyboard' + layout);
        
        
        //deal with the tenkey/numpad
        if(layout == '100')
        {
            //this model has a tenkey
            setVisibleByClass('tenKeyArea', true);
        }
        else
        {
            //all other models do not
            setVisibleByClass('tenKeyArea', false);
        }

        //deal with the function row
        switch(layout)
        {
            case 'TKL':
            case '100':
                //these models have a regular function row 
                setVisibleByClass('functionKeyArea', true);
                setVisibleByClass('functionNavArea', true);
                setVisibleByClass('mediaArea', true);
                break;          
            case '75':
                //this model has a weird function row
                //todo
                break;
            default:
                //these models do not have a function row:
                setVisibleByClass('functionKeyArea', false);
                setVisibleByClass('functionNavArea', false);
                setVisibleByClass('mediaArea', false);
                break;     
        }

        //deal with the nav area
        switch(layout)
        {
            case 'TKL':
            case '100':
                //these models have a regular nav area 
                setVisibleByClass('upperNavArea', true);
                setVisibleByClass('midNavArea', true);
                setVisibleByClass('lowerNavArea', true);
                break;          
            case '75':
            case '68':
            case '65':
                //these models have a weird nav area:
                break;
            default:
                //these models do not have a nav area:
                setVisibleByClass('upperNavArea', false);
                setVisibleByClass('midNavArea', false);
                setVisibleByClass('lowerNavArea', false);

                break;     
        }

        //deal with the main area
        switch(layout)
        {
            case 'TKL':
            case '100':
                //these models have a regular main area 
                $('.mainArea').addClass('mainArea100');
                break;          
            case '75':
                //function area is compacted
                $('.mainArea').addClass('mainArea75');
                break;
            case '68':
            case '65':
            case '60':
                //function area is gone
                $('.mainArea').addClass('mainAreaCompact');
                break;
            default:
                $('.mainArea').addClass('mainArea40');
                break;     
        }
        setVisibleByID('moreInfo' + layout, true);
    }
    function removeLayout(layout)
    {
        $('.keyboard').removeClass('keyboard' + layout);
        $('.mainArea').removeClass('mainArea' + layout);
        setVisibleByID('moreInfo' + layout, false);
        
    }
    function removeAllLayouts()
    {
        removeLayout('100');
        removeLayout('TKL');
        removeLayout('75');
        removeLayout('68');
        removeLayout('65');
        removeLayout('60');
        removeLayout('40');
        removeLayout('Compact');
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
    function setVisibleByID(elementID, visible)
    {
        setVisible('#' + elementID, visible);
    }
    function setVisibleByClass(elementName, visible)
    {
        setVisible('.' + elementName, visible);
    }
});