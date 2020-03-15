// Made by Guy Kaplan (March 2020)
$(function() {
    // set bg color
    document.body.style.backgroundColor = "#f3f3f3";
    // headline
    $("#hidden").text("HIDDEN");
    $("#headline").html("<h1><a>Blink 182</a> - Made by Guy Kaplan</h1>");
    $("a").attr("href", "https://www.blink182.com/");
    $("a").attr("target", "_blank");
    $("#hidden").hide();

    // add images attributes
    $("#image1").attr("src", "https://i.imgur.com/kOSv4Gv.jpg");
    $("#image2").attr("src", "https://upload.wikimedia.org/wikipedia/commons/3/30/Blink-182-colorful-smiley-face-square.jpg");
    $("#image1").draggable();
    $("#image2").draggable();
    $("#images").attr("style", "width:700px");
    // center images div
    $("#images").css("display", "block");
    $("#images").css("margin", "0 auto");
    //$("#images").draggable();
    // select all <img> tags
    $("img").attr("width", 250);
    // add buttons
    $("#buttons").html("<br><button>Show/Hide Images<br>(click & drag them)</button>");
    $("button").attr("id", "toggleImagesBtn")

    // display image details
    var image1Src = $("#image1").attr("src");
    var image1Width = $("#image1").attr("width");
    $("#info").css("background-color", "firebrick");
    $("#info").html("<p><u>Left image src</u>: " + image1Src + "</p>");
    $("#info").append("<p><u>Left image width</u>: " + image1Width + "</p>");
    $("#info").append("<p>Press any key OR click this background :)</p><br>");
    $("#info").height(150);
    // select ALL <p> tags (change text size)
    $("p").css("font-size", "22px");
    // select ALL <div> tags (center text)
    $("div").css("text-align", "center");

    // functions
    // event handler - div click
    var bgColorNum = 1; // 1=red, 2=yellow, 3=green
    var numOfSpaces = 12;
    $("#info").click(function() {
        if (bgColorNum === 1) // display yellow bg
        {
            $("#info").css("background-color", "orange");
            bgColorNum++;
        }
        else if (bgColorNum === 2) // display green bg + cool words
        {
            $("#info").css("background-color", "limegreen");
            for (var i = 0; i < numOfSpaces; i++)
                $("#info").append("&nbsp;"); // add space
            $("#info").append("<b>BLINK ME!</b>");
            bgColorNum++;
        }
        else // color is green (3) - display red bg
        {
            $("#info").css("background-color", "firebrick");
            bgColorNum = 1;
        }
    });//end of click function

    // event handler - any key press
    // "*" = select all elements of the HTML DOM
    $("*").keydown(function(event) { // was: keypress
        $("#info").trigger("click");
        // Stop the event from bubbling up to other elements.
        // Here, prevent problem of reverse colors order, when pressing any key
        event.stopPropagation();
    });//end of keydown function

    // event handler - button click => toggle images fading
    var areImagesShown = true;
    $("#toggleImagesBtn").click(function(event) {
        (areImagesShown) ?
            $("#images").fadeTo(1000, 0) : // hide images
            $("#images").fadeTo(1000, 1); // show images
        areImagesShown = !areImagesShown; // toggle var
        //$("#images").fadeToggle(1000);
        //event.stopPropagation();
    });

});//end of function() = eof