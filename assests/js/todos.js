// $('li').click(function(){
//     //if li is grey
//     if($(this).css("color")=== "rgb(128, 128, 128)"){
//         //turn it black
//         $(this).css({
//             color: "black",
//             textDecoration: "none"        
//         });
//     }
//     //else
//     else{
//         $(this).css({
//             color: "gray",
//             textDecoration: "line-through"
//         });
//     }
// });


//instead of doing above code **DO THIS**

// $("li").click(function(){
//     $(this).toggleClass("completed");
// });
// // click to delete todo
// $("span").click(function(event){
//     $(this).parent().fadeOut(500,function(){
//         $(this).remove();
//     });
//     event.stopPropagation();
// })

//using ON instead of CLICK in below code


$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});
// click to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul

        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>")
    }
});
$(".fa-plus").on("click", function(){
    $("input").fadeToggle(500);
});
