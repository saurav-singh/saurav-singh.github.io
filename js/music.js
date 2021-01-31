$(document).ready(() => {

    // Initialize Player
    let PLAYER = new Audio();

    // Initialize music files and shuffle
    const PATH_PREFIX = "/assets/music/";
    const MUSIC_FILES = ["mixkit-01.mp3", "mixkit-02.mp3", "mixkit-03.mp3", "mixkit-04.mp3"].sort(() => Math.random() - 0.5);

    // Connect music to player
    PLAYER.src = PATH_PREFIX + MUSIC_FILES[0];

    // On Click - Play Button
    $("#playMusic").click(() => {
        PLAYER.play();
        $("#playMusic").css("display", "none");
        $("#pauseMusic").css("display", "block");
    });

    // On Click - Pause Button
    $("#pauseMusic").click(() => {
        PLAYER.pause();
        $("#pauseMusic").css("display", "none");
        $("#playMusic").css("display", "block");
    });

});



