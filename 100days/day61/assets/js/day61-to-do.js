//Check off to-dos by clicking
$('ul').on("click", "li", function() {
    $(this).toggleClass("completed");
});

//Click on X to delete to-do
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//Add new to-dos
$("#pictoBox i").click(function(event){
    var pictoSel = $(this);
    $("ul").append('<li><span><i class="fa fa-trash fa-lg"></i></span><i class="' + pictoSel.attr('class') + ' fa-lg"></i></li>');
});


//plus
$(".fa-plus").click(function(){
    $("#pictoBox").fadeToggle();
});