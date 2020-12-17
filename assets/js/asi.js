/* MAIN */
$(document).ready(function() {
    /* Intro text animation */
    let introText = "ASI Karikas 2021 on võistkondlik programmeerimise võistlus kooliõpilastele.";
    let introTextbox = $("#intro");

    fitTextboxToText(introTextbox, introText, true, $("section:not(#introduction), #organizers"));
    revealText(introTextbox, introText, 54);

    /* Smooth navigation scrolling */
    $(".nav-link").click(navScroll);
});

/* FUNCTIONS */
/* Intro text */
function revealText(textbox, text, speed, letter_position = 0){
    setTimeout(function(){
        if (letter_position < text.length){
            textbox.append(text.charAt(letter_position));

            /* Recursion until the whole text has been reveled */
            letter_position++;
            revealText(textbox, text, speed, letter_position);
        }
    }, speed);
}
function fitTextboxToText(textbox, text, hidden_content = false, content){
    textbox.text(text); // Add placeholder text to measure how tall the textbox has to be
    textbox.height(textbox.height()); // Save textbox current height
    textbox.text(""); // Remove placeholder text

    if (hidden_content){ // Content is previously hidden using CSS to avoid screen flickering
        content.css("visibility", "visible");
    }
}

/* Navbar */
function navScroll(){
    let destination_element = $($(this).data("destination")); // Navbar link points to a ceratin page element, which ID is stored in a data label

    window.scrollTo({
        top: destination_element.offset().top - 20,
        behavior: "smooth"
      });
}