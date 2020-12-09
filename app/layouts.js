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
    setFunctionRow(layout);

    //deal with the nav area
    setNavArea(layout);

    //deal with the main area
    setMainArea(layout);
    
    //show the "more info" box at the bottom
    setVisibleByID('moreInfo' + layout, true);
}

function removeLayout(layout)
{
    removeLayoutByClass('keyboard', layout);
    removeLayoutByClass('mainArea', layout);
    removeLayoutByClass('mainBottomRow', layout);
    removeLayoutByClass('mainLowerAlphas', layout);
    removeLayoutByClass('functionKeyArea', layout);
    removeLayoutByClass('functionNavArea', layout);
    setVisibleByID('moreInfo' + layout, false);
    setVisibleByID('keyRightWin', false);
    setVisibleByID('keyInsert', false);
    setVisibleByID('keyEnd', false);
    setVisibleByID('keyScrollLock', false);
    removeLayoutById('keyInsert', layout);
    removeLayoutById('keyHome', layout);
    removeLayoutById('keyDelete', layout);
    removeLayoutById('keyEnd', layout);
    removeLayoutById('keyPageUp', layout);
    removeLayoutById('keyPageDown', layout);
    removeLayoutByClass('keyRightWin', layout);
    removeLayoutByClass('keyRightFn', layout);
    removeLayoutByClass('keyRightCtrl', layout);
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

function setNavArea(layout)
{
    switch(layout)
    {
        case 'TKL':
        case '100':
            //these models have a regular nav area 
            setVisibleByClass('upperNavArea', true);
            setVisibleByClass('lowerNavArea', true);
            setUpperNavArea('100');
            break;          
        case '75':
            //this model have a weird nav area:
            setVisibleByClass('upperNavArea', true);
            setVisibleByClass('lowerNavArea', true);
            setUpperNavArea('75');
            break;
        case '68':
        case '65':
            //these models have a weird nav area:
            setVisibleByClass('upperNavArea', true);
            setVisibleByClass('lowerNavArea', true);
            setUpperNavArea('Compact');
            break;
        default:
            //these models do not have a nav area:
            setVisibleByClass('upperNavArea', false);
            setVisibleByClass('lowerNavArea', false);
            setUpperNavArea('Compact');
            break;     
    }
}

function setUpperNavArea(layout)
{
    if(layout == '75')
    {
        //upper nav area is "Compact" with a few exceptions
        setLayoutById('keyInsert', 'Compact');
        setLayoutById('keyHome', 'Compact');
        setLayoutById('keyDelete', '75');
        setLayoutById('keyEnd', '75');
        setLayoutById('keyPageUp', 'Compact');
        setLayoutById('keyPageDown', 'Compact');
    }
    else
    {
        //likely either "Compact" or "100"
        setLayoutById('keyInsert', layout);
        setLayoutById('keyHome', layout);
        setLayoutById('keyDelete', layout);
        setLayoutById('keyEnd', layout);
        setLayoutById('keyPageUp', layout);
        setLayoutById('keyPageDown', layout);
    }
    switch(layout)
    {
        case 'Compact':
            setVisibleByID('keyInsert', false);
            setVisibleByID('keyEnd', false);
            break;
        case '75':
            setVisibleByID('keyInsert', false);
            setVisibleByID('keyEnd', true);
            break;
        default:
            setVisibleByID('keyInsert', true);
            setVisibleByID('keyEnd', true);
            break;
    }
}

function setFunctionRow(layout)
{
    switch(layout)
    {
        case 'TKL':
        case '100':
            //these models have a regular function row 
            setLayoutByClass('functionKeyArea', '100');
            setVisibleByClass('functionKeyArea', true);
            setVisibleByClass('functionNavArea', true);
            setVisibleByID('keyScrollLock', true);
            setLayoutByClass('functionNavArea', '100');
            setVisibleByClass('mediaArea', true);
            break;          
        case '75':
            //this model has a weird function row (it's directly above the number row, instead of above a gap)
            setLayoutByClass('functionKeyArea', 'Compact');
            setVisibleByClass('functionKeyArea', true);
            setVisibleByClass('functionNavArea', true);
            setVisibleByID('keyScrollLock', false);
            setLayoutByClass('functionNavArea', 'Compact');
            setVisibleByClass('mediaArea', true);
            break;
        default:
            //these models do not have a function row:
            setLayoutByClass('functionKeyArea', 'Compact');
            setVisibleByClass('functionKeyArea', false);
            setVisibleByClass('functionNavArea', false);
            setVisibleByID('keyScrollLock', false);
            setLayoutByClass('functionNavArea', '100');
            setVisibleByClass('mediaArea', false);
            break;     
    }
}

function setMainArea(layout)
{
    switch(layout)
    {
        case 'TKL':
        case '100':    
            //no room for arrow keys (they are over in standard nav area)
            setLayoutByClass('mainBottomRow', '100');
            setLayoutByClass('mainLowerAlphas', '100');
            setVisibleByID('keyRightWin', true);
            //regular number row
            setLayoutByClass('mainArea', '100');
            break;
        case '75':
        case '65':
            //arrow keys are integrated    /* shortened right shift key, and tighter bottom row, to allow arrow keys to nestle in  */
            setLayoutByClass('mainBottomRow', 'Compact');
            setLayoutByClass('mainLowerAlphas', 'Compact');
            setVisibleByID('keyRightWin', false);
            //regular number row
            setLayoutByClass('mainArea', '100');
            break;
        case '68':
            //arrow keys are partially integrated     /* shortened right shift key, and tighter bottom row, to allow arrow keys to nestle in  */
            setLayoutByClass('mainBottomRow', '68');
            setLayoutByClass('mainLowerAlphas', '68');
            setVisibleByID('keyRightWin', false);
            //regular number row
            setLayoutByClass('mainArea', '100');
            break;
        case '60':
            //no room for arrow keys
            setLayoutByClass('mainBottomRow', '100');
            setLayoutByClass('mainLowerAlphas', '100');
            setVisibleByID('keyRightWin', true);
            //regular number row
            setLayoutByClass('mainArea', '100');
            break;
        case '40':
            //no room for arrow keys
            setLayoutByClass('mainBottomRow', '100');
            setLayoutByClass('mainLowerAlphas', '100');
            setVisibleByID('keyRightWin', true);
            //no number row
            setLayoutByClass('mainArea', '40');
            break;
        default:
            break;     
    }
}