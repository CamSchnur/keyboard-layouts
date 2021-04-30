$(document).ready(function() {
    addLayout('100');
    setStyle('dark');
    $('#rangeSelector').val('7');
    $("#rangeSelector").on("input change", function() 
    {
        UpdateLayoutFromSlider();
    });
    $("#swapLight").click(function() 
    {
        setStyle('light');
    })
    $("#swapDark").click(function() 
    {
        setStyle('dark');
    })
    $("#layout100").click(function() {        
        UpdateLayoutFromButton('7');
    })
    $("#layoutTKL").click(function() {   
        UpdateLayoutFromButton('6');
    })
    $("#layout75").click(function() {
        UpdateLayoutFromButton('5');
    })
    $("#layout68").click(function() {
        UpdateLayoutFromButton('4');
    })
    $("#layout65").click(function() {
        UpdateLayoutFromButton('3');
    })
    $("#layout60").click(function() {        
        UpdateLayoutFromButton('2');
    })
    $("#layout40").click(function() {
        UpdateLayoutFromButton('1');
    })

});
function setLayoutByClass(className, layout)
{
    $('.' + className).addClass(className + layout);
}
function setLayoutById(className, layout)
{
    $('#' + className).addClass(className + layout);
}
function removeLayoutById(idName, layout)
{
    $('#' + idName).removeClass(idName + layout);
}
function removeLayoutByClass(idName, layout)
{
    $('.' + idName).removeClass(idName + layout);
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
function setVisibleText(elementName, visible)
{
    if(visible)
    {
        $(elementName).removeClass('hiddenText');
        $(elementName).addClass('visibleText');
    }
    else
    {
        $(elementName).removeClass('visibleText');
        $(elementName).addClass('hiddenText');
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
function UpdateLayoutFromSlider()
{
    var val = $('#rangeSelector').val();
    SetLayout(val);
} 
function UpdateLayoutFromButton(buttonVal)
{
    SetLayout(buttonVal);
    SetSlider(buttonVal);
}
function SetLayout(sliderVal)
{
    switch(sliderVal)
    {
        case '1':
            addLayout('40');
            break;
        case '2':
            addLayout('60');
            break;      
        case '3':
            addLayout('65');
            break; 
        case '4':
            addLayout('68');
            break;    
        case '5':
            addLayout('75');
            break;    
        case '6':
            addLayout('TKL');
            break;         
        case '7':
            addLayout('100');
            break;
    }
}
function SetSlider(sliderVal)
{
    $('#rangeSelector').val(sliderVal);
    $('#rangeSelector').slider('refresh');
}