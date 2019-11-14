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
$("input[type='text']").keypress(function(event){
    $(this).addClass("pTextTyped");
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
})

//plus
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})