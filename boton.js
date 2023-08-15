// JavaScript code for enabling fullscreen button
document.addEventListener("DOMContentLoaded", function () {
    let fullscreenButton = document.getElementById("fullscreenButton");

    fullscreenButton.addEventListener("click", toggleFullscreen);

    function toggleFullscreen() {
        if (document.fullscreenElement) {
            exitFullscreen();
        } else {
            enterFullscreen();
        }
    }

    function enterFullscreen() {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
            fullscreenButton.textContent = "Back to Normal";
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
            fullscreenButton.textContent = "Back to Normal";
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
            fullscreenButton.textContent = "Back to Normal";
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
            fullscreenButton.textContent = "Back to Normal";
        }
    }

    function exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            fullscreenButton.textContent = "Go Fullscreen";
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
            fullscreenButton.textContent = "Go Fullscreen";
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
            fullscreenButton.textContent = "Go Fullscreen";
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
            fullscreenButton.textContent = "Go Fullscreen";
        }
    }
});
