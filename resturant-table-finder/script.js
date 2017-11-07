$(document).ready(function(){

$(".available").on("click",function(){
    $("#reservation-form").css("visibility", "visible");
    });

    $("button").on("click", function(){
        $("#reservation-form").css("visibility", "hidden");
    });

    $(".x").on("click", function(){
        $("#reservation-form").css("visibility", "hidden");
    });