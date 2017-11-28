 $(document).ready(function(){

var Text;
var name;
var container;
var userName;

$("#save").on("click", function(){
userName = $("name-id").val();
$("name-id").val("");
container.attr("name", userName);
container.addClass("taken");
$("form").hide();

});
});
$(".tables").on("mouseenter",function(event) {
    name = $(this).attr("name");
    partySize = $(this).attr("guest");
    Text = $(this).text();
    $(this).text(name);
    
}).on("mouseleave", function(event){
    $(this).text(text);
});


$(".available").on("click", function(event){
    container = $(this);
    $("#reservation-form").fadeIn(500);
});

//What is this doing?
$(".save").on("click", function(event){
    usersName = $("name").val();
    $("name").val("");
    
    container.attr("name",usersName);
    phone = $("phone").val();
    $("phone").val("");
    
    container.attr("phone", phone);
    partySize = $("guest").val();
    $("#guest").val("");
   
    container.attr("guest",guest);
    container.addClass("reserved");
    $("#reservation-form").hide();
    $(".reserved").off("click");
});

$(".exit").on("click", function(){
    $("#reservation-form").hide();
});


 

   
