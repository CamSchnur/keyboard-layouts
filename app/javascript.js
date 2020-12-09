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
    $("#layout75").click(function() {
        
        addLayout('75');
    })
    $("#layout68").click(function() {
        
        addLayout('68');
    })
    $("#layout65").click(function() {
        
        addLayout('65');
    })
    $("#layout60").click(function() {
        
        addLayout('60');
    })
    $("#layout40").click(function() {
        
        addLayout('40');
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