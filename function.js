
//form is the .cd-form element
form.velocity(
{
    'width': tableWidth+'px', //pricing table item width
    'height': tableHeight+'px', //pricing table item height
    'top': formTopValue, //final top value of the form 
    'left': formLeftValue, //final top value of the form 
    'translateX': formTranslateX+'px', //difference between formLeftValue and pricing table item left value
    'translateY': formTranslateY+'px', //difference between formTopValue and pricing table item top value
    'opacity': 1,
}, 0, function(){
    //table is the pricing table item
    table.addClass('empty-box');
    
    form.velocity(
    {
        'width': formFinalWidth+'px', //form final width
        'height': formFinalHeight+'px', //form final height
        'translateX': 0,
        'translateY': 0,
    }, 
    //animation duration
    animationDuration, 
    //spring easing
    [ 220, 20 ]).addClass('is-visible');
});



