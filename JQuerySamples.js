$(document).ready(function(){
    $(".clickEvent button").click(function(){
        $(".clickEvent p").text("CLICK CAN TRIGGER AN EVENT LIKE THIS TEXT CHANGING");
    });
    $(".hideEvent button").click(function(){
        $(".hideEvent p").hide();
    });
    $(".showEvent button").click(function(){
        $(".showEvent p").show("slow");
    });
    $(".toggleEvent button").click(function(){
        $(".toggleEvent p").toggle();
    });
    $(".slideDownEvent button").click(function(){
        $(".slideDownParagraph").slideDown();
    });
    $(".slideUpEvent button").click(function(){
        $(".slideUpParagraph").slideUp();
    });
    $(".slideToggleEvent button").click(function(){
        $(".slideToggleParagraph").slideToggle();
    });
    $(".fadeInEvent button").click(function(){
        $(".fadeInEvent p").fadeIn(2000);
    });
    $(".fadeOutEvent button").click(function(){
        $(".fadeOutEvent p").fadeOut(1000);
    });
    $(".addClassEvent button").click(function(){
        $(".addClassEvent p").addClass("bkgclass");
    });
    $(".beforeEvent button").click(function(){
        $(".beforeEvent p").before("<h4>New heading inserted before paragraph</h4>");
    });
    $(".afterEvent button").click(function(){
        $(".afterEvent p").after("<h4>New heading inserted after paragraph</h4>");
    });
    $(".appendEvent button").click(function(){
        $(".appendEvent p").append("<strong> New text appended after text in paragraph.</strong>");
    });
    $(".htmlEvent button").click(function(){
        $(".htmlAdd").html("<h4>html</h4>");
        $(".htmlAdd").after("<p>This html was added using the JQuery for .html");
    });
    $(".attrEvent button").click(function(){
        $(".attrEvent p").attr("id","attrID");
    });
    $(".valEvent button").click(function(){
        var buttonText = $(this).text();
        $(".valEvent input").val(buttonText);
    });
    $(".textEvent button").click(function(){
        $(".textEvent p").text("This is the new text due to .text changing what is inside <p>");
    });
    $(".dataEvent button").click(function(){
        $(".dataParagraph").data("test",{first: 8, second: 9});
        $("span:first").text($(".dataParagraph").data("test").first);
    });
});