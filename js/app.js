$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['home', 'about','Resume', 'projects'],
        //normalScrollElements:['#section3'],
        scrollingSpeed: 1000,
        scrollOverflow: true,
        mouseWheelScrolling: false,
        autoScrolling: false,
        verticalCentered: false
    });

});