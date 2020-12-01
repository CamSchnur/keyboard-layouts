$(document).ready(function() {
    addLayout('100');
    setStyle('dark');
    $("#swapLight").click(function() 
    {
        setStyle('light');
    })
    $("#swapDark").click(function() 
    {
        setStyle('dark');
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
                setVisibleByClass('upperNavArea', true);
                setVisibleByClass('midNavArea', false);
                setVisibleByClass('lowerNavArea', true);
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
                //no room for arrow keys (they are over in standard nav area)
                setLayoutByClass('mainBottomRow', '100');
                setLayoutByClass('mainLowerAlphas', '100');
                //regular number row
                setLayoutByClass('mainArea', '100');
                break;
            case '75':
            case '65':
                //arrow keys are integrated    /* shortened right shift key, and tighter bottom row, to allow arrow keys to nestle in  */
                setLayoutByClass('mainBottomRow', 'Compact');
                setLayoutByClass('mainLowerAlphas', 'Compact');
                //regular number row
                setLayoutByClass('mainArea', '100');
                break;
            case '68':
                //arrow keys are partially integrated     /* shortened right shift key, and tighter bottom row, to allow arrow keys to nestle in  */
                setLayoutByClass('mainBottomRow', '68');
                setLayoutByClass('mainLowerAlphas', '68');
                //regular number row
                setLayoutByClass('mainArea', '100');
                break;
            case '60':
                //no room for arrow keys
                setLayoutByClass('mainBottomRow', '100');
                setLayoutByClass('mainLowerAlphas', '100');
                //regular number row
                setLayoutByClass('mainArea', '100');
                break;
            case '40':
                //no room for arrow keys
                setLayoutByClass('mainBottomRow', '100');
                setLayoutByClass('mainLowerAlphas', '100');
                //no number row
                setLayoutByClass('mainArea', '40');
                break;
            default:
                break;     
        }
        setVisibleByID('moreInfo' + layout, true);
    }
    function setLayoutByClass(className, layout)
    {
        $('.' + className).addClass(className + layout);
    }
    function removeLayout(layout)
    {
        $('.keyboard').removeClass('keyboard' + layout);
        $('.mainArea').removeClass('mainArea' + layout);
        $('.mainBottomRow').removeClass('mainBottomRow' + layout);
        $('.mainLowerAlphas').removeClass('mainLowerAlphas' + layout);
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
    function setStyle(mode)
    {
        if(mode == 'dark')
        {
            $('.area').find('.key').removeClass('keyAltStyle');
            $('.area').find('.keyAlpha').removeClass('keyAlphaAltStyle');
            $('.area').find('.keyModifier').removeClass('keyModifierAltStyle');
            $('.area').find('.keyAlpha').addClass('keyAlphaMainStyle');
            $('.area').find('.keyModifier').addClass('keyModifierMainStyle');
            $('.keyboard').removeClass('keyboardLight');
            $('.keyboard').addClass('keyboardDark');
        }
        else if(mode == 'light')
        {
            $('.area').find('.key').addClass('keyAltStyle');
            $('.area').find('.keyAlpha').addClass('keyAlphaAltStyle');
            $('.area').find('.keyModifier').addClass('keyModifierAltStyle');
            $('.area').find('.keyAlpha').removeClass('keyAlphaMainStyle');
            $('.area').find('.keyModifier').removeClass('keyModifierMainStyle');
            $('.keyboard').removeClass('keyboardDark');
            $('.keyboard').addClass('keyboardLight');
        }
    }
});