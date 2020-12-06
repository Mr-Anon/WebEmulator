function update(){
    $("#outputPanel").contents().find("html").html("<html><head><style type='text/css'>"+$("#cssPanel").val()+"</style></head><body>"+$("#htmlPanel").val()+"</body></html>");
    
    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
   
}


$(".toggleButtons").hover(function() {
                
                $(this).addClass("highlightedButton");
                
            }, function() {
                
                $(this).removeClass("highlightedButton");
                
});

$("#html").addClass("active");
$("#output").addClass("active");
$("#cssPanel").addClass("hidden");
$("#javascriptPanel").addClass("hidden");

$(".toggleButtons").click(function() {
                
                $(this).toggleClass("active");
                $(this).removeClass("highlightedButton")
                var panelId = "#" +$(this).attr("id") + "Panel";
                $(panelId).toggle();
    $(".panel").width(($(window).width() / $(".active").length) - 15);
});

$(".panel").height($(window).height()-$("#header").height()-$("#header").height());
$(".panel").width(($(window).width() / $(".active").length) - 15);

update();
$("textarea").on("change keyup paste", function(){
     
   update();
});





