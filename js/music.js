$(document).ready(() => {

    // Initialize music files and shuffle
    const PATH_PREFIX = "/assets/music/";
    const MUSIC_FILES = ["mixkit-01.mp3", "mixkit-02.mp3", "mixkit-03.mp3", "mixkit-04.mp3"].sort(() => Math.random() - 0.5);

    // Initialize Player
    let PLAYER = new Audio(PATH_PREFIX + MUSIC_FILES[0]);
    let STATE = false;

    // Event Listener to loop music
    PLAYER.addEventListener("ended", () => {
        MUSIC_FILES.push(MUSIC_FILES.shift());
        PLAYER.src = PATH_PREFIX + MUSIC_FILES[0];
        if (STATE) PLAYER.play();
    });

    // On Click - Play Button
    $("#playMusic").click(() => {
        PLAYER.play();
        STATE = true;
        $("#playMusic").css("display", "none");
        $("#pauseMusic").css("display", "block");
    });

    // On Click - Pause Button
    $("#pauseMusic").click(() => {
        PLAYER.pause();
        STATE = false;
        $("#pauseMusic").css("display", "none");
        $("#playMusic").css("display", "block");
    });

});



