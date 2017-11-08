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


 //     $(".available").click( function(){
 //         $("#reservation-form").fadeIn(1000);
 //     });

 //     $(".exit").click(function(){
 //         $("#reservation-form").css("display", "none");

 //      });
    
 // $(".save").click(function(){

 // 	$("#reservation-form").fadeOut(1000);
 // });
 // (".reserved").on("mouseover"),function(){
 // 	$(".reserved").css("cursor", "not-allowed");
 // };
 //  $(".available").on("mouseover",function(){
 //  	$(this).css("crusor", "pointer");
 //  });

 //  $(".save").on("click",function(){
 //  	$(".available")addClass("reserved")
  // });
 // user provides input 
 // on save grab that info and save it - 
 // after you save it , the form has to close 
  //on hover info appers  

  //Comment Your Code
  //Write down your questions (What. Why, When, How)
  //When in class, if your question is unanswered, write it down


   