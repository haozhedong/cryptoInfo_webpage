function adjustFontSize() {
    console.log("adjustFontSize function called");
    var slider = document.getElementById("fontSizeSlider");
    var adjustmentFactor = (slider.value - 16);
    var adjustableElements = document.querySelectorAll("[data-initial-font-size]");

    adjustableElements.forEach(function(element) {
        var initialFontSize = parseFloat(element.getAttribute("data-initial-font-size"));
        var newSize = initialFontSize + adjustmentFactor;
        element.style.fontSize = newSize + 'px';
    });
}

function resetFontSize() {
    var slider = document.getElementById("fontSizeSlider");
    var adjustableElements = document.querySelectorAll("[data-initial-font-size]");

    adjustableElements.forEach(function(element) {
        var initialFontSize = element.getAttribute("data-initial-font-size");
        element.style.fontSize = initialFontSize + 'px';
    });

    slider.value = 16;

    document.getElementsByTagName("body")[0].style.backgroundColor = "";
    document.getElementsByTagName("body")[0].style.color = "";
}

document.addEventListener("DOMContentLoaded", function() {
    var slider = document.getElementById("fontSizeSlider");
    var adjustableElements = document.querySelectorAll(".content *");

    adjustableElements.forEach(function(element) {
        var initialFontSize = window.getComputedStyle(element).fontSize;
        element.setAttribute("data-initial-font-size", parseFloat(initialFontSize));
    });

    slider.value = 16;
});

function changeToDark() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "black";
    document.getElementsByTagName("body")[0].style.color = "white";
}