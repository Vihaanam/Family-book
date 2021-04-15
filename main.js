var text = ["Welcome", "My Father", "My Mother", "Me", "Thank You"];
var image = ["Title photo.png", "Father.png", "Mother.png", "Boy.png", "Title photo end.png"];
var number = 0;
function next() {
    number = number + 1;
    if (number > 4) {
        number = 0;
    }
    document.getElementById("imager").src = image[number];
    document.getElementById("text_text").innerHTML = text[number];
}